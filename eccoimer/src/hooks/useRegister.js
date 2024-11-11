import { useState } from 'react';
import axios from 'axios';

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const register = async (data) => {
    setLoading(true);
    setError(null);
    try {
      data.image = "1.png"; // Default image for now
      const response = await axios.post(`http://localhost:2900/userauth/register`, data);
      console.log(response.data);
      
      localStorage.setItem('user', JSON.stringify(response.data));
      
      return response.data;
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error };
};
