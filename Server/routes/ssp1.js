var express = require('express');
var router = express.Router();
var db = require('../database');

router.get('/getAds', function (req, res, next) {
  db.all('SELECT * FROM ads', [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.status(200).json({ rows });
  });
});

router.post('/createAds', function (req, res, next) {
  db.run(
    'INSERT INTO ads (name, url, CPI) VALUES (?,?,?)',
    [req.body.name, req.body.URL, req.body.CPI],
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
