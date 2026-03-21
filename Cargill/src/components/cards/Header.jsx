import { Link } from 'react-router-dom';
import './css/header.css';
import Logo from '../../assets/images/cargill-logo.png';

export default function Header() {
    return (
        <section className="header">
            <div className="header-container">
                <Link to="/">
                    <img src={Logo} alt="Cargill Logo" />
                </Link>
                <Link to="/about">
                    <p className="header-item">About</p>
                </Link>
                <Link to="/products">
                    <p className="header-item">Products & Services</p>
                </Link>
                <Link to="/news">
                    <p className="header-item">News</p>
                </Link>
                <Link to="/contacts">
                    <p className="header-item">Contacts</p>
                </Link>
            </div>
        </section>
    )
}