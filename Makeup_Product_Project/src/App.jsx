import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Product from './components/Product'
import './App.css'

function App() {
  return (
    <section>
      <Nav />
      <Hero />
      {/* Face Care Products */}
      <section className="product-container">

        <Product 
          reviewCount={4.8}
          image="./src/assets/anua-heartleaf-clear-pad.png"
          alt="face-pad-product"
          type="Face Care"
          name="Anua Heartleaf Clear Pad"
          newPrice = "$22.00"
          oldPrice = "$30.00"
        />
        <Product 
          reviewCount={4.9}
          image="./src/assets/centella-moisture-cream.png"
          alt="Centella Moisture Cream"
          type="Face Care"
          name="Centella Moisture Cream"
          newPrice = "$13.00"
          oldPrice = "$20.00"
        />
        <Product 
          reviewCount={4.0}
          image="./src/assets/torriden-cleansing-foam.png"
          alt="Torriden Cleansing Product"
          type="Face Care"
          name="Torriden Cleansing Foam"
          newPrice = "$15.99"
          
        />
        <Product 
          reviewCount={4.8}
          image="./src/assets/cerave-cream.png"
          alt="CeraVe Moisturizing Cream"
          type="Face Care"
          name="CeraVe Moisturizing Cream"
          newPrice = "$7.09"
          
        />
      </section>
      {/* Foundation */}
      <section className="product-container">
        <Product 
          reviewCount={4.2}
          image="./src/assets/fit-me-foundation-series.png"
          alt="Fit Me Foundation Series"
          type="Foundaion-Makeup"
          name="Fit Me Foundation Series"
          newPrice = "$8.98"
          oldPrice = "$9.50"
        />
        <Product 
          reviewCount={4.6}
          image="./src/assets/kiko-foundation-series.png"
          alt="Kiko Foundation Series"
          type="Foundaion-Makeup"
          name="Kiko Foundation Series"
          newPrice = "$18.50"
         
        />
        <Product 
          reviewCount={4.9}
          image="./src/assets/elf-foundation-series.png"
          alt="Elf Foundation Series"
          type="Foundaion-Makeup"
          name="Elf Foundation Series"
          newPrice = "$18.00"
         
        />
        <Product 
          reviewCount={4.7}
          image="./src/assets/klaris-foundation-series.png"
          alt="Klaris Foundation Series"
          type="Foundaion-Makeup"
          name="Klaris Foundation Series"
          newPrice = "$9.00"
          oldPrice = "$11.00"
        />
      </section>
     
      {/* Makeup Product */}
      <section className="product-container">
         <Product 
          reviewCount={4.8}
          image="./src/assets/dior-rosy-glow-powder-blush.png"
          alt="Dior Rosy Glow Powder Blush"
          type="Makeup"
          name="Dior Rosy Glow Powder Blush "
          newPrice = "$39.00"
          oldPrice = "$42.00"
        />
        <Product 
          reviewCount={4.9}
          image="./src/assets/Ysl-Blush-series.png"
          alt="Yves Saint - Make Me Blush Powder Blush"
          type="Makeup"
          name="Yves Saint Powder Blush Series "
          newPrice = "$49.00"
          oldPrice = "$54.00"
        />
        <Product 
          reviewCount={4.8}
          image="./src/assets/rare-beauty-blush.png"
          alt="blush-product"
          type="Makeup"
          name="Rare Beauty Blush"
          newPrice = "$25.00"
          oldPrice = "$27.19"
        />
        <Product 
          reviewCount={4.9}
          image="./src/assets/rhode-blush-series.png"
          alt="Rhode Blush Series"
          type="Makeup"
          name="Rhode Blush Series"
          newPrice = "$55.00"
          oldPrice = "$59.00"
        />
      </section>
      <section className="product-container">
        <Product 
          reviewCount={4.3}
          image="./src/assets/maybelline-superstayvinylink-lippy10.png"
          alt="Maybelline 10 Lippy Super Stay Vinyl Ink LipStick"
          type="Lip Care"
          name="Maybelline Super Stay Vinyl Ink #10-Lippy"
          newPrice = "$9.99"
        
        />
        <Product 
          reviewCount={4.8}
          image="./src/assets/roma&nd-zero-matte-tint-lippenstiff-6g-Nr.png"
          alt="Romand Matte Tint NR 09"
          type="Lip Care"
          name="Romand Matte Tint NR 09"
          newPrice = "$9.79"
          oldPrice = "$11.00"
        />
        <Product 
          reviewCount={4.9}
          image="./src/assets/romand-juicy-lipstick.png"
          alt="Romand Matte Tint NR 09"
          type="Lip Care"
          name="Rommand Juicy Lipstick"
          newPrice = "$9.79"
          oldPrice = "$12.23"
        />
        <Product 
          reviewCount={4.4}
          image="./src/assets/laneige-lip-balm.png"
          alt="lip-care-product"
          type="Lip Care"
          name="Laneige Lip Balm"
          newPrice = "$19.00"
          oldPrice = "$22.00"
        />
      </section>
    </section>
  )
}

export default App