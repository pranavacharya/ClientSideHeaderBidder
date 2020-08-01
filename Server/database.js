var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/database', (err) => {
  if (err) console.log('connection to database failed');
  else {
    console.log('connection successful');
    db.serialize(function () {
      db.run(
        `CREATE TABLE ads( 
          id INTEGER PRIMARY key autoincrement, 
          name VARCHAR(100) NOT NULL, 
          url text NOT NULL, 
          cpi REAL NOT NULL, 
          vendor VARCHAR(20) NOT NULL,
          impression INTEGER NOT NULL DEFAULT 0,
          bill REAL NOT NULL DEFAULT 0,
          UNIQUE(name, vendor) ON CONFLICT REPLACE
          )`,
        (err) => {
          if (err) {
            console.log(
              'could not create ad database because : ' + err.message
            );
          } else {
            //insert dummy values into table if table created successfully
            db.parallelize(() => {
              insertAds('google', 'https://google.com', 20, 'ssp1');
              insertAds('amazon', 'https://amazon.com', 30, 'ssp1');
              insertAds('facebook', 'https://facebook.com', 10, 'ssp1');
              insertAds('linkedin', 'https://linkedin.com', 22, 'ssp1');
              insertAds('yahoo', 'https://yahoo.com', 14, 'ssp1');
              insertAds('microsoft', 'https://microsoft.com', 12, 'ssp1');
              insertAds('airbnb', 'https://www.airbnb.co.in', 24, 'ssp1');
              insertAds('wikipedia', 'https://www.wikipedia.org', 19, 'ssp1');
              insertAds('spotify', 'https://www.spotify.com/in', 21, 'ssp1');
              insertAds('dropbox', 'https://www.dropbox.com', 15, 'ssp1');
              insertAds('youtube', 'https://www.youtube.com', 8, 'ssp1');
              insertAds('adobe', 'https://www.adobe.com', 16, 'ssp1');
              insertAds('google', 'https://google.com', 21, 'ssp2');
              insertAds('amazon', 'https://amazon.com', 20, 'ssp2');
              insertAds('facebook', 'https://facebook.com', 13, 'ssp2');
              insertAds('linkedin', 'https://linkedin.com', 25, 'ssp2');
              insertAds('yahoo', 'https://yahoo.com', 19, 'ssp2');
              insertAds('microsoft', 'https://microsoft.com', 21, 'ssp2');
              insertAds('airbnb', 'https://www.airbnb.co.in', 26, 'ssp2');
              insertAds('wikipedia', 'https://www.wikipedia.org', 30, 'ssp2');
              insertAds('spotify', 'https://www.spotify.com/in', 29, 'ssp2');
              insertAds('dropbox', 'https://www.dropbox.com', 31, 'ssp2');
              insertAds('youtube', 'https://www.youtube.com', 18, 'ssp2');
              insertAds('adobe', 'https://www.adobe.com', 22, 'ssp2');
            });
          }
        }
      );
    });
  }
});

function insertAds(name, url, CPI, vendor) {
  db.run(
    'INSERT INTO ads (name, url, CPI, vendor) VALUES (?,?,?,?)',
    [name, url, CPI, vendor],
    (err) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log('inserted successfull');
      }
    }
  );
}

module.exports = db;
