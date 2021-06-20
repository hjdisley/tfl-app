import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServiceTable = () => {
  const [status, getStatus] = useState([]);

  return (
    <div>
      <div className="lastUpdated">
        <p>Last Updated: 27/09/1995</p>
      </div>
      <table>
        <tr>
          <th>Line</th>
          <th>Status</th>
          <th></th>
        </tr>
        <tr>
          <td>Bakerloo</td>
          <td>Good Service</td>
          <td>
            <Link to="/travel/bakerloo">
              <button>View More</button>
            </Link>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default ServiceTable;
