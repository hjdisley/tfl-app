import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import moment from "moment"

const ServiceTable = () => {
  const [status, setStatus] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    await axios("https://api.tfl.gov.uk/line/mode/tube/status")
      .then((res) => {
        setStatus(res.data)
      })
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
        <p className="loading">Loading...</p>
      </div>
    )
  }
  return (
    <div>
      <p data-testid="lastUpdated" className="updated">
        Last Updated: {moment().format("MMMM Do YYYY, h:mm:ss a")}
      </p>
      <table className="services" data-testid="services">
        <thead>
          <tr>
            <th>Line</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {status.map((line, index) => {
            return (
              <tr key={index}>
                <td>{line.name}</td>
                <td
                  className={line.lineStatuses[0].statusSeverityDescription.trim()}
                >
                  {line.lineStatuses[0].statusSeverityDescription}
                </td>
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
                    <button className="moreInfo" data-testid="moreButton">
                      View More
                    </button>
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
