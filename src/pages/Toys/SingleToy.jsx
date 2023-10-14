import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
  const toys = useLoaderData();
  console.log(toys);

  return (
    <div className="card w-96 bg-gradient-to-tr from-teal-600 via-cyan-700 to-blue-800 shadow-2xl p-8 m-8">
      <figure>
        <img src={toys.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {toys.toyName}</h2>
        <p>Seller Name: {toys.seller}</p>
        <p>Price: {toys.price}</p>
        <p>SubCategory: {toys.subCategory}</p>
        <p>Description: {toys.description}</p>
      </div>
    </div>
  );
};

export default SingleToy;
