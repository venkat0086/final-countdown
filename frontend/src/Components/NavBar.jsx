import { Link } from "react-router-dom";
import "../Styles/styles.css";
export const NavBar = () => {
  return (
    <div className="nav-bar-main">
      <div>
        <Link to="/">Home </Link>
      </div>
      <div>
        <Link to="/login">Login </Link>
      </div>
      <div>
        <Link to="/teachers">Add Teachers</Link>
      </div>
    </div>
  );
};
