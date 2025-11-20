export default function Product(props) {
    return(

            <div className="product-card">
                <img src={props.image} alt={props.alt}width="150px" className="product-img" />
                <p className="product-type">{props.type}</p>
                <h4 className="product-title">{props.name} </h4>
                <p>⭐{props.reviewCount}</p>
                <p className="product-newprice">{props.newPrice } </p>
                <span className="product-oldprice"><strike>{props.oldPrice}</strike></span>
            </div> 
     
    )
}

