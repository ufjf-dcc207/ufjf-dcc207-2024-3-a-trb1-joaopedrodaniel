import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <img src="/img/1.png" alt="Logo" className="navbar-logo" />
            <ul className="navbar-list">
                <li className="navbar-item"><a href="#">CARDÁPIO</a></li>
                <li className="navbar-item"><a href="#">SOBRE NÓS</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;