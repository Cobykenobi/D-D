import React from 'react';

const api = axios.create({
  baseURL: 'https://dnd-backend-ftfq.onrender.com/api', // постав URL твого бекенд-сервісу Render
});


function App() {
  return (
    <div>
      <h1>D&D Admin Panel</h1>
      <p>Тут буде інтерфейс.</p>
    </div>
  );
}

export default App;
