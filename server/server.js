const express = require('express')
const app = express()
const routes = require('./routes')

//app.use(express.static('www'));

app.get('/', (req, res) => {
    res.send('kek');
})

app.get('/api/all-books', (req, res) => {
    routes.getAll(req, res)
})

app.get('/api/book/:id', (req, res) => {
    routes.findById(req, res)
})

app.listen(3001, () =>{
    console.log("Express Started on Port 3001");
})