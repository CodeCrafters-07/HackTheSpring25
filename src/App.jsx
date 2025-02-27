import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import VendorDetails from "./components/VendorDetails";
import CustomerDetails from "./components/CustomerDetails";
import SuccessPage from "./components/SuccessPage";
import Home from "./components/Home";
import VendorProfile from "./components/VendorProfile";
import CustomerProfile from "./components/CustomerProfile"; // Import Customer Profile
import FranchiseDetails from "./components/FranchisePop"

const App = () => {
  return (
    // <>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<LogIn />} />
    //     <Route path="/signup" element={<SignUp />} />
    //     <Route path="/vendor-details" element={<VendorDetails />} />
    //     <Route path="/customer-details" element={<CustomerDetails />} />
    //     <Route path="/success" element={<SuccessPage />} />
    //     <Route path="/home" element={<Home />} />
    //     <Route path="/vendor-profile" element={<VendorProfile />} /> {/* Vendor Profile Route */}
    //     <Route path="/customer-profile" element={<CustomerProfile />} /> {/* Customer Profile Route */}
    //   </Routes>
    // </Router>
    // </>

    // <>
    // <Route path="/vendor-profile" element={<VendorProfile />} /> /* Vendor Profile Route */
    // </>


    <>
      <FranchiseDetails>  </FranchiseDetails >
    </>
  

    // <Route path="/customer-profile" element={<CustomerProfile />} /> /* Customer Profile Route */
  );
};

export default App;
