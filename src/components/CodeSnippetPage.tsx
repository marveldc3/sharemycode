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

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '100');
  svg.setAttribute('height', '30');

  const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
  text.setAttribute('x', '10');
  text.setAttribute('y', '20');
  text.setAttribute('font-size', '20');
  text.textContent = codeSnippet.code;

  svg.appendChild(text);

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
        <div dangerouslySetInnerHTML={{ __html: svg.outerHTML }} />
      </div>
    </div>
  )
}

export default CodeSnippetPage
