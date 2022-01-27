import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './NavBar.css'

export function NavBar() {
  return (
    <>
        <header>
          <div>
            <img className='logo' src="https://lostmediawiki.com/images/f/f4/Rick_and_Morty_Logo_and_Image.png" alt="logo" />
          </div>
            <ol>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                     <Link to='/Characters'>Characters</Link>
                </li>
                <li>
                     <Link to='/episodes'>Episodes</Link>
                </li>
          </ol>

        </header>
        <div>
          <Outlet />
        </div>
    </>
 );
}
