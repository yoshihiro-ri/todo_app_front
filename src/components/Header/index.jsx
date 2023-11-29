import React from 'react';
import UserName from './UserName';
import LogoutButton from './LogoutButton';

const Header = () => {
    return (
        <header>
            <UserName />
            <LogoutButton />
        </header>
    );
};

export default Header;
