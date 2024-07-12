// src/api/CodeSnippetApi.ts

import axios from 'axios'
import { CodeSnippet } from '../types/CodeSnippet'

const BASE_URL = '/api/code-snippets'

export async function submitCodeSnippet(code: string): Promise<CodeSnippet> {
  const response = await axios.post(BASE_URL, { code })
  return response.data
}

export async function getCodeSnippet(id: string): Promise<CodeSnippet | null> {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
    return null
  }
}