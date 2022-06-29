import React from 'react'
import { useShoppingCartContext } from '../context/ShoppingCartContext'
import { currency } from '../utilities/currency'

function PopupCard(props) {
    const { id, name, url, quantity, cost} = props
    const { totalCostOfAnItem, removeCart } = useShoppingCartContext()
    const tcostItem = totalCostOfAnItem(id)
    
  return (
    <div>
        <div className='popup--card'>
            <img className='popup--img' src={url} alt={name} /> 
            <div className='popup--cost--quantity'>
                <span style={{ fontWeight: 'bold' }}> &nbsp;  X  &nbsp; {quantity} </span>
                <span className='popup--cost'>{currency(cost)}</span>
            </div>
            <div style={{marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '15px'}}>
                <div>
                    <span style={{fontWeight: 'bold'}}>{currency(tcostItem)} </span>
                </div>
                <button className='remove--button' onClick={() => removeCart(id)}>Remove</button>
            </div>
        </div>
        <div className='popup--name' style={{width: '70px', textAlign: 'center', fontWeight: 'bold', fontSize: '0.92rem'}}>
        {name}
        </div>
    </div>
  )
}

export default PopupCard