import React from 'react';
import logoImg from '../../assets/images/logo.png'; // primeiro dê um nome para o seu import, e depois faz referência do seu caminho

import './styles.css'

export class Navbar extends React.Component {
    render() {
        return (
            <header>
                <nav id='navbar'>
                    <div className='nav-brand'>
                        <a href="/">
                            <img src={logoImg} alt="" />
                            <h1>Space Flight News</h1>
                        </a>
                    </div>

                    <ul className='nav-list'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Trending</a></li>
                        <li><a href="/">Categories</a></li>
                        <li><a href="/">About us</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

// export default Navbar;