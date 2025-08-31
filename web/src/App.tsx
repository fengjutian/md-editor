import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Markdown from 'react-markdown'

function App() {
  const [count, setCount] = useState(0)

  const markdown = '# Hi, *Pluto*!'

  return (
    <>
      <Markdown>{markdown}</Markdown>
    </>
  )
}

export default App
