import "./css/video.css";

export default function Video(props) {
    return (
        <div className="container video">
        <iframe
            src={props.src}
            title={props.title}
            frameborder={props.frameborder}
            allow={props.allow}
            referrerpolicy={props.referrerpolicy}
            allowfullscreen
        />
        </div>
    )
}