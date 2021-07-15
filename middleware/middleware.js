
exports.getId = (req, res, next) => {
    console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`)    
    var id = '1';
    req.id = id;
    req.headers['x-auth'] = id
    next();
}