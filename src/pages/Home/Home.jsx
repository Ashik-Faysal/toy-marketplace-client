import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "./Slider";
import SubCategory from "./SubCategory";
import PhotoGallery from "./PhotoGallery";
import MyFristSection from "./MyFristSection";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Slider />
      <PhotoGallery />
      <SubCategory />
      <MyFristSection/>
    </>
  );
};

export default Home;
