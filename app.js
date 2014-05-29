var express = require('express')
    , http = require('http')
    , bodyParser = require('body-parser')
    , DataStore = require('nedb')
    , app = express()
    , http_port = 3000
    , booksDb = new DataStore({ filename: 'booksDb.nedb' });

app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get("/books", function (req, res) {
    booksDb.find({}, function (err, docs) {
        res.send(docs);
    });
});

app.get("/books/:id", function (req, res) {
    booksDb.findOne({ _id: req.params.id }, function (err, doc) {
        res.send(doc)
    });
});

app.post("/books", function (req, res) {
    var book = req.body;

    booksDb.insert(book, function (err, newDoc) {
        res.statusCode = 301;
        res.header("location", "/books/" + newDoc._id).end();
    });
});

booksDb.loadDatabase(function (err) {
    app.listen(http_port);
    console.log("Listening on " + http_port);
});