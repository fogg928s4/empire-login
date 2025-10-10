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
        <UserInputField name="user"/>
        <PasswordInputField name="passwd" placeholder="Contraseña"/>
        <SubmitButton id="loginSubmit" text="Ingresar"/>
        <LoginAnchor message="¿No estás registarado aún?" link="/register" anchorText="Únete al imperio"/>
    </form> );
}

RegisterPage.getLayout = function getLayout(page) { 
    return(<LogPageLayout>
        {page}
    </LogPageLayout>);
}