import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const AddToys = () => {
  const { user } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleAddToys = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.sellerName.value;
    const toyName = form.toyName.value;
    const photoUrl = form.photoUrl.value;
    const email = user?.email;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const ratings = form.ratings.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const adding = {
      sellerName: name,
      toyName,
      photoUrl,
      email,
      subCategory,
      price,
      ratings,
      quantity,
      description,
    };

    console.log(adding);

    fetch("https://toy-world-server-ashik-faysal.vercel.app/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(adding),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add toys");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // Perform further operations if needed
        toast.success("Toys added successfully!");
        form.reset(); 

      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage("Failed to add toys. Please try again.");
          toast.error("Failed to add toys. Please try again.");

      });
  };
  return (
    <div>
      <h2 className="text-5xl font-bold text-stone-500 text-center p-4">Add A Toy</h2>
      <form onSubmit={handleAddToys}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              name="sellerName"
              defaultValue={user?.displayName}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>
            <input
              type="text"
              name="toyName"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              name="photoUrl"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">SubCategory</span>
            </label>
            <input
              type="text"
              name="subCategory"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Ratings</span>
            </label>
            <input
              type="number"
              name="ratings"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="number"
              name="quantity"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              name="description"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Add Toys"
          />
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default AddToys;
