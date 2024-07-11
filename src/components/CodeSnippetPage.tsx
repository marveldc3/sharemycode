// src/components/CodeSnippetPage.tsx
import React, { useEffect, useState } from 'react'
import { getCodeSnippet } from '../api/CodeSnippetApi'
import { CodeSnippet } from '../types/CodeSnippet'
import svgson from 'svgson'

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

  const svg = svgson({
    tag: 'svg',
    attrs: {
      xmlns: 'http://www.w3.org/2000/svg',
      width: 100,
      height: 30,
    },
    children: [
      {
        tag: 'text',
        attrs: {
          x: 10,
          y: 20,
          fontSize: 20,
        },
        children: [codeSnippet.code],
      },
    ],
  })

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
        <div dangerouslySetInnerHTML={{ __html: svg }} />
      </div>
    </div>
  )
}

export default CodeSnippetPage
