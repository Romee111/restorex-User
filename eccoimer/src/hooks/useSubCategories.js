import axios from "axios";
import { useCallback } from 'react';
export function useSubCategories() {
    const getsubCat = async ( ) =>{
        try{
            const response = await axios.get(`http://localhost:2900/subcategory/getAllSub`);
             console.log(response.data);         
            const data=response.data
             console.log(data);

            return data;

        }

        
        catch(err){
            console.log(err);

        }

    };
    
    const listSubCategories = useCallback(async (category_id) => {
        try {
          const response = await axios.get(`http://localhost:2900/subcategory/getallsubCategory/${category_id}`);
          const data = response.data;
          console.log(data);
          return data;
        } catch (err) {
          console.log(err);
        }
      }, []); 
    return { getsubCat,listSubCategories };
}