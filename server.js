var express = require('express');
var app = express();
var axios = require('axios');

const PORT = process.env.PORT || 3000;
const rootUrl = 'https://pokeapi.co/api/v2';

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/:name?', (req, res) => {
    res.render('index');
});

app.get('/api/pokemon', (req, res) => {
    axios.get(`${ rootUrl }/pokemon?offset=${ req.query.offset }`).then((pokemons) => {
        res.json(pokemons.data);
    }, (err) => {
        throw err;
    });
});

app.get('/api/pokemon/:name', (req, res) => {
    axios.get(`${ rootUrl }/pokemon/${ req.params.name }`).then((pokemon) => {
        res.json(pokemon.data);
    }, (err) => {
        throw err;
    });
});

app.get('/api/type', (req, res) => {
    axios.get(`${ rootUrl }/type`).then((types) => {
        res.json(types.data);
    }, (err) => {
        throw err;
    });
});

app.get('/api/type/:name', (req, res) => {
    axios.get(`${ rootUrl }/type/${ req.params.name }`).then((type) => {
        res.json(type.data);
    }, (err) => {
        throw err;
    });
});

app.listen(PORT, () => {
    console.log('Running on port 3000');
});