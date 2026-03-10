import "./css/advertiseCard.css";
import ReadButton from "./ReadButton";

export default function AdvertiseCard(props) {
  return (
    <div 
      className="advertise-card"
      style={{backgroundColor: props.backColor}}
      >
        <h1 className="advertise-title advertise-el"
          style={{color: props.textColor}}
        >
          {props.title}
        </h1>
        <p className="advertise-description advertise-el"
          style={{color: props.textColor}}
        >
          {props.description}
        </p>
        <ReadButton className="advertise-el" 
          text={props.readBtn} 
          link={props.btnLink}  
        />
    </div>
  );
}