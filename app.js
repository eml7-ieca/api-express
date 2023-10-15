const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('API Check-in Tlamabyte V2.0')
})

app.get('/data', (req, res) => {
    res.json({"nombre": "Eduardo"})
})

app.listen(port, () => {
    console.log(`Servicio API se levantó correctamente en el puerto ${port}`)
})
