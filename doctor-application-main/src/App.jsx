import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Doctors from "./components/Doctors";
import NavBar from "./components/NavBar";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
          
            <About />
            <Doctors />
            <Contact />
          </>
        } />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
