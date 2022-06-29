import React from "react"
import Card from "../components/Card"
import {Navbar} from "../components/Navbar"
import storeItems from "../components/data"
import Footer from "../components/Footer"

export default function Store(){
    const page = 1
    return(
        <div>
        <Navbar page = {page} />
        <div className='card-container' id='container'>
        { storeItems.map( item => <Card key={item.id} {...item}/> )}  
        </div>                                        
        <Footer />
        </div>                          //{...item} = url={item.url} name={item.name} cost={item.cost} id={item.id}
    )
  }