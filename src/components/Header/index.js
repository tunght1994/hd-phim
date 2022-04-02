import React from 'react'
import './index.scss'
import logo from '../../assets/logo.png'
import headerMenu from '../../data/dataMenu'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header container'>
        <div className="header-logo">
            <img src={logo} alt="" />
        </div>
        <div className="header-menu">
            {
                headerMenu.map((item, index) => (
                    <Link to={item.path} key={index} className="header-menu-item">
                        <p>{item.display}</p>
                    </Link>
                ))
            }
        </div>
        <div className="header-user">
            <p>Login</p>
        </div>
    </div>
  )
}

export default Header