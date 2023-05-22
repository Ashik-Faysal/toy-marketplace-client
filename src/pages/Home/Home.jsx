import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "./Slider";
import SubCategory from "./SubCategory";
import PhotoGallery from "./PhotoGallery";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Slider />
      <PhotoGallery />
      <SubCategory />
    </>
  );
};

export default Home;
