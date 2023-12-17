const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const cookie = req.headers.cookie ?? null;
    if (!cookie) return res.sendStatus(401)
    const token = cookie.split('jwt=')[1]

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, username) => {
        if (err) return res.sendStatus(403)
        req.username = username
        next()
    })
}

module.exports = authenticateToken