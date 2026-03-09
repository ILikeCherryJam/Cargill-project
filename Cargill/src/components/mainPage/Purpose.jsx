import "./css/purpose.css";
import purposeImg from "../../assets/images/purpose-img.png";
import ReadButton from "../cards/ReadButton";


export default function Purpose() {
    return (
        <section className="purpose">
            <div className="container">  
                <div className="purpose-container">
                    <div className="purpose-desc">
                        <h1>Our purpose</h1>

                        <h2>
                            To nourish the world in a safe, responsible and sustainable way
                        </h2>
                        <p>
                            Sitting at the heart of the global supply chain, we join farmers, ranchers, manufacturers, foodservice customers and retailers in sourcing, making and delivering products that are vital for living.​
                        </p>
                        <p>
                            Every day, our 155K+ team members come to work:​
                        </p>

                        <ul>
                            <li>
                                Driven to improve lives through food, nutrition and health
                            </li>
                            <li>
                                Looking for ways to innovate with purpose​
                            </li>
                            <li>
                                Committed to nourishing our growing world by providing access to life’s essentials
                            </li>
                        </ul>

                        <p>
                            This is how we create new opportunities for our customers to grow, communities to prosper and consumers to live well.
                        </p>
                    </div>
                    <img src={purposeImg} alt="Purpose" />
                </div>
                <ReadButton text="More about Cargill" link="../../about" />
            </div>
        </section>
    )
}