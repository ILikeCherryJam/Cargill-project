import './css/header.css';
import Logo from '../../assets/images/cargill-logo.png';

export default function Header() {
    return (
        <section className="header">
            <div className="header-container">
                <img src={Logo} alt="Cargill Logo" />
                <p className="header-item">About</p>
                <p className="header-item">Products & Services</p>
                <p className="header-item">News</p>
                <p className="header-item">Contacts</p>
            </div>
        </section>
    )
}