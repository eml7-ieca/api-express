const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Servicio API V2.0')
})

app.listen(port, () => {
    console.log(`Servicio API se levantó correctamente en el puerto ${port}`)
})
