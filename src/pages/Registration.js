import React, { useState } from 'react';
import axios from 'axios';

export default function Registration() {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/users/register/', formData);
            console.log('Успешно зарегистрирован:', response.data);
        } catch (error) {
            console.error('Ошибка при регистрации:', error);
        }
    };

    return (
        <div className="registrationForm">
            <h2>Registration form:</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    First name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Last name:
                    <input type="text" name="surname" value={formData.surname} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </label>
                <br />
                <button type="submit">Registration</button>
            </form>
        </div>
    );
}
