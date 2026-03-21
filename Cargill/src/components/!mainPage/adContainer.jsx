import AdvertiseCard from "../cards/AdvertiseCard";
import "./css/adContainer.css";

export default function AdContainer() {
    return (
        <section className="ad-container">
            <div className="container">
                <div className="ad-container">
                    <AdvertiseCard 
                        title="People"
                        description="With 155K+ colleagues in 70 countries, we work as a global network to bring together the people, ideas and resources that can nourish lives around the world.​"
                        readBtn="Contacts"
                        backColor="#012912"
                        textColor="#BDE588"
                        btnLink="/contacts"
                    />
                    <AdvertiseCard 
                        title="Products"
                        description="Partnering across the supply chain, we bring food, ingredients, agricultural solutions and industrial products to meet customers’ ever-evolving needs.​"
                        readBtn="Products & Services"
                        backColor="#BDE588"
                        textColor="#012912"
                        btnLink="/products"
                    />
                    <AdvertiseCard 
                        title="News"
                        description="With operations in 70 countries, Cargill and our customers are making news around the globe. Here are some of the latest stories."
                        readBtn="More News"
                        btnLink="/news"
                        backColor="#fff"
                        textColor="#00843D"
                    />
                </div>
            </div>
        </section>
    )
}