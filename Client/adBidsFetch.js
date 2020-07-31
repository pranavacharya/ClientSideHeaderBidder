const BASEURL = 'https://client-header-bidder-server.herokuapp.com';

function ssp1() {
  fetch(BASEURL + `/ssp1/getAds`)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      json.rows.forEach((element) => {
        ads.push(element);
      });
    });
}

function ssp2() {
  fetch(BASEURL + `/ssp2/getAds`)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      json.rows.forEach((element) => {
        ads.push(element);
      });
    });
}

ssp1();
ssp2();
