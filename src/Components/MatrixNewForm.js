import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function MatrixNewForm() {
    let navigate = useNavigate();
  
    const addMatrix = (newMatrix) => {
      console.log(newMatrix)
      console.log(`${API}/matrices`)
      axios
        .post(`${API}/matrices`, newMatrix)
        .then(
          () => {
            navigate(`/matrices`);
          },
          (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c));
    };
  
    const [matrix, setMatrix] = useState({
      name: "",
      description: "",
      url: "",
      is_favorite: false,
    });
  
    const handleTextChange = (event) => {
      setMatrix({ ...matrix, [event.target.id]: event.target.value });
    };
  
    const handleCheckboxChange = () => {
      setMatrix({ ...matrix, is_favorite: !matrix.is_favorite });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      addMatrix(matrix);
    };

    return (
        <div className="New">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              value={matrix.name}
              type="text"
              onChange={handleTextChange}
              placeholder="CHoose your character"
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
        </div>
      );

}

export default MatrixNewForm;