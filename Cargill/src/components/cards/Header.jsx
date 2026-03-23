import { Link } from 'react-router-dom';
import { useState } from 'react';
import './css/header.css';
import Logo from '../../assets/images/cargill-logo.png';

export default function Header() {

    const [display, setDisplay] = useState(false);
    
    return (
        <section className="header">
            <div className="header-container">
                <div className="menu">
                    <Link to="/">
                        <img src={Logo} alt="Cargill Logo" />
                    </Link>
                    <Link to="/about">
                        <p className="header-item">About</p>
                    </Link>
                    <Link to="/products">
                        <p className="header-item">Products & Services</p>
                    </Link>

                    <Link to="/contacts">
                        <p className="header-item">Contacts</p>
                    </Link>
                    <ul className="header-menu__btn"
                      onClick={() => {setDisplay(prev => !prev)}}
                    >
                      <li className='header-menu__btn-line'></li>
                      <li className='header-menu__btn-line'></li>
                      <li className='header-menu__btn-line'></li>
                    </ul>
                </div>
                <div className={display ? "menu-bottom active" : "menu-bottom"}>
                    <Link to="/about">
                        <p className="header-item_bottom">About</p>
                    </Link>
                    <Link to="/products">
                        <p className="header-item_bottom">Products & Services</p>
                    </Link>
                    
                    <Link to="/contacts">
                        <p className="header-item_bottom">Contacts</p>
                    </Link>
                </div>
            </div> 
        </section>
    )
}

/*<Link to="/news">
                    <p className="header-item">News</p>
                </Link>*/