import React from "react";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { currency } from "../utilities/currency";

export default function Card(props){
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity} = useShoppingCartContext()
    const { id, name, url, cost } = props
    const quantity = getItemQuantity(id)
    
    return (
        <div className="card">
            <img className="images" src={url} alt={name} variant = "top" height="150px" />
            <div className="card--title">
                   <span style= {{ fontWeight : 'bold', fontSize: '1.25rem' }}> {name} </span> 
                   <span style={{ margin: "0 10px", fontSize: '1.09rem'}}> {currency(cost)} </span>
            </div>
        <div className="add--container">
           {quantity === 0 ? <button className="cart--add--button" onClick={() => increaseCartQuantity(id,name,url,cost)}>+ Add to Cart</button>
          :( <>
            <div className = "cart--plus">
                <button className = "cart--button cart--button-minus" onClick={() => decreaseCartQuantity(id)}>-</button>
            
                    <div style={{ width: '4.5rem', textAlign: 'center'}}>
                    <span style={{fontWeight: 'bold', fontSize: "0.94rem"}}> {quantity} </span>
                    <span style={{fontSize: '0.88rem'}}>&nbsp;in cart</span>
                    </div>
                    
                <button className="cart--button" onClick={ () => increaseCartQuantity(id)}>+</button>
             </div> 
             <div style={{fontSize: "0.92rem", textAlign: "center", marginTop: '10px'}}>Quantity</div>
             </> )
           }
           </div>
        </div>
    )
}