import React from 'react'
import Data from '../data';
import {  } from 'react-bootstrap'
import InventoryCard from '../components/InventoryCard'

function Inventory() {
    return (
        <section className="inventory-section mt-5 text-center p-2">
                { Data.map((car) => {
                    return  (
                        <div className="container">
                               <InventoryCard car={car} key={car.id}/>
                        </div>
                    )
                 
                })}
        </section>
    )
}

export default Inventory
