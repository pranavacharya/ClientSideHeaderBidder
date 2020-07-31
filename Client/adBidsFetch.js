function ssp1() {
  fetch(`http://localhost:3000/ssp1/getAds`)
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
  fetch(`http://localhost:3000/ssp2/getAds`)
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
