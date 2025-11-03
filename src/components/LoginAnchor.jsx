export default function LoginAnchor(props) {
    return (
    <p>{props.message} <a href={props.link}>{props.anchorText}</a></p>
    );
}