import express from 'express';
import bodyParser from 'body-parser';

// initialize constants
const app = express();
const port = 3000;
const posts = [];

// parse incoming requests and serve static files
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// routing for homepage (get)
app.get("/", (req, res) => {
    // render index.ejs with posts array
    res.render('index', {posts: posts});

});

// form submission (post)
app.post("/", (req, res) => {
    // create a new post object
    const post = {
        author: req.body.author,
        title: req.body.title,
        content: req.body.content,
        timestamp: new Date().toTimeString()
    };

    // add the post to the posts array
    posts.push(post);

    // redirect to homepage
    res.redirect('/');

});

// post deletion (post)
app.post("/delete", (req, res) => {
    // get the title of the post to delete
    const title = req.body.title;

    // find the index of the post in the array
    const index = posts.findIndex(post => post.title === title);

    // if the post is found, negative one is returned
    if (index !== -1) {
        // remove the post from the array
        posts.splice(index, 1);
    }

    // redirect to homepage
    res.redirect('/');

});

// start the server (listen)
app.listen(port, () => {
    // log message to the console to confirm server start
    console.log('Server running on port ${port}.');

});