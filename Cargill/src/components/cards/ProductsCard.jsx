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
            <h1 className="title">{props.title}</h1>
            <p className="description">{props.description}</p>
        </div>
    )
}