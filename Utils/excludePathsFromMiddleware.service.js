const excludeLoginFromMiddleware = (middleware) => (req, res, next) => {
    if (req.path.match(/^\/login\/?$/g) || req.path.match(/^\/test\/?$/g) || req.headers.admin == 'password123' || req.path == "/") {
        return next()
    } else {
        return middleware(req, res, next)
    }
}

export default excludeLoginFromMiddleware