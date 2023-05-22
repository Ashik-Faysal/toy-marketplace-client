import React from "react";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  const { _id, seller, toyName, subCategory, price, availableQuantity, image } =
    toy;
  console.log(toy);
  // Define the handleShowDetails function
  const handleShowDetails = (id) => {
    console.log(id);
  };
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" className="rounded-xl w-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{toyName}</h2>
        <p>Seller: {seller}</p>
        <p>Price: {price}</p>
        <p>Available Quantity: {availableQuantity}</p>
        <div className="card-actions">
          <Link to={`/toys/${_id}`}>
            <button
              onClick={() => handleShowDetails(_id)}
              className="btn btn-primary"
            >
              Show details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
