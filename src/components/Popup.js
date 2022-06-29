import React from 'react'
import { useShoppingCartContext } from '../context/ShoppingCartContext'
import './popup.css'
import PopupCard from './PopupCard'
import { currency } from '../utilities/currency'

function Popup(props) {
    const { setOpen } = props
    const { cartItems } = useShoppingCartContext()
    
    const card = cartItems.map(item => <PopupCard {...item}/>)   //rendering popup cards
    const totalCost = cartItems.reduce((cost, item) => item.cost * item.quantity + cost, 0)    //total cost of all items

    /* render blur when popup (only the home page) */
    const {page} = props
    function toggle(){
      if(page === 1){
        let x = document.getElementById('container')
        x.classList.remove('active')
      }
      setOpen( prev => !prev )
    }

  return (
    <div className='popup--container'>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', margin: '14px 20px'}}>
        <img style={{height: '30px'}} src='/images/cart.png' alt='cart'/>
        <h3 style={{marginRight: 'auto'}}>My Shopping Cart</h3>
        <button className='close' onClick={toggle}> x </button>
      </div>
        <div className='popup--card--container'>
            {card.length === 0 ? <p style={{margin: '20px'}}>Your cart is empty! </p> : card}
        </div>
            {card.length === 0 ? " " :
            <div>
                <hr style={{width: '90%', marginLeft: 'auto', marginRight: 'auto'}}/>
                <div style={{marginLeft: '21rem', marginTop: '13px'}}>
                    <span style={{fontWeight: 'bold'}}>Total: &nbsp; {currency(totalCost)}</span>
                </div>
        </div>
        }
    </div>
  )
}

export default Popup