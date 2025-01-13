const express = require('express');
const app = express();
const port = 3001;  

const videos = [
  { id: 1, title: 'Introduction to Docker', genre: 'Boring' },
  { id: 2, title: 'Microservices with Node.js', genre: 'Slightly More Boring' }
];  
 
//
const cors = require('cors');
app.use(cors()); // This enables CORS
//

app.get('/videos', (req, res) => {
  res.json(videos);
});  

app.listen(port, () => {
  console.log(`Video Service running on port ${port}`);
});