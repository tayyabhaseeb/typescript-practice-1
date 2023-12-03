import React, { useState } from 'react'

export default function State() {

    const [count , setCount] = useState<number>(0)


    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        setCount(prev => prev + 1)
    }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="number" value={count} onChange={e => setCount(Number(e.target.value))}/>
      <button type="submit">Update Counter</button>
    </form>
  </div>
  )
}
