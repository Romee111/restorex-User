import { useState } from 'react';
import axios from 'axios';

export const useSearchProducts = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const getSearch = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:2900/product/searchProduct/${query}`);
      const data = response.data.data;
      setSearchResults(data); // Set the search results to state
    } catch (err) {
      console.log('Error fetching search results:', err);
    } finally {
      setLoading(false);
    }
  };

  const getSuggestions = async (query) => {
    try {
      const response = await axios.get(`http://localhost:2900/product/searchProduct/${query}`);
      const data = response.data.data;
      setSuggestions(data.slice(0, 4)); // Get the first 5 suggestions
    } catch (err) {
      console.log('Error fetching suggestions:', err);
    }
  };

  return { searchResults, suggestions, loading, getSearch, getSuggestions };
};
