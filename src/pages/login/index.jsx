import LogPageLayout from '../../components/layouts/LogPageLayout.jsx';
import { UserInputField } from '../../components/Inputs.jsx';
import { PasswordInputField } from '../../components/Inputs.jsx';

import MainStyles from '../../../styles/style-main.css';
import LogInStyles from '../../../styles/style-login.css';
import MediaStyles from '../../../styles/media-styles.css';
export {MainStyles, LogInStyles , MediaStyles};


export default function RegisterPage(){
    return(<>
        <UserInputField name="user"/>
        <PasswordInputField name="passwd" placeholder="Contraseña"/>
    </> );
}

RegisterPage.getLayout = function getLayout(page) { 
    return(<LogPageLayout>
        {page}
    </LogPageLayout>);
}