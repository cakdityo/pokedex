var express = require('express');
var app = express();
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use((req, res, next) => {
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();   
    }
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/api/pokemons', (req, res) => {
    P.getPokemonByName('pikachu').then((response) => {
        res.json(response);
    });
});

app.listen(PORT, () => {
    console.log('Running on port 3000');
});