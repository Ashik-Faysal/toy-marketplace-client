import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const UpdateAToys = ({handleUpdate}) => {
    const {user}= useContext(AuthContext)
    return (
      <div>
        <h2 className="text-5xl font-bold text-stone-500 text-center p-4">
          Update A Toy
        </h2>
            <form
                // onSubmit={handleAddToys}
            >
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
            <input onClick={handleUpdate}
              className="btn btn-primary btn-block"
              type="submit"
              value="Update Toys"
            />
          </div>
          {/* <ToastContainer /> */}
        </form>
      </div>
    );
};

export default UpdateAToys;