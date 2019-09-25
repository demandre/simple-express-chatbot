# simple-express-chatbot

## Fonctions

WIP: For now it's just an HTTP hello world server. 

It returns:
 - `Hello world` on `GET /` request.
 - `Quel est votre nom?` on `GET /hello` request.
 - `Bonjour <nom>!` on `GET /hello?nom=<nom>` request.

## Installation

```sh
$ git clone https://github.com/demandre/simple-express-chatbot.git
$ cd simple-express-chatbot
$ npm install
$ npm start # launch HTTP server on port 3000
```

## Tests

Then you'll get an 'Hello world!' when accessing localhost:3000.
