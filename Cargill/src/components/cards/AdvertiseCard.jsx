import "./css/advertiseCard.css";
import ReadButton from "./ReadButton";

export default function AdvertiseCard(props) {
  return (
    <div className="advertise-card">
        <h1 className="advertise-title advertise-el">{props.title}</h1>
        <p className="advertise-description advertise-el">{props.description}</p>
        <ReadButton className="advertise-el" text={props.readBtn} />
    </div>
  );
}