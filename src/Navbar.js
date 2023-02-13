import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="lobo">El Club Del Lobos</h1>
      <div className="links">
        <Link
          style={{ textDecoration: "none", padding: "10px", fontWeight: "900",color:"yellow" }}
          to="/"
        >
          About
        </Link>
        <Link
          style={{ textDecoration: "none", padding: "10px", fontWeight: "900" ,color:"yellow"}}
          to="/Winnings"
        >
          Wins
        </Link>
        <Link
          style={{ textDecoration: "none", padding: "10px", fontWeight: "900" ,color:"yellow"}}
          to="/Players"
        >
          1st Team
        </Link>
        <Link
          style={{ textDecoration: "none", padding: "10px", fontWeight: "900" ,color:"yellow"}}
          to="/Board"
        >
          Board Members
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
