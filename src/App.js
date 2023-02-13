import Navbar from "./Navbar";
import Winnings from "./Winnings";
import Players from "./Players";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import About from "./About";
import Board from "./Board";

const App = ()=> {
  return (<div className="container">
    <Router>
      <div >
        <Navbar/>
        <div className="content">
          <Routes>
          <Route exact path="/" element={<About/>} />
          <Route exact path="/Players" element={<Players/>} />
          <Route exact path="/Winnings" element={<Winnings/>} /> 
          <Route exact path="/Board" element={<Board/>} /> 
          </Routes>
        </div>
        <div className="thefooter"><p>Copyright © EL CLUB DEL LOBOS</p></div>
      </div>
    </Router>
    </div>
  );
}

export default App;
