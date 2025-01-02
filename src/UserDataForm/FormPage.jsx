import React, { useState } from 'react';

const FormPage = () => {
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
            emailInput.setCustomValidity(`Please include @ in the email address, '${data.email}' is missing an '@'`);
            emailInput.reportValidity();
            return;
        }

        if (data.phone.length !== 10) {
            phoneInput.setCustomValidity('Please enter a 10-digit phone number.');
            phoneInput.reportValidity();
            return;
        }

        const currentDate = new Date();
        if (currentDate < new Date(data.dob)) {
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
        <div className='form-container'>
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
                        <button className='button' type='submit'>Submit</button>
                    </form>          
        </div>
    );
}

export default FormPage;