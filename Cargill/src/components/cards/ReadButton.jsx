import "./css/readButton.css";

export default function ReadButton(props) {
    return (
        <a 
            className="read-btn"
            href={props.link}
        >
            {props.text}
        </a>
    )
}