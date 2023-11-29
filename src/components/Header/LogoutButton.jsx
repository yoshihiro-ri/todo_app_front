import React from 'react';

const LogoutButton = () => {
    const handleLogout = () => {
        document.cookie =
            'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        window.location.href = '/form';
    };

    return <button onClick={handleLogout}>ログアウト</button>;
};

export default LogoutButton;
