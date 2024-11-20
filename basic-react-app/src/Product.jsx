import "./Product.css"
function Product(props){
    return(
       <div className="mainDiv">
            <div className="imgDiv">
                <img src={props.img}></img>
            </div>
            <div>
            <h2>{props.title}</h2>
            <p>Product description</p>
            </div>
       </div>
    );
}
export default Product;