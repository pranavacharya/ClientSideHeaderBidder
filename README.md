# Client Side Header Bidder

Project simulates client side header bidding. 

Server acts as a mock ad-server and returns list of available ad with the respective CPI bid. 
Client selects the ad with highest CPI bid among all the configured supply side platforms and displays it.

## Run

### Start Server

Change directory to server
`cd Server`

Install dependencies
`npm install`

Run server
`npm run start`

### Client
Change directory to Client
`cd Client`

Run client by opening index.html on browser

## Demo

### server
[sample api to fetch ads](https://client-header-bidder-server.herokuapp.com/ssp1/getAds) 

### client
https://clientbidderpoc.netlify.app
