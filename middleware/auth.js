const express = require('express')
const route = express.Router()

// Middleware that authorizes if the client is logged in.
// it will see if client has Json Web Token.  If not, it will return
// the login screen.

route.get('/', (req, res, next) => {
    let token = req.header('x-auth')
    token = 'his'

    if (!token || token !== 'hi') {
        res.send('login')
    }

    next()
})

module.exports = route