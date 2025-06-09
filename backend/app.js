
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    const htmlPath = path.join(__dirname, 'landing.html');
    res.sendFile(htmlPath)
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);   
});