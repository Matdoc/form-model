//modal overlay that covers the entire screen and makes the background content inactive.
import React, { useState } from 'react';
import './HomePage.css';
import FormPage from './FormPage';

const HomePage = () => {
    const [showForm, setShowForm] = useState(false);

    const handleOpenForm = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    return (
        <div className='container'>
            <h1>User Details Modal</h1>
            <button className='button' onClick={handleOpenForm}>Open form</button>

            {showForm && (
                <div className='modal'>
                    <div className='modal-content'>
                        <span className='close' onClick={handleCloseForm}>&times;</span>
                        <FormPage />
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomePage;