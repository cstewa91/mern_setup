const express = require('express');
const PORT = process.env.PORT || 9000;

const app = express();

app.get('/test', (req, res) => {
   res.send('<h1>This is a test route, and it is working</h1>')
})

app.listen(PORT, () => {
   console.log('server running on PORT: ' + PORT);
})