import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function MatrixDetails() {
    const [matrix, setMatrix] = useState([]);
    let { id } = useParams();
    let navigate = useNavigate()
  
    const handleDelete = () => {
      deleteMatrix();
    };
  
    const deleteMatrix = () => {
      axios
        .delete(`${API}/matrices/${id}`)
        .then(
          () => {
            navigate(`/matrices`);
          },
          (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c));
    };
  
    useEffect(() => {
      axios
        .get(`${API}/matrices/${id}`)
        .then((response) => {
          console.log(response.data);
          setMatrix(response.data);
        })
        .catch((c) => {
          console.warn("catch", c);
        });
    }, [id, API]);


    return (
        <article>
        <h3>{matrix.name}</h3>
        <h5>
          <span>
            <img className="neo" src={matrix.url} alt=""></img>
          </span>
         
        </h5>
        {/* <h6>{matrix.genre}</h6> */}
        <p className="neo-description">{matrix.description}</p>
        <div className="showNavigation">
          <div>
            <Link to={`/matrices`}>
              <button className="back-btn">Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/matrices/${id}/edit`}>
              <button className="edited-btn">Edit</button>
            </Link>
          </div>
          <div>
            <button className="delete-btn" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </article>
      );
}
export default MatrixDetails;