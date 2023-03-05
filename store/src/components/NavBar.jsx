import React from 'react';
import {NavLink} from 'react-router-dom'
import clsx from 'clsx';
export default function NavBar(props){

    return(
        <>
            <header>
                <h1>The store</h1>
                <nav>
                    <ul>
                        <li><NavLink to='/' className={({ isActive })=> isActive ? 'active' : '' }>Home</NavLink></li>
                        <li><NavLink to='/products' className={({ isActive })=> isActive ? 'active' : '' }>Products</NavLink></li>
                        <li><NavLink to='/about'  className={({ isActive })=> isActive ? 'active' : '' }>About</NavLink></li>
                        <li><NavLink to='/cart'className={({ isActive })=> isActive ? 'active' : '' }>Cart</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}