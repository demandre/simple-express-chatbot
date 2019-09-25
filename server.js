const express = require('express')
const PORT = process.env.PORT || 3000

const app = express()

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/hello', function (req, res) {
    let nom = req.query.nom
    if(typeof nom !== 'undefined') {
        res.send('Bonjour ' + nom + '!')
    } else {
        res.send('Quel est votre nom?')
    }
})

app.listen(PORT, function () {
    console.log('Hello world listening on port ' + PORT)
})
