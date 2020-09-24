import React, {useState} from 'react';
import './Header.sass'
import {HashLink as Link} from 'react-router-hash-link'

const Header = () => {
    let dataLinks = [
        {
            path: '/',
            name: 'Головна',
            click: console.log('good0')
        },
        {
            path: '/firstDishes',
            name: 'Перші страви',
            click: console.log('good1')
        },
        {
            path: '/mainDishes',
            name: 'Основні страви',
            click: console.log('good2')
        },
        {
            path: '/deserts',
            name: 'Десерти',
            click: console.log('good3')
        }
    ]
    return (
        <div>
            <div className="mainLinks">
                {
                    dataLinks.map( (link, id) =>
                        <Link
                            key={id}
                            className='headerLink'
                            to={link.path}
                            activeClassName='active'
                        >
                            <p>{link.name}</p>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default Header;