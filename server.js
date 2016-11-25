var express = require('express');
var app = express();
var axios = require('axios');

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/api/pokemons', (req, res) => {
    axios.get(req.query.next).then((pokemons) => {
        res.json(pokemons.data);
    }, (err) => {
        throw err;
    });
});

app.get('/api/pokemon', (req, res) => {
    axios.get(req.query.path).then((pokemon) => {
        res.json(pokemon.data);
    }, (err) => {
        throw err;
    });
});

app.listen(PORT, () => {
    console.log('Running on port 3000');
});