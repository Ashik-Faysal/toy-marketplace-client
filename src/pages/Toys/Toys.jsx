import React, { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

const Toys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://toy-world-server-ashik-faysal.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data); // Store the fetched data in state
      });
  }, []);
  return (
    <div className="my-8">
      <h1 className="text-5xl my-3 text-center font-bold text-stone-500">Toy Jone</h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 shadow-2xl bg-stone-200 my-8">
        {toys.map((toy) => (
          <ToyCard key={toy._id} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default Toys;
