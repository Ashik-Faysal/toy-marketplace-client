import React, { useEffect, useState } from "react";
import Card from "./Card";

const PhotoGallery = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("https://toy-world-server-ashik-faysal.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setToys(data); // Store the fetched data in state
      });
  }, []);
  return (
    <div className="my-8" data-aos="fade-up">
      <h1 className="text-5xl my-3 text-center font-bold text-stone-500">
        Toys Gallery
      </h1>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 shadow-2xl bg-stone-200 my-8">
        {toys.map((toy) => (
          <Card key={toy._id} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
