import React from 'react'

const Count = ({count, increase, decrease}) => {
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increase}>Increment</button>
        <button onClick={decrease}>Decrement</button>
    </div>
  )
}

export default Count