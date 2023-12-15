import React from 'react'
import './Navbar.css'
import { Icon } from '@iconify/react';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='logo'>
                E-Ticaret Sitesi
            </div>
            <div className='basket-logo'>
                <Icon icon="simple-line-icons:basket"></Icon>
                <div className='basket-head'>Sepetim</div>
            </div>
        </div>
    )
}

export default Navbar