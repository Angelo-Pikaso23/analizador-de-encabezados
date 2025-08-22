// index.js
// donde inicia tu aplicación node- ejercicio de FreeCodeCamp terminado

// inicializar proyecto
require('dotenv').config();
var express = require('express');
var app = express();

// habilitar CORS (https://es.wikipedia.org/wiki/Intercambio_de_recursos_de_origen_cruzado)
// para que tu API pueda ser probada remotamente por FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // algunos navegadores antiguos fallan con 204

// http://expressjs.com/es/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/es/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// tu primer endpoint de API...
app.get('/api/whoami', function (req, res) {
  const ipaddress = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];

  res.json({ ipaddress, language, software });
});

// escuchar solicitudes :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Tu aplicación está escuchando en el puerto ' + listener.address().port);
});
