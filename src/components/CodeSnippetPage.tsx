// src/components/CodeSnippetPage.tsx

import React, { useEffect, useState } from 'react'
import { getCodeSnippet } from '../api/CodeSnippetApi'
import { CodeSnippet } from '../types/CodeSnippet'
import { renderSync } from '@svgdotjs/svg.js'

interface Props {
  match: {
    params: {
      id: string
    }
  }
}

const CodeSnippetPage: React.FC<Props> = ({ match }) => {
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

  const svg = renderSync(`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="30"></svg>`)
  const text = svg.text(codeSnippet.code)
  text.font({ size: 20 })
  text.move(10, 20)
  const imageData = svg.svg()

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
        <div dangerouslySetInnerHTML={{ __html: imageData }} />
      </div>
    </div>
  )
}

export default CodeSnippetPage