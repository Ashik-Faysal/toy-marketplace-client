import React from "react";

const ToyCard = ({ toy }) => {
  const {_id, seller, toyName, subCategory, price, availableQuantity, image } = toy;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{toyName}</h2>
        <p>Seller: {seller}</p>
        <p>Price: {price}</p>
        <p>Available Quantity: {availableQuantity}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Show details</button>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
