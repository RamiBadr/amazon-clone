import React from 'react'
import { Link } from 'react-router-dom'

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import "./Header.css"
import { useStateValue } from './helpers/StateProvider';
import { auth } from '../firbase-config';

function Header() {
    const [{basket, user}] = useStateValue();

    const signOut = () => {
        if(user) auth.signOut();
    }

    return (
        <nav className="header">
            <Link to="/">
                    <img className="header__logo" 
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                    alt="logo" />
            </Link>
            <div className='header__search-bar'>
                <input type="text"/>
                {/* <i class="fas fa-search"></i> */}
                <SearchOutlinedIcon className="search-icon" />
            </div>
            <div className="header__nav">
                <Link to={!user && "/login"}>
                    <div className='header__option'>
                        <span>Hello, {user?.email}</span>
                        <span  onClick={signOut}>{user? 'Sign out' : 'Sign in'}</span>
                    </div>
                </Link>
                <Link to="/">
                    <div className='header__option'>
                        <span>Returns, </span>
                        <span>Orders</span>
                    </div>
                </Link>
                <Link to="">
                    <div className='header__option'>
                        <span>Your,</span>
                        <span>Prime</span>
                    </div>
                </Link>
                <Link to="/checkout">
                <div className='header__option header__optionBasket'>
                    <ShoppingCartIcon />
                    <span>{basket.length}</span>
                </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header
