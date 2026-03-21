import "./css/productsCard.css"

export default function ProductsCard(props) {

    const style = {
        backgroundImage: `url(${props.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
    
    return (
        <div className="products-card">
            <div
                className="products-img"
                style={style}
            ></div>
            <div className="products-text">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    )
}