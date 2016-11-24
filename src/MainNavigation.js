/**
 * Created by dima on 09.11.16.
 */

import React from 'react';
import {Link} from 'react-router'

import './MainNavigation.css'

function MainNavigation() {
    return (
        <nav className="MainNavigation">
            <Link className='MainNavigation-navElement' to="/changes">List changes</Link>
            <Link className='MainNavigation-navElement' to="/create-change">Create new change</Link>
            <Link className='MainNavigation-navElement' to="/create-task">Create task</Link>
        </nav>
    )
}

export default MainNavigation