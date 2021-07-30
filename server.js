const express = require('express')
const app = express()
const path = require('path')

const PORT = process.env.PORT || 5000

app.use(express.json({extended: false}))
app.use(require('./middleware/auth'))

app.get('/', (req, res) => {
    res.send('index')
})

app.listen(PORT, ()=> {
    console.log(`Listening at port ${PORT}`)
})

