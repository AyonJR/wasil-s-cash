import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const Form = () => {
  const { id } = useParams();
  const [brick, setBrick] = useState(null);
  const [quantity, setQuantity] = useState();
  const [rate, setRate] = useState();
  const [laborCost, setLaborCost] = useState();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [memo, setMemo] = useState("");
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setBrick(data));
  }, [id]);

  useEffect(() => {
    setTotalCost(quantity * rate + laborCost);
  }, [quantity, rate, laborCost]);

  if (!brick) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="flex justify-center">
      <div className="p-8 w-1/2">
        <h2 className="text-2xl font-bold mb-4">
          Purchase Form for {brick.brand}
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block font-semibold">Quantity</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border p-2 w-full"
            />
          </div>

          <div>
            <label className="block font-semibold">Rate</label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="border p-2 w-full"
            />
          </div>

          <div>
            <label className="block font-semibold">Labor Cost</label>
            <input
              type="number"
              value={laborCost}
              onChange={(e) => setLaborCost(Number(e.target.value))}
              className="border p-2 w-full"
            />
          </div>

          <div>
            <label className="block font-semibold">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 w-full"
            />
          </div>

          <div>
            <label className="block font-semibold">Address</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border p-2 w-full"
            />
          </div>

          <div>
            <label className="block font-semibold">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border p-2 w-full"
            />
          </div>

          <div>
            <label className="block font-semibold">Memo</label>
            <textarea
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
              className="border p-2 w-full"
            />
          </div>

          <div>
            <label className="block font-semibold">Total Cost</label>
            <input
              type="text"
              value={totalCost}
              readOnly
              className="border p-2 w-full bg-gray-200"
            />
          </div>

          <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Submit Order
          </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Form;
