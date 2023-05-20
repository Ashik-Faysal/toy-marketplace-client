import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
  const toys = useLoaderData();
  console.log(toys);

  return (
    <div className="card w-96 bg-stone-400 shadow-2xl p-8 m-8">
      <figure>
        <img src={toys.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {toys.toyName}</h2>
        <p>Seller Name: {toys.seller}</p>
        <p>Price: {toys.price}</p>
        <p>SubCategory: {toys.subCategory}</p>
        <p> Description: 
          The Cuddle Buddies Baby Toy is the perfect companion for your little
          one. This adorable plush toy is designed with the utmost care and
          attention to provide a safe and stimulating play experience for
          babies.
        </p>
      </div>
    </div>
  );
};

export default SingleToy;
