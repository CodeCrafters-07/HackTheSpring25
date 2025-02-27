import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Franchise from './sections/Franchise';
import Home from './sections/Home';
import Header from './sections/Header';
import Business from './sections/Franchise';
import StartUp from './sections/Franchise';
import AboutUs from './sections/Franchise';

export default function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<Franchise />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/startup" element={<Franchise />} />
        <Route path="/aboutus" element={<Franchise />} />
      </Routes>
    </Router>

    </>
  )
}