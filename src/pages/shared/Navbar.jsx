import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((error) => console.log(error));
  };

  return (
    <div className="navbar bg-stone-400 p-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Blog
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-3xl font-extrabold">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRveXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <span className="text-rose-300">Toy</span> &nbsp;
          <span className="text-stone-600">World</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="btn btn-outline">
              Home
            </Link>
          </li>
          <li tabIndex={0}>
            <Link to="/blog" className="btn btn-outline mx-4">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about" className="btn btn-outline">
              About
            </Link>
          </li>
        </ul>
      </div>
      <div className="md:ml-4 flex gap-2 navbar-end">
        {user ? (
          <>
            <Link>
              <button className="btn btn-outline">Add A Toy</button>
            </Link>
            <Link>
              <button className="btn btn-outline">My Toys</button>
            </Link>
            <img
              className="w-12 h-12 rounded-full"
              src={user.photoURL}
              alt=""
            />
            <button
              onClick={handleLogOut}
              className="btn btn-warning ml-4 md:ml-0 mt-4 md:mt-0"
            >
              Sign Out
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-warning">Sign In</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
