import { useEffect, useState } from "react";

const Irons = () => {
    const [irons, setIrons] = useState([]);

  const Irons = irons.filter((iron) => iron.category === "iron");

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setIrons(data));
  }, []);

    return (
        <div>
            <div className="p-8">
      <div className="flex justify-center">
        <h2 className="text-3xl font-bold mb-6">Irons</h2>
      </div>
     <div className="container mx-auto w-full">
     <div className="grid container grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Irons.map((iron) => (
          <div key={iron._id} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src={iron.image}
              alt={iron.brand}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold  mb-2">{iron.brand}</h3>
            <p className="text-gray-700 font-semibold">
              Price: {iron.price}
            </p>
          </div>
        ))}
      </div>
     </div>
    
    </div>
        </div>
    );
};

export default Irons;