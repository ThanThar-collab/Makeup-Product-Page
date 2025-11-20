import { FiSearch, FiShoppingCart } from "react-icons/fi";

export default function Navbar() {
    return (
        <section className="navbar-section">
            <div>
                <div className="navbar-logo-div">
                    <img src="./src/assets/shop-logo.png" alt="nav-icon" className="nav-icon" />
                    <p className="nav-icon-text">Beauty Shop</p>
                    <ul className="nav-items-div">
                        <li className="nav-items">Home</li>
                        <li className="nav-items">Shop</li>
                        <li className="nav-items">Skin Care</li>
                        <li className="nav-items">Makeup</li>
                        <li className="nav-items">Hair Care</li>
                        <li className="nav-items">About Us</li>
                        <li className="nav-items">Blogs</li>
                    </ul>
                    <div className="nav-icons-div">
                        <span className="nav-shop-icons"><FiSearch /></span>
                        <span className="nav-shop-icons"><FiShoppingCart /></span>
                
                    </div>
                </div>
            </div>
        </section>
    )
}

