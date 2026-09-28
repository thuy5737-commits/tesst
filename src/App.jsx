import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: 32 }}>
      <h1>Hello React</h1>
      <button onClick={() => setCount((c) => c + 1)}>count: {count}</button>
    </main>
  )
}
