import "./css/readButton.css";
import { Link } from "react-router-dom";

export default function ReadButton(props) {
    return (
        <Link to={props.link}>
            <button 
                className="read-btn"
            >
                {props.text}
            </button>
        </Link>
    )
}