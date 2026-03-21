import "./css/address.css"
import HeadQuarters from "../../assets/images/cargill-headquarters.png"

export default function Address() {
    return (
        <section className="address">
            <div className="container address_container">
                <div className="address-text_wrapper">
                    <h1>
                        Corporate Headquarters
                    </h1>
                    <p className="addresses-description">
                        Combining 160 years of experience with new innovations and insights.
                    </p>
                    <div className="addresses-wrapper">
                        <p>Cargill, Incorporated</p>
                        <p>PO Box 9300</p>
                        <p>Minneapolis, MN</p>
                        <p>55440-9300</p>
                        <p>United States</p>
                        <a href="tel:800-227-4455">800-227-4455</a>
                    </div>
                </div>
                <img src={HeadQuarters} alt="" />
            </div>
        </section>
    )
}