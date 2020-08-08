import React from 'react';
import './Header.sass'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={'Header'}>
            <div className="mainLinks">
            <NavLink activeClassName={'ActiveNavLink'} exact={true} to="/">Головна</NavLink>
            <NavLink activeClassName={'ActiveNavLink'} to="/firstDishes">Перші страви</NavLink>
            <NavLink activeClassName={'ActiveNavLink'} to="/mainDishes">Основні страви</NavLink>
            <NavLink activeClassName={'ActiveNavLink'} to="/deserts">Десерти</NavLink>
            </div>
        </div>
    );
};

export default Header;