const data = require('./data');
const express = require('express');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use('/static', express.static('static'));

app.get('/', (req, res) => {
    res.render('home', {
        forecasts: data.forecasts,
        icons: data.icons
    })
});

app.get('/cities/:cityId', (req, res) => {
    const cityName = req.params.cityId;
    res.render('city', {
        cityInfo: data.forecasts.filter(city => {return city.city === cityName}),
        icons: data.icons
    })
});

app.listen(PORT);
