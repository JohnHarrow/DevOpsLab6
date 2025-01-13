import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get('/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.log('Error:', error));

    axios.get('/api/videos')
      .then(response => setVideos(response.data))
      .catch(error => console.log('Error:', error));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <h1>Test</h1>
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