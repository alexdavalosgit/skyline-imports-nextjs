import React, { useState , useEffect } from 'react'
import Data from '../../data';
import Inventory from "../../components/Inventory"
import { Container } from "react-bootstrap"
import InventoryCard from '../../components/InventoryCard';

const Cars = () => {

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(4);

   
    useEffect(() => {
        fetchData();
    }, []);

    function fetchData() {
        setData(Data);
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)
    

    const handlePageClick = pageNum => setCurrentPage(pageNum);

    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);

    return (
      <div className="mt-5 text-center">
          
        <h2>Our Inventory:</h2>
        <p>Note: Please call ahead to ensure availability of vehicle.</p>
        <Inventory 
        data={currentPosts}
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        handlePageClick={handlePageClick}
        prevPage = {prevPage}
        nextPage = {nextPage} />
       

      </div>

    );
      
}
 
export default Cars;
