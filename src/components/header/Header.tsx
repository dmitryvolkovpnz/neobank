import React from 'react';
import Button from '../ui/button/Button';
import './header.scss'

function Header() {
    return (
        <div>
            <header>
                <div className="container">
                    <div className="header">
                        <div className="header__logo">NeoBank</div>
                        <nav className="header__nav">
                            <ul>
                                <li>Credit card</li>
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