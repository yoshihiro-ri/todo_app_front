import React from 'react';

const LogoutButton = () => {
    const handleLogout = () => {
        document.cookie =
            'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        window.location.href = '/login';
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
