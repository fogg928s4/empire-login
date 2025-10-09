import LogPageLayout from '../../components/LogPageLayout.jsx';
import { UserInputField } from '../../components/Inputs.jsx';
import { PasswordInputField } from '../../components/Inputs.jsx';

export default function RegisterPage(){
    return(<>
        <UserInputField name="newUser"/>
        <PasswordInputField name="newPasswd" placeholder="Contraseña"/>
        <PasswordInputField name="newPasswdRpt" placeholder="Repita su contraseña"/>
    </> );
}

RegisterPage.getLayout = function getLayout(page) { 
    return(<LogPageLayout>
        {page}
    </LogPageLayout>);
}