import "./css/productsBlock.css"
import ProductsCard from "../cards/ProductsCard";
import Agriculture from "../../assets/images/productAgriculture.jpg"
import Animal from "../../assets/images/productAnimal.jpg"
import Beauty from "../../assets/images/productBeauty.jpg"
import BioIndustial from "../../assets/images/productBioIndustrial.png"
import Data from "../../assets/images/productData.jpg"
import Food from "../../assets/images/productFood.jpg"
import FoodService from "../../assets/images/productFoodService.jpg"
import Industrial from "../../assets/images/productIndustrial.jpg"
import Meat from "../../assets/images/productMeat.jpg"
import Pharmaceutical from "../../assets/images/productPharmateutical.jpg"
import Risk from "../../assets/images/productRisk.jpg"
import Supplements from "../../assets/images/productSupplements.jpg"
import Trade from "../../assets/images/productTrade.jpg"
import Transportation from "../../assets/images/productTransportation.jpg"

export default function ProductsBlock() {
    return (
        <section className="products-block">
            <div className="container products-block_container">
                <ProductsCard 
                    img={Agriculture}
                    title="Agriculture"
                    description="Origination, processing, marketing and distribution services"
                />
                <ProductsCard 
                    img={Animal}
                    title="Animal Nutrition"
                    description="Providing better nutrition for better lives with animal nutrition solutions that help producers feed a growing world."
                />
                <ProductsCard 
                    img={Beauty}
                    title="Beauty"
                    description="Natural raw materials, nature-derived ingredients and innovation services for personal care products"
                />
                <ProductsCard 
                    img={BioIndustial}
                    title="Bioindustrial"
                    description="Nature-derived chemistries to increase performance and profitability for industrial applications"
                />
                <ProductsCard 
                    img={Data}
                    title="Data Asset Solutions"
                    description="It’s a noisy world out there. You need someone who can pierce through the confusion and identify new signals. As one of the largest participants in global supply chains for food, agriculture and metals, our alternative datasets and analytics can help you create insights to answer your most pressing questions and propel your business forward."
                />
                <ProductsCard 
                    img={Food}
                    title="Food & Beverage"
                    description="Ingredients, resources, and expertise for creating successful food and beverage products"
                />
                <ProductsCard 
                    img={FoodService}
                    title="Foodservice"
                    description="To stay competitive in today’s foodservice industry, you need a partner who understands your business challenges – as well as the constantly changing tastes of your customer. Our trusted foodservice products can help your business thrive and grow, from better-for-you items that achieve nutrition goals, to indulgent items that build customer loyalty and frequency."
                />
                <ProductsCard 
                    img={Industrial}
                    title="Industrial"
                    description="Salt and deicing solutions, metal and steel trading"
                />
                <ProductsCard 
                    img={Meat}
                    title="Meat & Poultry"
                    description="We provide food producers, retailers and foodservice operators with wholesome meat and poultry products all around the globe."
                />
                <ProductsCard 
                    img={Pharmaceutical}
                    title="Pharmaceutical"
                    description="Nature-based excipients and active ingredients for a range of pharmaceutical products"
                />
                <ProductsCard 
                    img={Risk}
                    title="Risk Management"
                    description="Customized hedging solutions to mitigate risks and uncertainties in more than 100 commodities and currencies"
                />
                <ProductsCard 
                    img={Supplements}
                    title="Supplements"
                    description="Consumers are becoming more proactive about their health and supplements play a key role in this shifting mindset. We provide an array of supplements that support many different aspects of health that are top of mind for consumers today."
                />
                <ProductsCard 
                    img={Trade}
                    title="Trade & Capital Markets"
                    description="Cargill Trade & Capital Markets provides financial solutions that facilitate trade and mitigate trade-related risks for companies doing business in emerging and developed markets."
                />
                <ProductsCard 
                    img={Transportation}
                    title="Transportation"
                    description="Deep expertise in transporting bulk commodities and finished products"
                />

            </div>
        </section>
    )
}