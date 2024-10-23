import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex w-full justify-center bg-blue-500'>
      <h1 className='text-red-500 text-5xl'>IsaaClicker</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App