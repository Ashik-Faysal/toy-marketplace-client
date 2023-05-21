import React from "react";

const UpdatingRow = ({ updateData, handleDelete, handleBookingConfirm }) => {
  const { _id, seller, image, toyName, price, rating, availableQuantity } =
    updateData;

  const handleDeleteClick = () => {
    handleDelete(_id);
  };

  const handleConfirmClick = () => {
    handleBookingConfirm(_id);
  };

  return (
    <>
      {" "}
      <td>
        {image ? (
          <div className="avatar">
            <div className="rounded w-24 h-24">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        ) : null}
      </td>
      <td>{seller}</td>
      <td>{toyName}</td>
      <td>{price}</td>
      <td>{rating}</td>
      <td>{availableQuantity}</td>
      <td>
        <button onClick={handleUpdate} className="update-button">
          Update
        </button>
      </td>
      <td>
        <button onClick={handleDeleteClick} className="delete-button">
          Delete
        </button>
      </td>
    </>
  );
};

export default UpdatingRow;
