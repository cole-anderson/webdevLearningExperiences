// https://www.youtube.com/watch?v=1NrHkjlWVhM
const express = require('express');
const articleRouter = require('./routes/articles');
const app = express();


app.set('view engine', 'ejs');

app.use('/articles',articleRouter);

app.get('/', (req, res)=>{
    const articles = [{
        title: 'test title',
        dataCreated: Date.now(),
        description: 'test desc'
    }]
    res.render('index', {articles: articles })
});
app.listen(5000);
