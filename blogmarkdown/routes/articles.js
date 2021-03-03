const { request } = require('express');
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    res.send('in articles')
});
// router
module.exports = router;
