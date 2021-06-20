import React from "react"
import { useHistory } from "react-router-dom"
import moment from "moment"

const LineInfo = ({ location }) => {
  const history = useHistory()

  const handleClick = () => {
    history.goBack()
  }
  const { reason, name } = location.state

  if (reason) {
    return (
      <div>
        <p className="updated">
          Last Updated: {moment().format("MMMM Do YYYY, h:mm:ss a")}
        </p>
        <h1 className="lineTitle">{name} Line</h1>
        <p className="lineInfo">{reason}</p>
        <button
          data-testid="backButton"
          className="moreInfo"
          onClick={handleClick}
        >
          Go back
        </button>
      </div>
    )
  } else {
    return (
      <div>
        <p className="updated">
          Last Updated: {moment().format("MMMM Do YYYY, h:mm:ss a")}
        </p>
        <h1 className="lineTitle">{name} Line</h1>
        <p className="lineInfo">Good Service</p>
        <button
          className="moreInfo"
          data-testid="backButton"
          onClick={handleClick}
        >
          Go back
        </button>
      </div>
    )
  }
}

export default LineInfo
