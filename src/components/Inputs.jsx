export function UserInputField(props) {
    return (
        <input name={props.name} id={props.name} type="text" placeholder="Usuario" required/>
    );
}

export function PasswordInputField(props) {
    return(
        <input name={props.name} id={props.name} type="password" placeholder={props.placeholder} required></input>
    )
}