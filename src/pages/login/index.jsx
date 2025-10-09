import LogPageLayout from '../../components/layouts/LogPageLayout.jsx';
import { UserInputField } from '../../components/Inputs.jsx';
import { PasswordInputField } from '../../components/Inputs.jsx';

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