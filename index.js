import express from 'express';
import bodyParser from 'body-parser';

// create contants for express and port
const app = express();
const port = 3000;

// parse incoming requests and serve static files
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

// routing for homepage
app.get("/", (req, res) => {
    res.send("Hello, world!");
});

// start the server
app.listen(port, () => {
    console.log('Server running on port ${port}.');
});