import axios from "axios";
import { useState, useEffect } from "react";
import Matrix from "./Matrix";

const API = process.env.REACT_APP_API_URL;

function Matrices() {
  const [matrices, setMatrices] = useState([]);
  useEffect(() => {
    console.log(`${API}/matrices`)
    axios
      .get(`${API}/matrices`)
      .then((response) => setMatrices(response.data))
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
    <div className="Matrices">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              {/* <th>Take me there</th>
              <th>See this character</th> */}
            </tr>
          </thead>
          <tbody>
            {matrices.map((matrix) => {
              return <Matrix key={matrix.id} matrix={matrix} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Matrices;