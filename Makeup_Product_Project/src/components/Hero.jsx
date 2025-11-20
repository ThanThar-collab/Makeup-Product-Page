import { FiShoppingCart } from "react-icons/fi";

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="text-section">
                <p className="hero-sale-text">Sale Up To 40% Off</p>
                <h2 className="hero-title">NOVA Beauty Natural Cosmetics</h2>
                <a href="#" className="hero-btn-link"><button className="hero-btn">Shop Now <FiShoppingCart /></button></a> 
            </div>
          
        </section>
    )
}