// import "./Product.css"
function Product({name,img1,price}){
    return(
        <>
            <div className="mainDiv">
                <div className="innerDiv1">
                    <img src={img1} alt="img"></img>
                    <h3>{name}</h3>
                </div>
                <div className="innerDiv2">
                    <h3>{price} AUD</h3>
                </div>
                <div className="innerDiv3">
                    <h4>Add To Cart</h4>
                    <h4>Make Offer</h4>
                </div>
            </div>
        </>
    );
}
export default Product;