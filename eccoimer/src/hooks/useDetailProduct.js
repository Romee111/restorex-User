import { useState } from 'react';
import axios from 'axios';

export const useDetailProduct = () => {
  const [productDetail, setProductDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getDetailProduct = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:2900/product/getProduct/${id}`);
      const data = response.data;
      setProductDetail(data); // Store product detail in state
      setError(null); // Clear any errors
    } catch (err) {
      console.error('Error fetching product details:', err);
      setError('Failed to fetch product details');
    } finally {
      setLoading(false);
    }
  };

  return { productDetail, loading, error, getDetailProduct };
};
