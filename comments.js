// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/comment', (req, res) => {
    res.sendFile(path.join(__dirname, 'comment.html'));
});

app.post('/comment', (req, res) => {
    const comment = req.body.comment;
    fs.writeFile('comment.txt', comment, (err) => {
        if (err) {
            res.status(500).send('Internal Server Error');
        }
        res.send('Comment is saved');
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});