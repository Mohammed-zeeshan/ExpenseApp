const express = require('express');

const router = express.Router();

const path = require('path');

const trackerController = require('../controllers/tracker');

router.get('/', trackerController.getexpense);

router.get('/addexpense', trackerController.getpostexpense);

router.post('/addexpense', trackerController.postexpense);

router.post('/expense/delete', trackerController.deleteexpense);

router.get('/expense/edit/:id', trackerController.geteditexpense);

router.post('/editexpense', trackerController.editexpense);

module.exports = router;