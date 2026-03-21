import "./css/infoBlock.css";

export default function InfoBlock(props) {
    return (
        <section className="info-block">
            <div className="container info-block_wrapper">
                <img src={props.img} alt="" />

                <div className="info-block_text">
                    <h2>{props.title}</h2>
                    <h1>{props.slogan}</h1>
                    <p>{props.description}</p>
                </div>
            </div>
        </section>
    )
}