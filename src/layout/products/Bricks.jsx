import { useEffect, useState } from "react";

const Bricks = () => {
  const [bricks, setBricks] = useState([]);

  const Bricks = bricks.filter((brick) => brick.category === "bricks");

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setBricks(data));
  }, []);

  console.log(bricks);
  return (
    <div>
      <div className="p-8">
        <div className="flex justify-center">
          <h2 className="text-3xl font-bold mb-6">Bricks</h2>
        </div>
        <div className="container mx-auto w-full">
          <div className="grid container grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Bricks.map((brick) => (
              <div
                key={brick._id}
                className="bg-white shadow-lg rounded-lg p-4"
              >
                <img
                  src={brick.image}
                  alt={brick.brand}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold  mb-2">{brick.brand}</h3>
                <p className="text-gray-700 font-semibold">
                  Price: {brick.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bricks;
