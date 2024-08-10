import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import imgSrc from '/assets/od0002.jpg';
// import imgSrc from '/assets/countdown.jpg';

document
  .querySelector('meta[property="og:image"]')
  ?.setAttribute('content', imgSrc);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
