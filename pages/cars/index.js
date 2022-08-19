import React, { useState , useEffect } from 'react'
import Data from '../../data';
import Inventory from "../../components/Inventory"

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
      <>
        <section className="inventory-section d-flex flex-column justify-content-center align-items-center">

          <h2 className='mt-5 fw-bold fs-2'>Our Inventory:</h2>
          <p>Note: Please call ahead to ensure availability of vehicle.</p>
          <Inventory 
          data={currentPosts}
          postsPerPage={postsPerPage}
          totalPosts={data.length}
          handlePageClick={handlePageClick}
          prevPage = {prevPage}
          nextPage = {nextPage}
          />
        </section>
        <section className="secondary-section p-xl-5 pt-5 pb-5">
            <div className="info-panel p-5 d-flex gap-3">
              <i className="hide-icon d-xl-flex fa-solid fa-truck fa-4x"></i>
              <div className='p-2'>
                <h2 className='fw-bold fs-1'>Monthly Inventory Refresh!</h2>
                <p className="info-text">We are constantly refreshing our inventory for our customers. Skyline Imports has developed an excellent relationship with our global suppliers. Special request can be made to our communications team. Please contact us at (123)-456-7890 or send us an email at skylineimports@gmail.com to learn more about this feature!</p>
              </div>
            </div>
            <div className="info-panel p-5 d-flex mt-5 gap-3">
              <i className="hide-icon d-xl-flex fa-solid fa-cart-plus fa-4x"></i>
              <div className='p-2'>
                <h2 className='fw-bold fs-1'>Specialized Requests</h2>
                <p className="info-text">We are constantly refreshing our inventory for our customers. Skyline Imports has developed an excellent relationship with our global suppliers. Special request can be made to our communications team. Please contact us at (123)-456-7890 or send us an email at skylineimports@gmail.com to learn more about this feature!</p>
              </div>
            </div>
        </section>
      </>
    );
      
}
 
export default Cars;
