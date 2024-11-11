import { useState, useEffect } from 'react';
import axios from 'axios';

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/products/getProducts');
      console.log(response.data);
      
      const data = response.data?.data.slice(0, 20); // Get the first 12 products
      setProducts(data);
    } catch (err) {
      console.log('Error fetching products:', err);
    } finally {
      setLoading(false); // Whether success or failure, stop loading
    }
  };

  useEffect(() => {
    getProducts(); // Call API when the component mounts
  }, []);

  return { products, loading };
}
