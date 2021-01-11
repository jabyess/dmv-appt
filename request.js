import axios from 'axios'
import { services, locations, locOnlyPermit, locById } from './ids.js'

const urlbuilder = (location, service)  => {
  let loc = location
  let serv = service
  let date = new Date().getTime()
  let url = `https://nysdmvqw.us.qmatic.cloud/qwebbook/rest/schedule/branches/${loc}/services/${serv}/dates?_=${date}`
  
  return url
}

const printDates = (dates) => {
  dates.forEach(d => {
    console.log(d.date)
  })
  console.log("")
}
const parseURLIntoDate = (url, locations) => {
  let parts = url.split('/')
  let locationID = parts[7]

  console.log(locations[locationID])
}

let successLog = (arr) => {
  let anyDatesAtAll = arr.filter((a) => {
    return a.data.length > 0
  })
  
  if(anyDatesAtAll.length > 0) {
    console.log("*======= Date(s) found! =======*")
    anyDatesAtAll.forEach((d) => {
      parseURLIntoDate(d.config.url, locById)
      printDates(d.data)
    })
    console.log("*===========================*")
  }
  else {
    console.log("No dates found, try again later bucko")
  }

}

let getAllDates = async() => {
  let calls = []

  for(let loc in locOnlyPermit) {
    let url = urlbuilder(locOnlyPermit[loc], services['Motorcycle permit'])
    calls.push(axios.get(url))
  }

  Promise.all(calls).then(val => {
    successLog(val)
  })
  .catch(err => {
    console.error(err)
  })

}

getAllDates()
