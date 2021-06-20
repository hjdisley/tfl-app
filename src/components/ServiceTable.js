import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import moment from "moment"
import axios from "axios"

const ServiceTable = () => {
  const [status, setStatus] = useState([])

  const fetchData = async () => {
    await axios("https://api.tfl.gov.uk/line/mode/tube/status")
      .then((res) => setStatus(res.data))
      .catch((err) => {
        console.error(err)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <div className="lastUpdated">
        <p>Last Updated: {moment().format("MMMM Do YYYY, h:mm:ss a")}</p>
      </div>
      <table>
        <thead>
          <th>Line</th>
          <th>Status</th>
          <th></th>
        </thead>
        <tbody>
          {status.map((line) => {
            return (
              <tr>
                <td>{line.name}</td>
                <td>{line.lineStatuses[0].statusSeverityDescription}</td>
                <td>
                  <Link to={`/travel/${line.name}`}>
                    <button>View More</button>
                  </Link>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ServiceTable

{
  /* <td>Bakerloo</td>
<td>Good Service</td>
<td>
  <Link to="/travel/bakerloo">
    <button>View More</button>
  </Link>
</td> */
}
