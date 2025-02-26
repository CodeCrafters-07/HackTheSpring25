import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../Components/LogIn.css';
import buildingImage from '../assets/building pic for sign up page.jpg';
import CommunityLogo from '../assets/Natural Care Logo.jpg';
import { Link } from 'react-router-dom';

const LogIn = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleLoginRedirect = () => {
    navigate("/home"); // Redirect to HomePage
  };

  return (
    <div className="login_section">
        <div className="login_img">
            <img src={buildingImage} alt="building"/>
        </div>
        <div className="login_form">
            <img src={CommunityLogo} id="logo" alt="community logo"/>
            <h3>Log In</h3>
            <label htmlFor="email">Email</label>
            <input type="email" required />
            <br /><br />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter your password" />
            <br /><br />
            <label htmlFor="role">Role</label>
            <select name="role" id="role">
              <option value="" selected >Select Role</option>
                <option value="Vendor">Vendor</option>
                <option value="Customer">Customer</option>
                <option value="Others">Others</option>
            </select>
            <br /><br />
            <input 
              type="submit" 
              className="button" 
              id="button" 
              value="Log In" 
              onClick={handleLoginRedirect} // Redirects to HomePage
            />
            <p className="signup_prompt">
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
        </div>
    </div>
  );
};

export default LogIn;
