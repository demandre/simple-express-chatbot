# simple-express-chatbot

## Fonctions

WIP: An HTTP hello world server with POST simple chatbot. 

It returns:
 - `Hello world` on `GET /` request.
 - `Quel est votre nom?` on `GET /hello` request.
 - `Bonjour <nom>!` on `GET /hello?nom=<nom>` request.
 - `Il fait beau` on `POST /chat` request with `{msg:méteo}` data
 - `Nous sommes à Paris` on `POST /chat` request with `{msg:ville}` data


## Installation

```sh
$ git clone https://github.com/demandre/simple-express-chatbot.git
$ cd simple-express-chatbot
$ npm install
$ npm start # launch HTTP server on port 3000
```

## Tests

When you've launched the server, you'll be able to test it like this:

```sh
curl localhost:3000/
curl localhost:3000/hello
curl localhost:3000/hello?nom=john
curl -X POST --header "Content-Type: application/json" --data "{\"msg\":\"ville\"}" http://localhost:3000/chat
curl -X POST --header "Content-Type: application/json" --data "{\"msg\":\"météo\"}" http://localhost:3000/chat  
```