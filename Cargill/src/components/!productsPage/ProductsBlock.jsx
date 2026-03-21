import "./css/productsBlock.css"
import ProductsCard from "../cards/ProductsCard";
import Agriculture from "../../assets/images/productAgriculture.jpg"

export default function ProductsBlock() {
    return (
        <section className="products-block">
            <div className="container products-block_container">
                <ProductsCard 
                    img={Agriculture}
                    title="Agriculture"
                    description="Origination, processing, marketing and distribution services"
                />
            </div>
        </section>
    )
}