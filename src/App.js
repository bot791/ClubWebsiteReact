import Navbar from "./Navbar";
import Winnings from "./Winnings";
import Players from "./Players";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import About from "./About";
import Board from "./Board";
import Playerstwo from "./Playerstwo";
import Footer from "./Footer";
const App = ()=> {
  return (<div className="container">
    <Router>
      <div >
        <Navbar/>
        <div className="content">
          <Routes>
          <Route exact path="/" element={<About/>} />
          <Route exact path="/Players" element={<Players/>} />
          <Route exact path="/Playerstwo" element={<Playerstwo/>} />
          <Route exact path="/Winnings" element={<Winnings/>} /> 
          <Route exact path="/Board" element={<Board/>} /> 
          </Routes>
          
        </div>
       <Footer/>
      </div>
      
     
    </Router>
    
    </div>
  );
}

export default App;
