import React, { useState } from "react"

function Button(props) {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Button has been clicked: {count}</p>
      <button onClick={() => setCount(count + 1)}> Click Me</button>
    </div>
  )
}

export default Button
