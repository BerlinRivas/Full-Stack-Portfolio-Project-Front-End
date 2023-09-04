import { Link } from "react-router-dom";

function Matrix({ matrix }) {
  console.log(matrix)
  return (
    <tr>
      <td>
        {matrix.is_favorite ? (
          <span>-</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <h1 className="character-name">{matrix.name}</h1>
        <h1 className="description"><strong>{matrix.description}</strong></h1>

        <img className="pictures" src={matrix.url} alt=""></img> 
      </td>
      <td>
        <Link className="edit-btn" to={`/matrices/${matrix.id}`}>Edit</Link>
      </td>
    </tr>
  );
}

export default Matrix;