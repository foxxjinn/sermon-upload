const express = require('express')
const route = express.Router()


// Middleware that authorizes if the client is logged in.
// it will see if client has Json Web Token.  If not, it will return
// the login screen.

route.get('/', (req, res, next) => {
    let token = req.header('X-Auth')

    if (!token || token !== '') {
        res.sendFile('./public/html/login')
    }

    next()
})

module.exports = route

// set a header
// res.header('X-Auth', ${token})