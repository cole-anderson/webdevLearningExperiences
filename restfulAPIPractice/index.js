const express = require('express');
const app = express();
const PORT = 8080;

app.use( express.json() );

app.listen(
    PORT,
    ()=> console.log('alive on port 8080')
);


app.get('/book', (req, res)=> {
    res.status(200).send({
        title: 'hello world',
        author: 'cole'
    })
});

app.post('/book/:id', (req, res) => {
    const {id} = req.params;
    const {author} = req.body;
    
    if(!author) {
        res.status(418).send({message: "no author found"})
    }
    res.send({
        book: `Author: ${author}`, 
    })
});
