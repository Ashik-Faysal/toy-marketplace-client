import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import TableData from "./TableData";

const UpdatingToys = () => {
  const [updating, setUpdating] = useState([]);
  const { user } = useContext(AuthContext);
  
  const url = `https://toy-world-server-ashik-faysal.vercel.app/toys?email=${user?.email}`;
  useEffect(() => {
    fetch(url).then(res=>res.json()).then(data=>setUpdating(data));
  },[])


  const handleUpdate = (id) => {
    fetch(
      `https://toy-world-server-ashik-faysal.vercel.app/toys/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status: "confirm" }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update state
          const remaining = updating.filter((update) => update._id !== id);
          const updated = updating.find((update) => update._id === id);
          updated.status = "confirm";
          const newUpdate = [updated, ...remaining];
          setUpdating(newUpdate);
        }
      });
  };
console.log(updating);
  const handleDelete = (id) => {
    const proceed = confirm("Are You sure you want to delete");
    if (proceed) {
      fetch(`https://toy-world-server-ashik-faysal.vercel.app/toys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successful");
            const remaining = updating.filter((update) => update._id !== id);
            setUpdating(remaining);
          }
        });
    }
  };

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table"> 
      {/* head */}
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Seller Name</th>
          <th>Price</th>
          <th>Ratings</th>
          <th>Available Quantity</th>
          <th>Action</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {updating.map((updateData) => (
          <TableData updateData={updateData} key={updateData._id}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))}
      </tbody>
      </table>
      </div> 
    </div>
  );
};

export default UpdatingToys;
