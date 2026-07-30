import logo from "../assets/Logo.webp";
function Header(){
    return (
        <header className="header">
            <img src={logo} alt="logo" className="logo"/>
            <h1>Welcome to ABES Hotel</h1>
    
        </header>

    );

}
export default Header;
