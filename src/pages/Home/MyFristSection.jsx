import React from 'react';

const MyFristSection = () => {
  return (
    <>
      <h2 className="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 text-center font-bold my-8 p-4">
        Scroll Down and show exiting Toys
      </h2>
      <div className="h-96 carousel carousel-vertical rounded-box my-8">
        <div className="carousel-item h-full">
          <img src="https://images.unsplash.com/photo-1575881737088-a5a2bbf44e85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG95cyUyMGtpZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
        </div>
        <div className="carousel-item h-full">
          <img src="https://images.unsplash.com/photo-1573297663823-b4d453566b32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRveXMlMjBraWRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
        </div>
        <div className="carousel-item h-full">
          <img src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRveXMlMjBraWRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
        </div>
        <div className="carousel-item h-full">
          <img src="https://images.unsplash.com/photo-1517881837958-1c0d1819dbd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRveXMlMjBraWRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
        </div>
        <div className="carousel-item h-full">
          <img src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG95cyUyMGtpZHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
        </div>
        <div className="carousel-item h-full">
          <img src="https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        </div>
        <div className="carousel-item h-full">
          <img src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        </div>
      </div>
    </>
  );
};

export default MyFristSection;