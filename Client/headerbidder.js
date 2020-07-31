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
  selected.push(ads[highestBidIndex]);
  selected.push(ads[secondHighestBidIndex]);
}

function publishAds() {
  let ad1 = document.getElementById('ad1');
  ad1.setAttribute('href', selected[0].url);
  let ad2 = document.getElementById('ad2');
  ad2.setAttribute('href', selected[1].url);
}

window.onload = (event) => {
  setTimeout(function () {
    findHighestBidderAds();
    publishAds();
  }, threshold);
};
