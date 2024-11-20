import "./ArrayR.css";
function Product({title,price}){
    // let dis=price> 30000 ? "discount of 5%":"" ;
    return(
        <div className="mainDiv">
            <h3>{title}</h3>
           <p>{price}</p>
            {/* <p>{dis}</p> */}
            {price>30000?<p>Discount of 5%</p>:null}
        </div>
    );
}
export default Product;