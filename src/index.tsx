// src/index.tsx 

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App'
import CodeSnippetPage from './components/CodeSnippetPage'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/code-snippets/:id" element={<CodeSnippetPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)