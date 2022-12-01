import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import { IconName } from "react-icons/bs";
import { Routes, Route } from "react-router-dom"
import Download from './Download';
import Locate from './Locate';
import Rewards from './Rewards';
import Exclusive from './Exclusive';
import About from './About';



import Section from './Section';


function App() {


  return (
    <>

      <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/download" element={<Download />} />
        <Route path="/locate" element={<Locate />} />
        <Route path="/Rewards" element={<Rewards />} />
        <Route path="/Exclusive" element={<Exclusive />} />
        <Route path="/Exclusive" element={<Exclusive />} />
        <Route path="/About" element={<About />} />

      </Routes>





    </>
  );
}

export default App;
