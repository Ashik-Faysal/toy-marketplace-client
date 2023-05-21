import React from "react";
import { Link } from "react-router-dom";

const TableData = ({ updateData, handleDelete, handleUpdate }) => {

  return (
    <>
      {/* row 3 */}
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={updateData?.image}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{updateData?.seller}</div>
            </div>
          </div>
        </td>
        <td>{updateData?.toyName}</td>
        <td>{updateData?.price}</td>
        <td>{updateData?.rating}</td>
        <td>{updateData?.availableQuantity}</td>
        <th>
          <Link to="/updateAToys">
            <button
              onClick={() => handleUpdate(updateData?._id)}
              className="btn btn-ghost btn-xs"
            >
              Update
            </button>
          </Link>
        </th>
        <th>
          <button
            onClick={() => handleDelete(updateData?._id)}
            className="btn btn-ghost btn-xs"
          >
            Delete
          </button>
        </th>
      </tr>
    </>
  );
};

export default TableData;
