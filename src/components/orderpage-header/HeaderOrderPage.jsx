import { Icons } from "../../assets";


function HeaderOrderPage(params) {
    return(
        <header className="menupage-header-container">
            <div className="menupage-header-body fcb">
                <div className="logo-container"> <h1>LOGO</h1> </div>
                <div>
                    <nav> <Icons.MenuIcon /> </nav>
                </div>
            </div>
        </header>
    );
}


export default HeaderOrderPage;