import React from 'react';
import style from './Header.module.scss'
import Nav from "../Nav/Nav";

const Header = () => {
    return (
        <div className={style.header}>
            <Nav />
        </div>
    );
};

export default Header;