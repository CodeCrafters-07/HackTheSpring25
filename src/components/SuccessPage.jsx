import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/FormStyle.css';

const SuccessPage = () => {
    const navigate = useNavigate();

    const handleLoginRedirect = () => {
        navigate('/');  // Redirect to the login page
    };

    return (
        <div className="main_container">
            <div className="form_section">
                <div className="form_content">
                    <h3>Registration Successful!</h3>
                    <p>Your account has been created successfully.</p>
                    <p>Click below to log in to your account.</p>
                    <button className="button" onClick={handleLoginRedirect}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default SuccessPage;
