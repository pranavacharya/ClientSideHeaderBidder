var ads = [];

var selected = [];

const threshold = 1000;

const BASEURL = 'http://localhost:3000';

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

async function recordAnalytics(event) {
  const ad = event.currentTarget;
  event.preventDefault();
  let index;
  if (ad.id == 'ad1') {
    index = selected[0].id;
  } else if (ad.id == 'ad2') {
    index = selected[1].id;
  } else {
    return;
  }
  try {
    let response = await reportClick(index);
    let json = await response.json();
    console.log(json.message);
  } catch (error) {
    console.log('event not captured : ', error);
  }
  var href = ad.getAttribute('href');
  window.location.href = href;
}

function reportClick(index) {
  return fetch(BASEURL + `/analytics/recordClick/` + index);
}
