import React, { useEffect, useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = process.env.VITE_API_URL;

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('/')
      .then(res => {
        setArticles(res.data.articles)
        console.log(res.data.articles);
        console.log(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Tin Nóng Hôm Nay 🔥</h1>
    </div>
  );
}

export default App;

