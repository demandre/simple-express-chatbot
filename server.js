const express = require('express')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3000
const app = express()

app.use(bodyParser.json());

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

app.post('/chat', function (req, res) {
    let msg = req.body.msg
    switch (msg) {
        case 'ville':
            res.send('Nous sommes à Paris');
            return;

        case 'météo':
            res.send('Il fait beau');
            return;

        default:
            res.send('Veuillez formuler votre requete dans le param msg: ville ou météo')
            return;
    }
})

app.listen(PORT, function () {
    console.log('Hello world listening on port ' + PORT)
})
