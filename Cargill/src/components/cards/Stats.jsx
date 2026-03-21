import "./css/stats.css";

export default function Stats(props) {
    return (
        <div className="stats-box">
            <div className="stats-content_margin">
                <h1 className="stats-num">{props.number}</h1>
                <div className="stats-desc_container">
                    <p className="stats-desc">{props.description}</p>
                    <img src={props.icon} alt="icon" />
                </div>
            </div>
        </div>
    )
}