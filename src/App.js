import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import {Route, Routes} from 'react-router-dom';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <div className="app">
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='projects' element={<Projects />} />
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
