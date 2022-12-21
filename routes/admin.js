const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'index.html'));
});

// add match.html path
router.get('/match', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'match.html'));
  
});
// also if is match.html
router.get('/match.html', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'match.html'));
});


module.exports = router;
