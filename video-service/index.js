const express = require('express');
const app = express();
const port = 3001;  

const videos = [
  { id: 1, title: 'The Jester', genre: 'Very Boring', s3Url: 'https://bucket-for-assignment-2.s3.us-east-1.amazonaws.com/32962_1411112556_s01_The_Jester_Narren_Grappen.mp4' },
  { id: 2, title: 'Bobs Electric Theatre', genre: 'Slightly More Boring', s3Url: 'https://bucket-for-assignment-2.s3.us-east-1.amazonaws.com/Bobs+Electric+Theater+-1906.mp4' }
];  
 
app.get('/videos', (req, res) => {
  res.json(videos);
});  

app.listen(port, () => {
  console.log(`Video Service running on port ${port}`);
});