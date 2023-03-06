import React, {useState, useEffect} from 'react';
import {NavLink, Link} from 'react-router-dom'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import Button from './Button.jsx'

export default function NavBar(props){
    const {cart} = props
    const [isDark, setIsDark] = useState(false)

    useEffect(()=>{
        document.body.classList.toggle('dark')
    },[isDark])

    const totalItems = cart.reduce((a,b)=> {
        return a + (b.quantity)
    },0)

    return(
        <>
            <header>
                <Link to='/'><h1>The store</h1></Link>
                <nav>
                    <ul>
                        <li><NavLink to='/' className={({ isActive })=> isActive ? 'active' : '' }>Home</NavLink></li>
                        <li><NavLink to='/products' className={({ isActive })=> isActive ? 'active' : '' }>Products</NavLink></li>
                        <li><NavLink to='/about'  className={({ isActive })=> isActive ? 'active' : '' }>About</NavLink></li>
                        <li><NavLink to='/cart'className={({ isActive })=> isActive ? 'active' : '' }>Cart({totalItems})</NavLink></li>
                    </ul>
                <Button
                 onClick={()=>{setIsDark(!isDark)}}
                 themeSwitcher = 'themeSwitcher'
                 extraClass = {isDark ? 'dark' : 'light'}
                 >{isDark ? <MdOutlineLightMode/>  : <MdDarkMode/>}</Button>
                </nav>
            </header>
        </>
    )
}