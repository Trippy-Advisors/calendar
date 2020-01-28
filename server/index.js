const express = require('express');
const app = express();
const parser = require('body-parser');
const db = require('./db.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(parser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/hotels', (req, res) => {
    return db.getLocations()
      .then((locations) => {
          res.send(locations);
      })
})


app.listen(1128, () => {
    console.log('Listening on Chickin App');
})