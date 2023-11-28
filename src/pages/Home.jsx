import React from 'react';

function Home() {
    const handleClick = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/user');

            if (response.ok) {
                const data = await response.json();
                console.log(data);
            } else {
                console.error('Error:', response.status);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const handleCheckLogin = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/check_login');

            if (response.ok) {
                const data = await response.json();
                console.log(data);
            } else {
                console.error('Error:', response.status);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div>
            <h2>Home</h2>
            {/* リクエストが送れるかの確認,後で消す */}
            <button onClick={handleClick}>Fetch Data</button>
            <br></br>
            <button onClick={handleCheckLogin}>Check Login</button>
        </div>
    );
}

export default Home;
