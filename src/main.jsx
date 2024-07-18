import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TodoList from './App.jsx'
import Profiler from './learnProps.jsx'
import Avatar from './Properties.jsx'
import Tiere from './Rendering.jsx'
import MonthList from './leKeys.jsx'
import Button from './Butn.jsx'
import FProp from './fxnProps.jsx'






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <TodoList />
    <Profiler /> */}
    <Avatar />
    <Tiere />
    <MonthList />
    <Button />
    <FProp />

  

  </React.StrictMode>,
)
