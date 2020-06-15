import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/layouts.css'
import Logo from '../assets/images/logo2.png'

const Header = ({ position }) => {
    return (

        <nav id="header-nav" class="navbar navbar-light justify-content-between px-5 container-fluid"
            style={{ position }}
        >
            <Link class="navbar-brand" to="#">
                <img src={Logo} class="d-inline-block align-top logo" alt="" />
                {/* Bootstrap */}
            </Link>
            <ul className="d-flex w-25 header-icon-ul">
                <li className="pr-5"><Link to="/login"><i class="fas fa-user-circle text-color font-20"></i></Link></li>
                <li className=""><Link to="/cart"><i class="fas fa-shopping-cart text-color font-20"></i></Link></li>
            </ul>
        </nav>
    )
}

export default Header
