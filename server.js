const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json({extended: false}))

app.get('/', (req, res) => {
    res.send('hi')
})

app.listen(PORT, ()=> {
    console.log(`Listening at port ${PORT}`)
})

