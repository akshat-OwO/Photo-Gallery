import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Rivers from './Rivers';
import ImageShowcase from './ImageShowcase';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/rivers' element={<Rivers />} />
            <Route exact path='/image:id' element={<ImageShowcase />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
