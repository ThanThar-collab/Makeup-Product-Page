import { useState, useEffect } from "react"

export default function Product(props) {
    const [badge, setbadge] = useState('Sales')

    useEffect(() => {
    setTimeout(() => {
      setbadge('Buy Now')
    }, 5000);
    });

    // console.log(props)
    return(
            <div className="product-card">
                {props.oldPrice > props.newPrice && (
                 <span className="product-badge">{badge}</span>
                )}
                {/* {
                    props.oldPrice > props.newPrice
                ? <span className="product-badge">{badge}</span> : null
                } */}
                <p style={{ display: "none" }}>{props.id}</p>
                
                <img src={props.image} alt={props.alt} width="150px" className="product-img" />
                <p className="product-type">{props.type}</p>
                <h4 className="product-title">{props.name} </h4>
                <p>⭐{props.reviewCount}</p>
                <p className="product-newprice">{props.newPrice} </p>
                <span className="product-oldprice"><strike>{props.oldPrice}</strike></span>
            </div> 
    )
}


