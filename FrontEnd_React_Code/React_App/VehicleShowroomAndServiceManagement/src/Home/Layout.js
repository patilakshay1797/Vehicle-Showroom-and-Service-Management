import React from 'react'
import { Outlet, Link, Route } from 'react-router-dom'
import Home from './Home'
import './layoutcss.css'
// import Admin from './Admin'

const Layout = () => {
  return (
    <>
    <nav className=''>
        <ul>
            <li>
                <Link to='/'>mainpage</Link>
            </li> <span/>
            <li>
                <Link to='/'>Admin</Link>
            </li> <span />
            <li>
                <Link to='/'>EmployeeManagement</Link>
            </li>
        </ul>
    </nav>
    
    <hr />
    
    <Outlet />
    </>
  )
}

export default Layout