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
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} ({user.email}), Age: {user.age}</li>
        ))}
      </ul>

      <h1>Videos</h1>
      <ul>
        {videos.map((video) => (
          <li key={video.id}>
            <h2>{video.title}</h2>
            <p>Genre: {video.genre}</p>
            {/* Display the video */}
            <video width="600" controls>
              <source src={video.s3Url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;