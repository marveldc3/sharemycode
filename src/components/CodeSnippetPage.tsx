// src/components/CodeSnippetPage.tsx

import React, { useEffect, useState } from 'react'
import { getCodeSnippet } from '../api/CodeSnippetApi'
import { CodeSnippet } from '../types/CodeSnippet'

interface Props {
  match: {
    params: {
      id: string
    }
  }
}

export function CodeSnippetPage({ match }: Props) {
  const [codeSnippet, setCodeSnippet] = useState<CodeSnippet | null>(null)

  useEffect(() => {
    const fetchCodeSnippet = async () => {
      const codeSnippet = await getCodeSnippet(match.params.id)
      setCodeSnippet(codeSnippet)
    }

    fetchCodeSnippet()
  }, [match.params.id])

  if (!codeSnippet) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Code Snippet</h1>
      <div>
        <h2>Text</h2>
        <pre>
          <code>{codeSnippet.code}</code>
        </pre>
      </div>
      <div>
        <h2>Vector Image</h2>
        {/* Render the vector image here */}
      </div>
    </div>
  )
}