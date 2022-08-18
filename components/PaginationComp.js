import React, { useState } from 'react'
import Pagination from 'react-bootstrap/Pagination';




function PaginationComp({ postsPerPage, totalPosts, handlePageClick, prevPage, nextPage}) { 

  const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

  return (
    <Pagination className="mt-5">
      <Pagination.Prev onClick={() => prevPage()} />

        {
        pageNumbers.map(num =>  <Pagination.Item key={num} onClick={() => handlePageClick(num)}> {num} </Pagination.Item>)
        }
        
        

      <Pagination.Next onClick={() => nextPage()} />
    </Pagination>
  );
}

export default PaginationComp;