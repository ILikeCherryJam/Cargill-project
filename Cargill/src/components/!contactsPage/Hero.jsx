import "./css/hero.css"

export default function Hero() {
    return (
        <section className="contacts-hero">
            <div className="container contacts-hero_container">
                <div className="contacts-text_wrapper">
                    <h2 className="contacts-slogan">How can we help?</h2>
                    <h1 className="contacts-title">Contact Us</h1>
                    <p className="contacts-description">
                        Whether you have questions about our products, need support, or just want to learn more about how we’re nourishing the world, we’d love to hear from you. 
                    </p>
                    <a 
                        href="https://forms.wcm.cargill.com/php/forms/form/52583046435" 
                        className="contacts-btn"
                    >
                        Send us a message
                    </a>
                </div>
            </div>
        </section>
    )
}