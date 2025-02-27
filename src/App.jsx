import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Franchise from './sections/Franchise';
import Home from './sections/Home';
import Header from './sections/Header';
import Business from './sections/Franchise';
import StartUp from './sections/Startup';
import AboutUs from './sections/Franchise';
import StartupDetails from "./sections/StartupDetails"; // Details page

import FranchiseDetails from "./sections/FranchiseDetails"; 

export default function App() {
  return (
    <>
    <Router>
    <Header /> {/* Ensures Header remains on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<Franchise />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/startup" element={<StartUp />} />
        <Route path="/aboutus" element={<Franchise />} />
        <Route path="/franchise/:id" element={<FranchiseDetails />} /> {/* Dynamic route */}
        <Route path="/startup/:id" element={<StartupDetails />} />

      </Routes>
    </Router>

    </>
  )
}