import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>El Club Del Lobos</h1>
      <div>
        <Link style={{textDecoration: "none",padding:"10px",fontWeight:"900"}}to="/">About</Link>
        <Link style={{textDecoration: "none",padding:"10px",fontWeight:"900"}}to="/Winnings">Winnings</Link>
        <Link style={{textDecoration: "none",padding:"10px",fontWeight:"900"}}to="/Players">1st Team</Link>
      </div>
    </nav>
  );
};
export default Navbar;
