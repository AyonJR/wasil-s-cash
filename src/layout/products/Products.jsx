import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Use for navigation
import Irons from "./Irons";
import Bricks from "./Bricks";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); 

  // Filter for cement category
  const cements = products.filter((product) => product.category === "cement");

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleNavigateToForm = (productId) => {
    navigate(`/form/${productId}`); 
  };

  return (
    <div className="p-8">
      <div className="flex justify-center">
        <h2 className="text-3xl font-bold mb-6">Cements</h2>
      </div>
      <div className="container mx-auto w-full">
        <div className="grid container grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cements.map((cement) => (
            <div
              key={cement._id}
              className="bg-white shadow-lg rounded-lg p-4"
              onClick={() => handleNavigateToForm(cement._id)} // Trigger navigation on click
            >
              <img
                src={cement.image}
                alt={cement.brand}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{cement.brand}</h3>
              <p className="text-gray-700 font-semibold">Price: {cement.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <Irons />
      </div>
      <div className="mt-8">
        <Bricks />
      </div>
    </div>
  );
};

export default Products;
