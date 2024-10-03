# NOTICE

This is no longer functional, DMV changed their site and you have to register with an email before you can make any appointments. It was fun while it lasted.

# DMV appointments

An alternative way of showing appointments for all locations, and all services at the NY state dmv.

Please do not abuse this to make tons of unecessary requests. For personal/private use only.

## Setup

Node 14 or greater is required

* Clone this repo
* `npm install`

## To search for appointments
* `node request.js`
* If this is the first time you've ever run this, press Y at the prompt
* Results will be printed in the terminal
* Go make your appointment online at `https://nysdmvqw.us.qmatic.cloud/naoa/index.jsp`


## Updating the list
I assume the DMV periodically changes what services they offer at each location. If you run into any errors using this, select the second to last option from the list titled "Force Update Service locations JSON". This should rebuild the list. Do not abuse this update either, there's a reason I built this to cache the results.
