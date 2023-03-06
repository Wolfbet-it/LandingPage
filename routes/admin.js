const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'candidature.html'));
});
router.get('/roadmap', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'roadmap.html'));
});



module.exports = router;
