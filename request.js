import axios from "axios"
import rls from "readline-sync"
import {
  services,
  locById,
  serviceToLocMap,
} from "./ids.js"

const promptUser = () => {
  let svcs = Object.keys(services)
  let choice = rls.keyInSelect(svcs, "What do you want to search for?")
  let svc = svcs[choice]

  console.log(`Searching for appointment dates for: ${svc}`)
  getAllDates(serviceToLocMap[svc], svc)
}

const getAllServices = async (branch) => {
  let date = new Date().getTime()
  let url = `https://nysdmvqw.us.qmatic.cloud/qwebbook/rest/schedule/branches/${branch}/services?_=${date}`

  try {
    let services = await axios.get(url)
    console.log(services)
    // return
  } catch (err) {
    console.error(err)
  }
}

const urlbuilder = (locID, svcID) => {
  let date = new Date().getTime()
  let url = `https://nysdmvqw.us.qmatic.cloud/qwebbook/rest/schedule/branches/${locID}/services/${svcID}/dates?_=${date}`

  return url
}

const printDates = (dates) => {
  dates.forEach((d) => {
    console.log(d.date)
  })
  console.log("")
}
const parseURLIntoDate = (url, locations) => {
  let parts = url.split("/")
  let locationID = parts[7]

  console.log(locations[locationID])
}

let successLog = (arr) => {
  let anyDatesAtAll = arr.filter((a) => {
    return a.data.length > 0
  })

  if (anyDatesAtAll.length > 0) {
    console.log("*======= Date(s) found! =======*")
    anyDatesAtAll.forEach((d) => {
      parseURLIntoDate(d.config.url, locById)
      printDates(d.data)
    })
    console.log("*===========================*")
  } else {
    console.log("No dates found, try again later bucko")
  }
}

let getAllDates = (location, service) => {
  let calls = []

  for (let loc in location) {
    let url = urlbuilder(location[loc], services[service])
    calls.push(axios.get(url))
  }

  Promise.all(calls)
    .then((val) => {
      successLog(val)
    })
    .catch((err) => {
      console.error(err)
    })
}

promptUser()
