import React from 'react'
import logo from './logo.svg';
import './HeaderLogoButton.css';

function HeaderLogoButton() {
    return (
        <div className="logo_button">
            <div className = "logo-div" >
                <img className="app_logo" src = {logo}/>
            <h2>useums</h2>
            </div>
        </div>
    )
}

export default HeaderLogoButton
