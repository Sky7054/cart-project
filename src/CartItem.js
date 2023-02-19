import React from "react";
import "./index.css";

const CartItem =(props) => {
        const {price,title,qty} = props.product;
        const {
          product,
          onIncreaseQuantity,
          onDecreaseQuantity,
          onDeleteProduct} = props;

    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image}  src ={product.img} />
        </div>
        <div className="right-block">
          <div style ={{fontSize:25}}>{title}</div>
          <div style={{color:'#777'}}>Rs {price}</div>
          <div style={{color:'#777'}}>Qty {qty}</div>
          <div className="cart-item-actions">
            {/* button */}
            <img
             alt="increase" className="action-icon" 
             src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png" 
             onClick={()=> onIncreaseQuantity(product)}>

             </img>
            <img
             alt="decrease" className="action-icon" 
             src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
             onClick= {()=>onDecreaseQuantity(product)}>
              
             </img>
            <img 
            alt="delete" className="action-icon" 
            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png"
            onClick={()=> onDeleteProduct(product.id)}>

            </img>
            </div>
        </div>
      </div>
    );
}

const styles = {
  image: {
    height: 110,
    width: 110,
    marginRight:20,
    borderRadius: 4,
    background:'#ccc',
  },
};

export default CartItem;
