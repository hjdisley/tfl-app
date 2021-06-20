import React from "react"
import { useHistory } from "react-router-dom"

const LineInfo = ({ location }) => {
  const history = useHistory()

  const handleClick = () => {
    history.goBack()
  }
  const { reason, name } = location.state

  if (reason) {
    return (
      <div>
        <h1>{name}</h1>
        <p>{reason}</p>
        <button onClick={handleClick}>Go back</button>
      </div>
    )
  } else {
    return (
      <div>
        <h1>{location.state.name}</h1>
        <p>Good Service</p>
        <button onClick={handleClick}>Go back</button>
      </div>
    )
  }
}

export default LineInfo
