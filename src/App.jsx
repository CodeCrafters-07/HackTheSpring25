import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import VendorDetails from "./components/VendorDetails";
import CustomerDetails from "./components/CustomerDetails";
import SuccessPage from "./components/SuccessPage";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/vendor-details" element={<VendorDetails />} />
        <Route path="/customer-details" element={<CustomerDetails />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
