import React, { useEffect, useState } from 'react';

function UserName() {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const checkLogin = async () => {
            try {
                const response = await fetch(
                    'http://127.0.0.1:5000/check_login',
                    {
                        credentials: 'include',
                    }
                );

                if (response.ok) {
                    const data = await response.json();
                    setUsername(data.username);
                } else {
                    console.error('Error:', response.status);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        checkLogin();
    }, []);

    return <p>Welcome, {username}</p>;
}

export default UserName;
