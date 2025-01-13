import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get('http://3.82.223.111:3002/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.log('Error:', error));

    axios.get('http://3.82.223.111:3002/api/videos')
      .then(response => setVideos(response.data))
      .catch(error => console.log('Error:', error));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <h1>Test</h1>
      <img src="https://bucket-for-assignment-2.s3.us-east-1.amazonaws.com/78c77e9ffd17bfd8dad1d4eb79a981a0.jpg" alt="S3 Hosted Image"></img>
      <h1>Test</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} ({user.email}), Age: {user.age}</li>
        ))}
      </ul>
      <h1>Videos</h1>
      <ul>
        {videos.map(video => (
          <li key={video.id}>{video.title}, Genre: {video.genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;