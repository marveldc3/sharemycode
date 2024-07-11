// src/index.tsx

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import CodeSnippetPage from './components/CodeSnippetPage'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/code-snippets/:id" component={CodeSnippetPage} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)