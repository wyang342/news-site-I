import React, { Component } from 'react';

function AppNav({ navItems, handleNavClick }) {
    const getLinks = () => {
        const links = navItems.map(navItem => {
            return (
                <span>
                    <a onClick={() => handleNavClick(navItem.value)} id={navItem.value} >{navItem.label}</a>
                    &nbsp;|&nbsp;
                </span>
            )
        })

        return links;
    }

    return (
        <nav>
            {getLinks()}
        </nav>
    )
}


export default AppNav;
