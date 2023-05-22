import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const SubCategory = () => {
  return (
    <div data-aos="fade-up">
      <h2 className="text-6xl font-extrabold text-stone-500 text-center my-4">
        Search by Category
      </h2>
      <Tabs>
        <TabList>
          <Tab>FootBall</Tab>
          <Tab>Cricket</Tab>
          <Tab>Other Sports toys</Tab>
        </TabList>

        <TabPanel>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card lg:card-side bg-stone-200 shadow-xl p-4">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vdGJhbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Album"
                />
              </figure>
              <div className=" mx-auto">
                <h2 className="card-title">New Ucl Football</h2>
                <p className="my-4">Price: 51$ </p>
                <button className="btn btn-primary">Show Details</button>
              </div>
            </div>
            <div className="card lg:card-side bg-stone-200 shadow-xl p-4">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1552318965-6e6be7484ada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb3RiYWxsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt="Album"
                />
              </figure>
              <div className=" mx-auto">
                <h2 className="card-title">FIFA world cup ball</h2>
                <p className="my-4">Price: 43.5$ </p>
                <button className="btn btn-primary">Show Details</button>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card lg:card-side bg-stone-200 shadow-xl p-4">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1624897174291-1bd715e371d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q3JpY2tldCUyMGJhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Album"
                />
              </figure>
              <div className=" mx-auto">
                <h2 className="card-title">Cricket Stamps</h2>
                <p className="my-4">Price: 29$ </p>
                <button className="btn btn-primary">Show Details</button>
              </div>
            </div>
            <div className="card lg:card-side bg-stone-200 shadow-xl p-4">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1629285483773-6b5cde2171d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q3JpY2tldCUyMGJhbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Album"
                />
              </figure>
              <div className=" mx-auto">
                <h2 className="card-title">TEst cricket Ball</h2>
                <p className="my-4">Price: 12.5$ </p>
                <button className="btn btn-primary">Show Details</button>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card lg:card-side bg-stone-200 shadow-xl p-4">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1534146789009-76ed5060ec70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3ljbGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Album"
                />
              </figure>
              <div className=" mx-auto">
                <h2 className="card-title">Sport Cycle</h2>
                <p className="my-4">Price: 150$ </p>
                <button className="btn btn-primary">Show Details</button>
              </div>
            </div>
            <div className="card lg:card-side bg-stone-200 shadow-xl p-4">
              <figure>
                <img
                  src="https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFza2V0YmFsbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="Album"
                />
              </figure>
              <div className=" mx-auto">
                <h2 className="card-title">Basket Ball</h2>
                <p className="my-4">Price: 25$ </p>
                <button className="btn btn-primary">Show Details</button>
              </div>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default SubCategory;
