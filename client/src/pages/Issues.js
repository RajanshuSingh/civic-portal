// client/src/pages/Issues.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Issues() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    axios.get('/api/issues')
      .then(response => setIssues(response.data))
      .catch(error => console.error("There was an error fetching the issues!", error));
  }, []);

  return (
    <div>
      <h2>Local Issues</h2>
      <ul>
        {issues.map(issue => (
          <li key={issue._id}>
            <h3>{issue.title}</h3>
            <p>{issue.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Issues;
