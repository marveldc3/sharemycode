// src/components/CodeSnippetForm.tsx

import React, { useState } from 'react'
import { submitCodeSnippet } from '../api/CodeSnippetApi'
import { CodeSnippet } from '../types/CodeSnippet'

interface Props {
  onSubmit: (codeSnippet: CodeSnippet) => void
}

const CodeSnippetForm: React.FC<Props> = ({ onSubmit }) => {
  const [code, setCode] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const codeSnippet = await submitCodeSnippet(code)
    onSubmit(codeSnippet)
    setCode('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="code">Code:</label>
      <textarea
        id="code"
        name="code"
        rows={10}
        cols={50}
        value={code}
        onChange={(event) => setCode(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default CodeSnippetForm