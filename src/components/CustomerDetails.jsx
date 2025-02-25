import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../Components/style.css';

const CustomerDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const [details, setDetails] = useState({
        firstName: '', surname: '', phone: '', email: ''
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
                    <h3>Customer Details</h3>  
                    <label>First Name</label>  
                    <input type="text" name="firstName" value={details.firstName} onChange={handleChange} required />  
                    <label>Surname</label>  
                    <input type="text" name="surname" value={details.surname} onChange={handleChange} required />  
                    <label>Phone Number</label>  
                    <input type="text" name="phone" value={details.phone} onChange={handleChange} required />  
                    <label>Email</label>  
                    <input type="email" name="email" value={details.email} onChange={handleChange} required />  
                    <input type="submit" className="button" value="Register" onClick={handleRegister} />  
                </div>  
            </div>  
        </div>  
    );
};

export default CustomerDetails;
