import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const ServiceTable = () => {
  const [status, setStatus] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    await axios("https://api.tfl.gov.uk/line/mode/tube/status")
      .then((res) => setStatus(res.data))
      .catch((err) => {
        console.error(err)
      })
  }

  useEffect(() => {
    fetchData()
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }
  return (
    <div>
      <table className="services">
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
                  <Link
                    to={{
                      pathname: `/${line.name}`,
                      state: {
                        name: line.name,
                        reason: line.lineStatuses[0].reason,
                      },
                    }}
                  >
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
