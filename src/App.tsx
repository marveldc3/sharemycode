// src/App.tsx

import React, { useState } from 'react'
import './App.css'
import { CodeSnippetForm } from './components/CodeSnippetForm'
import { CodeSnippetList } from './components/CodeSnippetList'
import { CodeSnippet } from './types/CodeSnippet'

const App = () => {
  const [codeSnippets, setCodeSnippets] = useState<CodeSnippet[]>([])

  const handleSubmit = (codeSnippet: CodeSnippet) => {
    setCodeSnippets([...codeSnippets, codeSnippet])
  }

  return (
    <div className="App">
      <h1>Share My Code</h1>
      <CodeSnippetForm onSubmit={handleSubmit} />
      <h2>Code Snippets</h2>
      <CodeSnippetList codeSnippets={codeSnippets} />
    </div>
  )
}

// Ensure that you have a default export in your App.tsx file
export default App