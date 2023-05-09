const express = require('express')

const app = express()
 
// routes
app.get('/', (req, res) => {
    res.json({msg: 'Welcome to the app'})
})

app.listen(4000, () => {
    console.log('Listening on port 4000')
})