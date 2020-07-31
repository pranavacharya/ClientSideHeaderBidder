var express = require('express');
var router = express.Router();
var db = require('../database');

router.get('/getAds', function (req, res, next) {
  db.all(
    'SELECT * FROM ads WHERE vendor = "ssp2" ORDER BY RANDOM() LIMIT 4',
    [],
    (err, rows) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.status(200).json({ rows });
    }
  );
});

router.get('/listAds', function (req, res, next) {
  db.all('SELECT * FROM ads WHERE vendor = "ssp2"', [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.status(200).json({ rows });
  });
});

router.post('/createAds', function (req, res, next) {
  db.run(
    'INSERT INTO ads (name, url, CPI, vendor) VALUES (?,?,?,?)',
    [req.body.name, req.body.URL, req.body.CPI, req.body.vendor],
    (err) => {
      if (err) {
        console.log('create ad failed ' + err.message);
        res.status(400).json({ error: err.message });
      } else {
        res.status(200).json({ message: 'ad posted successfuly' });
      }
    }
  );
});

module.exports = router;
