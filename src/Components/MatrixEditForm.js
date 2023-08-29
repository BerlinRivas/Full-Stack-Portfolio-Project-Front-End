import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;


function MatrixEditForm() {
    let { id } = useParams();
    let navigate = useNavigate();
  
    const [matrix, setMatrix] = useState({
      name: "",
      description: "",
      url: "",
      is_favorite: false,
    });

    useEffect(() => {
      axios.get(`${API}/matrices/${id}`).then(
        (response) => {console.log(response.data)
          setMatrix(response.data)},
        
        (error) => navigate(`/not-found`)
      );
    }, [id, navigate]);
  
    const updateMatrix = (updatedMatrix) => {
      axios
        .put(`${API}/matrices/${id}`, updatedMatrix)
        .then(
          () => {
            navigate(`/matrices/${id}`);
          },
          (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c));
    };
  
    const handleTextChange = (event) => {
      setMatrix({ ...matrix, [event.target.id]: event.target.value });
    };
  
    const handleCheckboxChange = () => {
      setMatrix({ ...matrix, is_favorite: !matrix.is_favorite });
    };
  

  
    const handleSubmit = (event) => {
      event.preventDefault();
      updateMatrix(matrix, id);
    };
    return (
        <div className="Edit">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              value={matrix.name}
              type="text"
              onChange={handleTextChange}
              placeholder="choose your character"
              required
            />
            <label htmlFor="description">Description:</label>
            <input
              id="description"
              type="text"
              required
              value={matrix.description}
              placeholder="Write a description"
              onChange={handleTextChange}
            />
            <label htmlFor="url">URL:</label>
            <input
              id="url"
              type="text"
              name="url"
              value={matrix.url}
              placeholder="https://"
              onChange={handleTextChange}
            />
            <label htmlFor="is_favorite">Favorite:</label>
            <input
              id="is_favorite"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={matrix.is_favorite}
            />
    
            <br />
    
            <input type="submit" />
          </form>
          <Link to={`/matrices/${id}`}>
            <button>Back</button>
          </Link>
        </div>
      );
}

export default MatrixEditForm;