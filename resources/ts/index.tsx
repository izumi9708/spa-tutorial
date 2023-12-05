import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// index.blade.phpのid="app"を読み込む
const container = document.getElementById('app');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(
  <>
    <App/>
  </>
);