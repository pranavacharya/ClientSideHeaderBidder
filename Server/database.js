var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/database', (err) => {
  if (err) console.log('connection to database failed');
  else {
    console.log('connection successful');
    db.serialize(function () {
      db.run(
        `CREATE TABLE ads( 
          id INTEGER PRIMARY key autoincrement, 
          name VARCHAR(100), 
          url text, 
          cpi INTEGER, 
          CONSTRAINT name_unique UNIQUE (name) 
          )`,
        (err) => {
          if (err) {
            console.log(
              'could not create ad database because : ' + err.message
            );
          } else {
            //insert dummy values into table if table created successfully
            db.parallelize(() => {
              insertAds('google', 'https://gooogle.com', 20);
              insertAds('amazon', 'https://amazon.com', 30);
              insertAds('facebook', 'https://facebook.com', 10);
            });
          }
        }
      );
    });
  }
});

function insertAds(name, url, CPI) {
  db.run(
    'INSERT INTO ads (name, url, CPI) VALUES (?,?,?)',
    [name, url, CPI],
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
