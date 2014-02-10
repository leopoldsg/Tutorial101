module.exports = funciton(app) {
    var handlers = require('./handlers');
    app.get('/', handlers.index);
    app.get('/watch', handlers.watch)
}
