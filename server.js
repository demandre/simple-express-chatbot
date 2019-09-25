const express = require('express')
const PORT = process.env.PORT || 3000

const app = express()

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/hello', function (req, res) {
    let name = req.query.name
    if(typeof name !== 'undefined') {
        res.send('Hello ' + name + '!')
    } else {
        res.send('Whats your name?')
    }
})

app.listen(PORT, function () {
    console.log('Hello world listening on port ' + PORT)
})
