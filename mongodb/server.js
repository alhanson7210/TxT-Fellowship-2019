const express = require('express'),
      path = require('path'),
      MongoClient = require('mongodb').MongoClient,
      bodyParser = require('body-parser');

const app = new express();
const uri = "mongodb+srv://alhanson:12345@cluster0-fmkpx.mongodb.net/test?retryWrites=true&w=majority";
const port = 3000;

let db;

MongoClient.connect(uri, {useNewUrlParser : true}, (error, client) => {
    if(error) throw error;
    console.log("You have successfully connected your mongo database!");
    db = client.db('blogSystem');
});

app.listen(port, () => {
    console.log("You are listening on port localhost:" + port);
});

app.get('/', (error, response) => {
    response.sendFile(path.join(__dirname, "/home.html"));
});

app.use(bodyParser.json());

app.post('/addBlog', (request, response) => {
    const blog = request.body;
    db.collection('blogs').insertOne({
        title: blog.title,
        author: blog.author,
        content: blog.content
    }, 
    (error, result) => {
        if(error) throw error;
        response.send(result);
    });
});

app.get('/getBlog', (request, response) => {
    
    console.log(request.query.title);
    db.collection('blogs').findOne({
        title: request.query.title,
    },
    (error,result) => {
        if(error) throw error;
        response.send({data : result});
        console.log(result.title);
    });
});

app.post('/addBlogId', (request, response) => {
    const blog = request.body;
    db.collection('blogs').insertOne({
        title: blog.title,
        blogId: blog.blogId,
        author: blog.author,
        content: blog.content
    },
    (error,result) => {
        if(error) throw error;
        response.send(result);
    });
});

app.get('/getBlogById', (request, response) => {
    db.collection('blogs').findOne({
        blogId: request.query.blogId,
    },
    (error,result) => {
        if(error) throw error;
        response.send({data : result});
        console.log(result.blogId, result.title, );
    });
});