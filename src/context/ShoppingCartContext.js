import React, {createContext, useContext} from "react";

const ShoppingCartContext = createContext({})

export function useShoppingCartContext(){
    return useContext(ShoppingCartContext)
}

export function ShoppingCartContextProvider( {children} ){
    const [cartItems, setCartItems] = React.useState([])        //initialize array that will contain objects
        
    function getItemQuantity(id){                                  //no of quantities of a specific id
        return cartItems.find(item => item.id === id)?.quantity || 0
    }
    function increaseCartQuantity(id,name,url,cost){                       
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id) == null){  //set new object {id, quantity}
                return [...currItems, {id, name, url, cost, quantity: 1}]
            }
            else{
                return currItems.map(item => {                  //map will return new array
                    if(item.id === id){
                        return {...item, quantity: item.quantity + 1}    //increment quantity
                    } else {
                        return item
                    }
                })
            }
        })
    }
    function decreaseCartQuantity(id){
        setCartItems(currItems => {
           if(currItems.find(item => item.id === id)?.quantity === 1){  //check if quantity == 1 of the item we found
             return currItems.filter(item => item.id !== id)
           } else {
           return currItems.map(item => {
                if(item.id === id){
                    return {...item, quantity: item.quantity - 1}
                } else {
                    return item
                }
            })
           }
        })
    }
    const totalCartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)  //total no of items

    function totalCostOfAnItem( id ){
        let tempArray = cartItems.filter(item => item.id === id)
        return tempArray.reduce((cost ,item) => item.cost * item.quantity + cost, 0)
    }
    
    function removeCart( id ){
        setCartItems(currItems => currItems.filter(item => item.id !== id))
    }

    return(
        <ShoppingCartContext.Provider value = {
            { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, totalCartQuantity,
              cartItems, totalCostOfAnItem, removeCart }
            }>
                {children}
        </ShoppingCartContext.Provider>
    )
}