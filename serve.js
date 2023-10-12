const express = require('express')
const app = express()
const port = 5000

const routerApp = require('./caminho')

app.use(express.static('public'))

app.use('/', routerApp)

app.listen(port, () => {
    console.log('Aplicacao esta rodando!')
})