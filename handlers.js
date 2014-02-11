exports.index = function(req, res) {
    res.send("Welcome to CS 1501");

}

var watchf = function(req, res) {
	var video_id = req.query.v;
	res.render('watch', { id: video_id }, function(err, html) {
		res.send(html);
	})
}

var helloworld = function(req, res) {
    var hello = "hello";
    res.send(hello);
}


exports.watch = watchf;
exports.hello = helloworld;
