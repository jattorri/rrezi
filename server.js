const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./AngularWorkspace/rrezi'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'AngularWorkspace/rrezi'}),
);


app.listen(process.env.PORT || 8080);