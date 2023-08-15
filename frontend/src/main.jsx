import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { apiSlice } from './features/apiSlice'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApiProvider api={apiSlice}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApiProvider>
)
