import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logoimage from '../assets/homelogo.png'

export function Header() {
    return (
        <div>
            <Link to="/"><img src={logoimage} alt="home-image"></img></Link>
        </div>
    )
}

