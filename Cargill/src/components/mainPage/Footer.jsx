import './css/footer.css';
import YoutubeLogo from "../../assets/logos/youtube.png";
import InstagramLogo from "../../assets/logos/inst.png";
import LinkedInLogo from "../../assets/logos/linked.png";
import FacebookLogo from "../../assets/logos/face.jfif";

export default function Footer() {
    return (
        <section className="footer">
            <div className="footer-content">
                <div className="contact-container">
                    <a href="" className="contact-btn">
                        <img src={YoutubeLogo} alt="logo" />
                    </a>
                    <a href="" className="contact-btn">
                        <img src={InstagramLogo} alt="logo" />
                    </a>
                    <a href="" className="contact-btn">
                        <img src={LinkedInLogo} alt="logo" />
                    </a>
                    <a href="" className="contact-btn">
                        <img src={FacebookLogo} alt="logo" />
                    </a>
                </div>
                <a href="" className="contact">

                </a>
                <p className="footer-cargill">

                </p>
            </div>
        </section>
    );
}