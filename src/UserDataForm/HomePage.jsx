import React, { useState } from 'react';
import './formmodel.css';
import FormPage from './FormPage';

const HomePage = () => {
    const [showForm, setShowForm] = useState(false);

    const handleOpenForm = () => {
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    const [data, setData] = useState({
        username: '',
        email: '',
        phone: '',
        dob: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
        e.target.setCustomValidity(''); // Clear any previous custom validity message
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailInput = e.target.elements.email;
        const phoneInput = e.target.elements.phone;
        const dobInput = e.target.elements.dob;
        const usernameInput = e.target.elements.username;

        if (!data.username) {
            usernameInput.setCustomValidity('Please fill the box');
            usernameInput.reportValidity();
            return;
        }

        if (!data.email.includes('@')) {
            alert('Invalid email. Please check your email address.');
            emailInput.setCustomValidity(`Please include @ in the email address, '${data.email}' is missing an '@'`);
            emailInput.reportValidity();
            return;
        }

        if (data.phone.length !== 10) {
            alert('Invalid phone number. Please enter a 10-digit phone number.');
            phoneInput.setCustomValidity('Please enter a 10-digit phone number.');
            phoneInput.reportValidity();
            return;
        }

        const currentDate = new Date();
        if (currentDate < new Date(data.dob)) {
            alert('Invalid date of birth. Date of birth cannot be in the future.');
            dobInput.setCustomValidity('Date of birth cannot be in the future.');
            dobInput.reportValidity();
            return;
        }

        console.log(data);
        setData({
            username: '',
            email: '',
            phone: '',
            dob: ''
        });
    };

    return (
        <div className='container'>
            <h1>User Details Modal</h1>
            <button className='button' onClick={handleOpenForm}>Open Form</button>

            {showForm && (
                <div className='modal'>
                    <div className='modal-content'>
                        <span className='close' onClick={handleCloseForm}>&times;</span>
                        <h1>Fill details</h1>
                        <form className='form' onSubmit={handleSubmit} noValidate>
                            <label htmlFor="username">Username</label>
                            <input
                                type='text'
                                id='username'
                                name='username'
                                required
                                value={data.username}
                                onChange={handleChange}
                            />
                            <label htmlFor="email">Email Address</label>
                            <input
                                type='text'
                                id='email'
                                name='email'
                                required
                                value={data.email}
                                onChange={handleChange}
                            />
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type='text'
                                id='phone'
                                name='phone'
                                required
                                value={data.phone}
                                onChange={handleChange}
                            />
                            <label htmlFor="dob">Date of Birth</label>
                            <input
                                type='date'
                                id='dob'
                                name='dob'
                                required
                                value={data.dob}
                                onChange={handleChange}
                            />
                            <button className='submit-button' type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomePage;