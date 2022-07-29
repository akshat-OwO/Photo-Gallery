import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Rivers from './Rivers';
import MountShowcase from './MountShowcase';
import RiverShowcase from './RiverShowcase';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/rivers' element={<Rivers />} />
            <Route exact path='/images/:id' element={<MountShowcase />} />
            <Route exact path='/images/rivers/:id' element={<RiverShowcase />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
