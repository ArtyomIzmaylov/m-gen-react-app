import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Sidebar = () => {
    // Инициализация стейта для отслеживания активной вкладки
    const [activeTab, setActiveTab] = useState('home');

    // Функция для обработки клика по ссылке
    const handleTabClick = (tab : string) => {
        setActiveTab(tab);
    };

    return (
        <div className="d-flex align-items-start">
            <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <Link className="nav-link" to="/home">Home</Link>
                <Link className="nav-link" to="/settings">Profile</Link>
                <Link className="nav-link" to="/messages">Messages</Link>
                <Link className="nav-link" to="/settings">Settings</Link>
            </div>
        </div>
    );
};

export default Sidebar;