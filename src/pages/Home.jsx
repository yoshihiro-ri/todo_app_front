import React from 'react';
import Header from '../components/Header';
import { TaskCards } from '../components/task/TaskCards';
function Home() {
    return (
        <div className="app">
            <Header />
            <TaskCards />
        </div>
    );
}

export default Home;
