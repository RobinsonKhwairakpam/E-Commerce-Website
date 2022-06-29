import React from 'react'
import Popup  from './Popup'
import { Link } from 'react-router-dom'
import { useShoppingCartContext } from '../context/ShoppingCartContext'

export function Navbar(props){
    const { totalCartQuantity } = useShoppingCartContext()
    const [open, setOpen] = React.useState(false)

    /* render blur if home page*/
    const { page } = props
    function toggle(){
        if(page === 1){
            let x = document.getElementById('container')
            x.classList.add('active')
        }
        setOpen(prev => !prev)
    }
    /* toggleBars */
    function toggleButton(){
        let navBarLinks = document.getElementsByClassName("nav--list")[0]
        navBarLinks.classList.toggle("active")
    }

    return(
        <div>
        <div className='nav'>
            <label className='header' style={{marginLeft :"30px"}}>E-Commerce</label>

            {/* toggle button of bars for responsive */}
            <a href="#toggle" className='toggle--button' onClick={toggleButton}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </a>
            
            <ul className='nav--list'>
                <li>
                  <Link className='links' to = "/">Home</Link>
                </li>
                <li>
                 <Link className='links' to = "/about">About</Link>
                </li>
                <li>
                 <Link className='links' to = "/contact">Contact</Link>
                </li>
                <li>
                <button className='cart-button' style={{width: "2.5rem", height: "2.5rem", marginTop : "23px",
                         border:"none", borderRadius : "20px", position : "relative"}} 
                         onClick={toggle}       
                                >
                <svg className='cart' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
                <div className='cart--number'>{totalCartQuantity}</div>
                </button>
                
                </li>
            </ul>
            </div>
        <div>
        
            {open && <Popup open={open} setOpen={setOpen} page={page} />}
        </div>
        
        </div>
        
    )
}