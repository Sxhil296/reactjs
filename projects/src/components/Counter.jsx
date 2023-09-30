import { useState } from 'react'


const Counter = () => {
    const [count, setCount] = useState(0)

    const increaseValue = () => {
        // setCount(count + 1)
     setCount(prevCount => prevCount + 1)
    //  setCount(prevCount => prevCount + 1)
    //  setCount(prevCount => prevCount + 1)
     
    
    }
    const decreaseValue = () => {
     if (count != 0) {
        setCount(prevCount => prevCount - 1)
     }
    }
  return (
    <div>
        <h1>Count : {count}</h1>
      <button onClick={increaseValue}>Increase count</button>
      <br /><br />
      <button onClick={decreaseValue}>Decrease count</button>
    </div>
  )
}

export default Counter