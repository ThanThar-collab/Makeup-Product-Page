import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Product from './components/Product'
import './App.css'
import { 
  faceCareProducts, 
  foundationProducts, 
  makeupProducts, 
  lipCareProducts 
} from "./data/productData"
import { useEffect, useState } from 'react'

export default function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/e0477236-259d-4b19-b8c4-cd728418de11")
      .then(res => res.json())
      .then(result => {

        console.log("This is the api data",result);   // See API data in console
        setData(result);
      })
      .catch(err => console.error("Error:", err));
  }, []);

  const faceCareProduct = faceCareProducts.map(item => {
     return (
       <Product 
        key={item.id} 
        {...item} 
       />
    )
   })


   const foundationProduct = foundationProducts.map(item => {
     return (
      <Product
         key={item.id} 
         {...item} 
      />
    )
   })

   const makeupProduct = makeupProducts.map(item => {
     return (
      <Product 
        key={item.id} 
        {...item} />
      )
   })

   const lipCareProduct = lipCareProducts.map(item => {
     return (<Product 
      key={item.id} 
      {...item} />
     )
   })

  return (
    <section>
        <Nav />
        <Hero />
        {/* Face Care Products */}
        <section className="product-container">
            {faceCareProduct}
        </section>
          
        {/* Foundation */}
        <section className="product-container">
            {foundationProduct}
        </section>
      
        {/* Makeup Product */}
        <section className="product-container">
          {makeupProduct}
        </section>

        {/* Lip Care Products */}
        <section className="product-container">
          {lipCareProduct}
        </section>
    </section>
   
  )
}

