import React from "react"
import ServiceTable from "./ServiceTable"
import moment from "moment"

const Home = () => {
  return (
    <div>
      <div className="lastUpdated">
        <p className="updated">
          Last Updated: {moment().format("MMMM Do YYYY, h:mm:ss a")}
        </p>
      </div>
      <ServiceTable />
    </div>
  )
}

export default Home
