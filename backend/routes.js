const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({msg: 'this works!'})
})

module.exports = router