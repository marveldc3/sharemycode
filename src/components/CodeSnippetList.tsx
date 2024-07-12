// src/components/CodeSnippetList.tsx

import React from 'react'
import { CodeSnippet } from '../types/CodeSnippet'

interface Props {
  codeSnippets: CodeSnippet[]
}

export function CodeSnippetList({ codeSnippets }: Props) {
  return (
    <ul>
      {codeSnippets.map((codeSnippet) => (
        <li key={codeSnippet.id}>
          <a href={`/code-snippets/${codeSnippet.id}`}>{codeSnippet.id}</a>
        </li>
      ))}
    </ul>
  )
}