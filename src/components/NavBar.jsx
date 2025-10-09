function HomeButton() {
    return (<div className="top-banner">
        <a href="home.html">
            <img src="./img/icons/research.png" alt="Imperial logo" />
        </a>
    </div>);
}

function AccountPanel({accountInfo}) {
    return <div className="acc-controls">
        <a id="accManageBtn">
            <img src="img/icons/account.png" alt="manage account icon"/>
        </a>
        <EndSessionButton/>
    </div>
}
function EndSessionButton() {
    return(
        <button  id="cerrarSesion">
            <h4>| Cerrar sesión</h4>
        </button>
    );
}


export default function NavBar({title}) { 
    return <header>
        <HomeButton/>
        <AccountPanel/>
    </header>;
}