import React from 'react';
import { NavLink } from 'react-router-dom';
import './Active.css'

const Activelink = ({to, children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? "active": "normal"
            }
        >
            {children}
        </NavLink>
    );
};

export default Activelink;