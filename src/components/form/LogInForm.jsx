import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogInForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { name, email, password };
        try {
            const response = await fetch(
                `${process.env.REACT_APP_API_URL}/login`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                    credentials: 'include',
                }
            );

            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData);
                if (responseData.result === true) {
                    navigate('/home');
                }
            } else {
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            {/* <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            /> */}
            <br></br>

            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Log In</button>
        </form>
    );
};

export default LogInForm;
