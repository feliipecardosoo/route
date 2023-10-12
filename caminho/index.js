const express = require('express')
const router = express.Router()
const path = require('path')

const pathRoute = path.join(__dirname,'../templates')

router.get('/teste', (req, res) => {
    res.sendFile(`${pathRoute}/index.html`)
})

router.get('/instagram', (req, res) => {
    res.sendFile(`${pathRoute}/instagram.html`)
})

module.exports = router