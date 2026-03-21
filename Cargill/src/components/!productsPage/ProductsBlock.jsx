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
                    title="Agriculture"
                    description="Origination, processing, marketing and distribution services"
                />
                <ProductsCard 
                    img={Beauty}
                    title="Agriculture"
                    description="Origination, processing, marketing and distribution services"
                />
                <ProductsCard 
                    img={BioIndustial}
                    title="Agriculture"
                    description="Origination, processing, marketing and distribution services"
                />
                <ProductsCard 
                    img={Data}
                    title="Agriculture"
                    description="Origination, processing, marketing and distribution services"
                />
                <ProductsCard 
                    img={Food}
                    title="Agriculture"
                    description="Origination, processing, marketing and distribution services"
                />
                <ProductsCard 
                    img={FoodService}
                    title="Agriculture"
                    description="Origination, processing, marketing and distribution services"
                />
                <ProductsCard 
                    img={Industrial}
                    title="Agriculture"
                    description="Origination, processing, marketing and distribution services"
                />
                <ProductsCard 
                    img={Meat}
                    title="Agriculture"
                    description="Origination, processing, marketing and distribution services"
                />
                <ProductsCard 
                    img={Pharmaceutical}
                    title="Agriculture"
                    description="Origination, processing, marketing and distribution services"
                />
                <ProductsCard 
                    img={Risk}
                    title="Agriculture"
                    description="Origination, processing, marketing and distribution services"
                />
                <ProductsCard 
                    img={Supplements}
                    title="Agriculture"
                    description="Origination, processing, marketing and distribution services"
                />
                <ProductsCard 
                    img={Trade}
                    title="Agriculture"
                    description="Origination, processing, marketing and distribution services"
                />
                <ProductsCard 
                    img={Transportation}
                    title="Agriculture"
                    description="Origination, processing, marketing and distribution services"
                />

            </div>
        </section>
    )
}