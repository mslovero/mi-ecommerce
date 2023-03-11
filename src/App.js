import './App.css';
import Header from './common/header/Header'
// import { BrowserRouter as Router, Switch } from "react-router-dom";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Pages from './pages/Pages';
//import { BrowserRouter as Router,  } from "react-router-dom"


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={ <Pages />} />
        </Routes> 
      </Router>
    </>
    
 )
}

export default App;
<Routes> 
  <Route path="/home" element={<Pages/>} /> 
  </Routes>