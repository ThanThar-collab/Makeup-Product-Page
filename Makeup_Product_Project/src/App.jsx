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

export default function App() {

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

