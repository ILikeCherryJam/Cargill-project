import './css/footer.css';
import YoutubeLogo from "../../assets/icons/youtube.png";
import InstagramLogo from "../../assets/icons/inst.png";
import LinkedInLogo from "../../assets/icons/linked.png";
import FacebookLogo from "../../assets/icons/face.jfif";

export default function Footer() {
    return (
        <section className="footer">  
            <div className="footer-container">
                <div className="contact-container">
                    <a href="https://www.youtube.com/cargill" className="contact-btn">
                        <img src={YoutubeLogo} alt="logo" />
                    </a>
                    <a href="https://www.instagram.com/cargill/" className="contact-btn">
                        <img src={InstagramLogo} alt="logo" />
                    </a>
                    <a href="https://www.linkedin.com/company/cargill" className="contact-btn">
                        <img src={LinkedInLogo} alt="logo" />
                    </a>
                    <a href="https://www.facebook.com/cargill" className="contact-btn">
                        <img src={FacebookLogo} alt="logo" />
                    </a>
                </div>
                <a href="" className="footer-contact">
                    Contact Us
                </a>
                <p className="footer-cargill">
                    © 2026 Cargill, Incorporated. All rights reserved.
                </p>
            </div>
        </section>
    );
}