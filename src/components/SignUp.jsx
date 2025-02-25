import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/SignUp.css';
import buildingImage from '../assets/building pic for sign up page.jpg';
import CommunityLogo from '../assets/Natural Care Logo.jpg';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Customer'); // Default role is now "Customer"
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        if (role === 'Customer') {
            navigate('/customer-details', { state: { email, password, role } });
        } else {
            navigate('/vendor-details', { state: { email, password, role } });
        }
    };

    return (
        <div className="signup_section">
            <div className="signup_img">
                <img src={buildingImage} alt="building" />
            </div>
            <div className="signup_form">
                <img src={CommunityLogo} id="logo" alt="community logo" />
                <h3>Sign Up</h3>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <br /><br />
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <br /><br />
                <label>Role</label>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="Vendor">Vendor</option>
                    <option value="Customer">Customer</option>
                </select>
                <br /><br />
                <input type="submit" className="button" id="button" value="Sign Up" onClick={handleSignUp} />
            </div>
        </div>
    );
};

export default SignUp;
