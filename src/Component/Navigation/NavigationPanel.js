import React from 'react';
import {NavLink} from 'react-router-dom';
import  './CSS/NavPage.css';

const NavigationPanel = () => {
    const MyLink = ({ isActive }) => ({
        color: isActive ? "Red" : "LightSeaGreen",
        margin: "0 0 0 100px",
        textDecoration: "none",
        fontSize: "22px",
        fontWeight: "bold"
    });
    
    return (
        <>
            <div id='NavDiv'>
            <NavLink style={MyLink} className={'leftData'} to={'/Home'}>Home</NavLink>
            <NavLink style={MyLink} className={'leftData'} to={'/AboutMe'}>About Me</NavLink>
            <span id='MyName'>SWAPNIL SARAVADE</span>
            <NavLink style={MyLink}className={'leftData'}  to={'/Project'}>Project</NavLink>
            <NavLink style={MyLink}className={'leftData'}  to={'/Experience'}>Experience</NavLink>
            <NavLink style={MyLink}className={'leftData'}  to={'Contact'}>Contact</NavLink>
            </div>
        </>
    );
}

export default NavigationPanel;
