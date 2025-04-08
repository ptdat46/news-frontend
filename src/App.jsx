import React, { useEffect, useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = process.env.VITE_API_URL;

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=0bdbc07dee6f44179109de04121e1d63', {
      baseURL: '',
    })
      .then(res => setArticles(res.data.articles))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Tin Nóng Hôm Nay 🔥</h1>
      <ul>
        {articles.map((a) => (
          <li key={a.url}>{a.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

