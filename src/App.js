import Navbar from "./Navbar";
import Winnings from "./Winnings";
import Players from "./Players";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import About from "./About";

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
          </Routes>
        </div>
        <div className="thefooter"><p>Copyright © EL CLUB DEL LOBOS</p></div>
      </div>
    </Router>
    </div>
  );
}

export default App;
