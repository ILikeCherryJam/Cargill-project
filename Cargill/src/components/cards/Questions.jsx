import "./css/questions.css"
import { useState } from "react"

export default function Questions(props) {

    const [display, setDisplay] = useState(false);

    return (
        <div 
            className="questions-box"
            onClick={() => {setDisplay(prev => !prev)}}
        >
            <div className="question-wrapper">
                <p>{props.question}</p>
            </div>
            <div className={display ? "answers active" : "answers"}>
                <li>{props.answer}</li>
            </div>
        </div>
    )
}