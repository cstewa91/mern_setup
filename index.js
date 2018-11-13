const express = require('express');
const cors = require('cors');
const { resolve } = require('path');
const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(resolve(__dirname, 'client', 'dist')));

app.get('/api/test', (req, res) => {
   res.send({
      success: true,
      message: 'API test working',
      something: 'Just some random test'
   });
});

app.get('/api/user', (req, res) => {
   res.send({
      success: true,
      username: 'Cstew',
      email: 'Cstewa@stew.com',
      name: 'Collin Stewart'
   });
});

app.post('/api/sign-in', (req, res) => {
   console.log(req.body)
   res.send({
      success: true,
      postData: req.body,
      moreData: "Here is more data"
   });
});

app.get('*', (req, res) => {
   res.sendFile(resolve(__dirname, 'client', 'dist', 'index.html'))
})

app.listen(PORT, () => {
   console.log('server running on PORT: ' + PORT);
});