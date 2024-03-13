import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaginationComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [products, setProducts] = useState([]);

  const fetchProducts = async (page) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/products?page=${page}&pageSize=10`);
      console.log(response.data)
      const { products, totalPages } = response.data;
      setProducts(products);
      setTotalPages(totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage- 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      {/* Display the products */}
      {products.map((product) => (
        <div key={product.id}> 
        <h1>user:{product.id}</h1>
        <p>{product.body}</p>
        <p>{product.title}</p>

        </div>

      ))}

      {/* Pagination controls */}
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Previous Page
      </button>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next Page
      </button>
    </div>
  );
};

export default PaginationComponent;