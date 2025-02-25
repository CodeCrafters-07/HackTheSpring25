import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Components/style.css';

const VendorDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const [details, setDetails] = useState({
        firstName: '', surname: '', phone: '', email: '', 
        companyName: '', companyPhone: '', gstNumber: ''
    });

    const handleChange = (e) => {  
        setDetails({ ...details, [e.target.name]: e.target.value });  
    };  

    const handleRegister = () => {  
        console.log("Registered Data:", { ...location.state, ...details });  
        navigate('/success');  
    };  

    return (  
        <div className="main_container">  
            <div className="form_section">  
                <div className="form_content">  
                    <h3>Vendor Details</h3>  
                    <label>First Name</label>  
                    <input type="text" name="firstName" value={details.firstName} onChange={handleChange} required />  
                    <label>Surname</label>  
                    <input type="text" name="surname" value={details.surname} onChange={handleChange} required />  
                    <label>Phone Number</label>  
                    <input type="text" name="phone" value={details.phone} onChange={handleChange} required />  
                    <label>Email</label>  
                    <input type="email" name="email" value={details.email} onChange={handleChange} required />  
                    <label>Company Name</label>  
                    <input type="text" name="companyName" value={details.companyName} onChange={handleChange} required />  
                    <label>Company Phone Number</label>  
                    <input type="text" name="companyPhone" value={details.companyPhone} onChange={handleChange} required />  
                    <label>GST Number</label>  
                    <input type="text" name="gstNumber" value={details.gstNumber} onChange={handleChange} required />  
                    <input type="submit" className="button" value="Register" onClick={handleRegister} />  
                </div>  
            </div>  
        </div>  
    );
};

export default VendorDetails;
