
import {  } from 'react-bootstrap'
import InventoryCard from '../components/InventoryCard'
import PaginationComp from './PaginationComp';

function Inventory({ data, postsPerPage, totalPosts, handlePageClick, prevPage, nextPage }) {

    return (
        <section className="mt-5 inventory-container">
            <div className='inventory-section p-2'>
                { data.map((car) => {
                        return  (
                            <div>
                                <InventoryCard car={car} key={car.id}/>
                            </div>
                        )

                    })}
            </div>
                <PaginationComp 
                    data={data} 
                    postsPerPage = {postsPerPage}
                    totalPosts = {totalPosts}
                    handlePageClick = {handlePageClick}
                    prevPage = {prevPage}
                    nextPage = {nextPage} 
                    
                    />
        </section>
    )
}

export default Inventory
