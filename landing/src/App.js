import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <>
      <Router>       
            {/* <Navbar /> */}
            <Hero />
      </Router>

      </>
  );
}

export default App;
