import React, { Component } from 'react';

class AppNav extends Component {
    getLinks = (navItems, handleNavClick) => {
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

    render() {
        const { navItems, handleNavClick } = this.props;

        return (
            <nav>
                {this.getLinks(navItems, handleNavClick)}
            </nav>
        )
    }
}

export default AppNav;
