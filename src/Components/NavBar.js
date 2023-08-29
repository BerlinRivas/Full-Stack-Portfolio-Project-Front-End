import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
            <Link to="/">
              <img className="logo" src="https://clipart-library.com/image_gallery2/Anonymous-Mask-Free-Download-PNG.png" alt=""></img>
           </Link>
            <button className="button">
               <Link  to="/matrices/new">New Character</Link>
            </button>
            <button className="second-btn"> 
               <Link to="/matrices">Characters</Link>
           </button>
            
            
     
       
    </nav>
  );
}