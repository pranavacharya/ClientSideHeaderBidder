var ads = [];

var selected = [];

const threshold = 1000;

function findHighestBidderAds() {
  let highestbid = 0;
  let secondHighestbid = 0;
  let highestBidIndex;
  let secondHighestBidIndex;
  for (let index = 0; index < ads.length; index++) {
    if (ads[index].cpi > highestbid) {
      highestbid = ads[index].cpi;
      highestBidIndex = index;
    }
  }
  for (let index = 0; index < ads.length; index++) {
    if (ads[index].cpi > secondHighestbid && index != highestBidIndex) {
      secondHighestbid = ads[index].cpi;
      secondHighestBidIndex = index;
    }
  }
  if (highestBidIndex) {
    selected.push(ads[highestBidIndex]);
  }
  if (secondHighestBidIndex) {
    selected.push(ads[secondHighestBidIndex]);
  }
}

function publishAds() {
  if (selected.length > 0) {
    let ad1 = document.getElementById('ad1');
    ad1.setAttribute('href', selected[0].url);
  }
  if (selected.length > 1) {
    let ad2 = document.getElementById('ad2');
    ad2.setAttribute('href', selected[1].url);
  }
}

window.onload = (event) => {
  setTimeout(function () {
    findHighestBidderAds();
    publishAds();
  }, threshold);
};

function recordAnalytics(ad) {
  let index;
  if (ad.id == 'ad1') {
    index = selected[0].id;
  } else if (ad.id == 'ad2') {
    index = selected[1].id;
  } else {
    return;
  }
  fetch(`http://localhost:3000/analytics/recordClick/` + index)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      return json;
    });
}
