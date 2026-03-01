import { Link } from "react-router-dom";
import './Navbar.css';
function Navbar({ isLoggedIn, setIsLoggedIn }) {
  return (
    <nav style={{ padding: "15px", background: "#0b5ed7" }}>
      <Link to="/" style={link}>Home</Link>
      <Link to="/About" style={link}>About</Link>
      <Link to="/Products" style={link}>Products</Link>
      <Link to="/Cart" style={link}>Cart</Link>
      <Link to="/contact" style={link}>Contact Us</Link>
      

      {!isLoggedIn ? (
        <>
          <Link to="/login" style={link}>Login</Link>
          <Link to="/register" style={link}>Register</Link>
        </>
      ) : (
        <>
          <Link to="/Home" style={link}>Profile</Link>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </>
      )}
    </nav>
  );
}

const link = {
  color: "white",
  marginRight: "15px",
  textDecoration: "none",
  fontWeight: "bold"
};

export default Navbar;