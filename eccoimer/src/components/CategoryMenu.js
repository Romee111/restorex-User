import React from 'react';
import { useProducts } from '../hooks/useProducts';
const categories = [
  'Foundations', 'T-Shirts', 'Jeans Pants', 'Medicare Bottles', 'Perfumes', 'Skincare',
  // Add more categories as needed
];

const CategoryMenu = () => {
  const { products, loading } = useProducts();
  if (loading) {
    return <p>Loading products...</p>; // Loading message while waiting for the API
  }
  console.log(products,"value")
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6">Categories</h2>
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
      {/* {products.map(product => (
          <ProductCard
            key={product._id} // Unique identifier for each product
            title={product.name} // Product name
            price={product.price} // Product price
            image={product.images} // Product image URL
            description={product.description}
            stock={product.instock}
            id={product._id}
          />
        ))} */}
         {products.map((product, index) => (
          <div key={index} className="text-center">
            <div className="icon bg-gray-100 p-4 rounded-lg shadow-md">
              <img src={`https://via.placeholder.com/50`} alt="category" />
            </div>
            {/* Access the category name correctly */}
            <p className="mt-2 text-sm">{product?.category_id?.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryMenu;
