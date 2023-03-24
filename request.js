import axios from "axios";
import rls from "readline-sync";
import fs, { writeFileSync } from "fs";
import { access } from "fs/promises";
import { services, locById, serviceToLocMap, locations } from "./ids.js";

const BASE_URL = `https://nysdmvqw.us.qmatic.cloud/qwebbook/rest/schedule`;
const MASTER_SERVICES_FILE = "./masterServicesList.json";
let allServices 

const promptUser = async () => {
  // get services and save to disk if they don't exist
  // if(_getAllServicesByLocation()) {
  let ready = await _getAllServicesByLocation();

  if (ready) {
    allServices = JSON.parse(fs.readFileSync(MASTER_SERVICES_FILE));
  }
  
  let svcs = Object.keys(allServices);
  svcs.push("Force Update Service locations JSON")
  const choice = rls.keyInSelect(svcs, "What do you want to search for?")
  const svc = svcs[choice]

  if(choice === svcs.length - 1) {
    await _getServicesByLocation()
  }
  else if(choice !== -1) {
    console.log(`Searching for appointment dates for: ${svc}`)
    getAllDates(svc)
  }
  else {
    console.log("You canceled, goodbye")
  }
};

const _getAllServicesByLocation = async () => {
  try {
    await access(MASTER_SERVICES_FILE);
    return true;
  } catch (err) {
    if (rls.keyInYN("Services file does not exist. Press Y to retrieve")) {
      await _getServicesByLocation();
    }
  }
};

const _getServicesByLocation = async () => {
  let allServicesAtLocation = {};

  console.log("Fetching...");

  for (let loc in locations) {
    try {
      const servicesAtLocation = await axios.get(svcBuilder(locations[loc]));
      const flattenedServices = servicesAtLocation.data.map(
        ({ name, publicId }) => ({ name, publicId })
      );
      allServicesAtLocation[loc] = flattenedServices;
    } catch (err) {
      console.error("Error fetching services by location", err);
    }
  }

  _groupServicesByLocation(allServicesAtLocation);
};

const _groupServicesByLocation = (allServicesAtLocation) => {
  const masterServicesList = {};

  console.log("Building services file and writing to disk...");

  for (let loc in allServicesAtLocation) {
    const val = allServicesAtLocation[loc];
    val.forEach(({ name, publicId }) => {
      let formattedName = stripNumbersFromServices(name)
      if (!masterServicesList?.[formattedName]?.locations) {
        masterServicesList[formattedName] = {};
        masterServicesList[formattedName].locations = [];
        masterServicesList[formattedName].locations.push({
          name: loc,
          locId: locations[loc],
        });
        masterServicesList[formattedName].serviceId = publicId;
      } else {
        masterServicesList[formattedName].locations.push({
          name: loc,
          locId: locations[loc],
        });
        masterServicesList[formattedName].serviceId = publicId;
      }
    });
  }

  fs.writeFileSync(MASTER_SERVICES_FILE, JSON.stringify(masterServicesList));
  console.log("Services file updated.");
  promptUser()
};

// get all services at a given location
const svcBuilder = (locID) => {
  let date = new Date().getTime();
  return `${BASE_URL}/branches/${locID}/services?_=${date}`;
};

// get all available dates for a given service at a given location
const urlBuilder = (locID, svcID) => {
  let date = new Date().getTime();
  return `https://nysdmvqw.us.qmatic.cloud/qwebbook/rest/schedule/branches/${locID}/services/${svcID}/dates?_=${date}`;
};

const stripNumbersFromServices = (svc) => {
  let num = Number(svc.split(" ")[0])
  
  if(typeof svc === "string" && num) {
    return svc.split(" ").slice(1).join(" ")
  }
  else {
    return svc
  }

}

const printDates = (dates) => {
  dates.forEach((d) => {
    console.log(d.date);
  });
  console.log("")
};
const parseURLIntoDate = (url, locations) => {
  let parts = url.split("/");
  let locationID = parts[7];

  console.log(locations[locationID]);
};

let successLog = (arr) => {
  let anyDatesAtAll = arr.filter((a) => {
    return a.data.length > 0;
  });

  if (anyDatesAtAll.length > 0) {
    console.log("*======= Date(s) found! =======*");
    anyDatesAtAll.forEach((d) => {
      parseURLIntoDate(d.config.url, locById);
      printDates(d.data);
    });
    console.log("Make yer appt at: ");
    console.log("https://nysdmvqw.us.qmatic.cloud/naoa/index.jsp");
    console.log("*===========================*");
  } else {
    console.log("No dates found, try again later bucko");
  }
};

let getAllDates = (service) => {
  let calls = [];

  allServices[service].locations.forEach((loc) => {
    let { locId } = loc
    let serviceId = allServices[service].serviceId
    let url = urlBuilder(locId, serviceId)
    calls.push(axios.get(url))
  })

  Promise.all(calls)
    .then((val) => {
      successLog(val);
    })
    .catch((err) => {
      console.error(err);
    });
};

promptUser();
