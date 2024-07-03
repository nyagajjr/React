import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TodoList from './App.jsx'
import Profiler from './learnProps.jsx'
import Carder from './Card.jsx'






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <TodoList />
    <Profiler />
    <Carder />

  </React.StrictMode>,
)
