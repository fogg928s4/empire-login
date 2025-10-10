import LogPageLayout from '../../components/layouts/LogPageLayout.jsx';
import { UserInputField } from '../../components/Inputs.jsx';
import { PasswordInputField } from '../../components/Inputs.jsx';
import { SubmitButton } from '../../components/Inputs.jsx';
import LoginAnchor from '../../components/LoginAnchor.jsx';

import MainStyles from '../../../styles/style-main.css';
import LogInStyles from '../../../styles/style-login.css';
import MediaStyles from '../../../styles/media-styles.css';
export {MainStyles, LogInStyles , MediaStyles};


export default function RegisterPage(){
    return(<form>
        <UserInputField name="newUser"/>
        <PasswordInputField name="newPasswd" placeholder="Contraseña"/>
        <PasswordInputField name="newPasswdRpt" placeholder="Repita su contraseña"/>
        <SubmitButton id="regSubmit" text="Registrarse"/>
        <LoginAnchor message="¿Ya te uniste a la causa?" link="/login" anchorText="Ingresa"/>
    </form> );
}

RegisterPage.getLayout = function getLayout(page) { 
    return(<LogPageLayout>
        {page}
    </LogPageLayout>);
}