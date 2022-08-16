import React, { useState } from 'react'
import Pagination from 'react-bootstrap/Pagination';
import InventoryCard from './InventoryCard';



function PaginationComp({data, postsPerPage, totalPosts, handlePageClick, prevPage, nextPage}) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }


  return (
    <Pagination>
      <Pagination.Prev onClick={() => prevPage()} />

      <Pagination.Ellipsis />

        {pageNumbers.map(num =>  <Pagination.Item key={num} onClick={() => handlePageClick(num)}>{num}</Pagination.Item> )}

      <Pagination.Ellipsis />
      <Pagination.Next onClick={() => nextPage()} />
    </Pagination>
  );
}

export default PaginationComp;