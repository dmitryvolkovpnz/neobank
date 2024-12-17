import React from 'react';
import Button from '../ui/button/Button';
import './header.scss'
import {Link} from "react-router-dom";

function Header() {
    return (
        <div>
            <header>
                <div className="container">
                    <div className="header">
                        <div className="header__logo">NeoBank</div>
                        <nav className="header__nav">
                            <ul>
                                <li><Link to="/loan-page">Credit card</Link></li>
                                <li>Product</li>
                                <li>Account</li>
                                <li>Resources</li>
                            </ul>
                        </nav>
                        <Button>Online Bank</Button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;