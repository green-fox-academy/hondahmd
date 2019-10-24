const express = require('express');

const server = express();
const PORT = 3000;
const alcoholList = ['gin', 'vodka', 'rum', 'tequila'];
const cocktails = [
    { name: 'GIN FIZZ', price: 1520, contains: ['gin', 'sugar', 'lemon juice', 'soda'], isAlcoholic: true },
    { name: 'BLOODY MARY', price: 1650, contains: ['vodka', 'tomato juice', 'spices'], isAlcoholic: true },
    { name: 'SEX ON THE BEACH', price: 1850, contains: ['vodka', 'peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: true },
    { name: 'CUBA LIBRE', price: 1850, contains: ['rum', 'cola', 'lime juice'], isAlcoholic: true },
    { name: 'MOJITO', price: 1850, contains: ['rum', 'sugar', 'lime juice', 'soda water'], isAlcoholic: true },
    { name: 'LONG ISLAND ICE TEA', price: 2450, contains: ['vodka', 'rum', 'gin', 'tequila', 'triple sec', 'cola'], isAlcoholic: true },
    { name: 'VIRGIN MOJITO', price: 990, contains: ['sugar', 'lime juice', 'soda water'], isAlcoholic: false },
    { name: 'SAFE SEX ON THE BEACH', price: 990, contains: ['peach schnapps', 'orange juice', 'cranberry juice'], isAlcoholic: false },
];

server.set('view engine', 'ejs');
server.use('/static', express.static('static'));

server.get('/', (req, res) => {
    let found = [];
    const alcoholName = req.query.alcohol;
    if (alcoholName !== undefined) {
        cocktails.forEach(cocktail => {
            if ((cocktail.name.toLowerCase()).indexOf(alcoholName) !== -1) {
                found.push(cocktail)
            }
        });
    }
    if (found.length > 0) {
        res.render('alcoholList', {
            cocktails: found
        });
    } else {
        res.render('alcoholList', {
            cocktails
        });
    }
});

server.listen(PORT);
