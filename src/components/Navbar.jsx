import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}

export default Navbar;