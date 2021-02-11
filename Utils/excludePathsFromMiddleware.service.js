const excludeLoginFromMiddleware = (middleware) => (req, res, next) => {
    console.log(middleware)
    if (req.path.match(/^\/login\/?$/g) || req.path.match(/^\/test\/?$/g) || req.path == "/") {
        return next()
    } else {
        return middleware(req, res, next)
    }
}

export default excludeLoginFromMiddleware