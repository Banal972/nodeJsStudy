"use strict";

const express = require('express');
const router = express.Router();

const crtl = require('./home.ctrl');

router.get("/",crtl.output.home);
router.get("/login",crtl.output.login);
router.get("/login",crtl.process.login);

module.exports = router;