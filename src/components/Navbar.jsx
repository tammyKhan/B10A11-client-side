import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
  const { user, handleLogout } = useContext(AuthContext);

  const links = (
    <>
      
      <li>
      <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-red-700 font-medium"
                : "text-black hover:text-red-300"
            }
          >
            Home
          </NavLink>
      </li>
      <li>
      <NavLink
            to="/available-foods"
            className={({ isActive }) =>
              isActive
                ? "text-red-700 font-medium"
                : "text-black hover:text-red-300"
            }
          >
            Available Foods
          </NavLink>
      </li>
      <li>
      <NavLink
            to="/add-food"
            className={({ isActive }) =>
              isActive
                ? "text-red-700 font-medium"
                : "text-black hover:text-red-300"
            }
          >
            Add Food
          </NavLink>
      </li>
      <li>
      <NavLink
            to="/manage-foods"
            className={({ isActive }) =>
              isActive
                ? "text-red-700 font-medium"
                : "text-black hover:text-red-300"
            }
          >
            Manage Foods
          </NavLink>
      </li>
      <li>
      <NavLink
            to="/my-request"
            className={({ isActive }) =>
              isActive
                ? "text-red-700 font-medium"
                : "text-black hover:text-red-300"
            }
          >
            My Request
          </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0  py-2 z-50">
    <div className="flex w-full md:w-11/12  mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className=" menu-sm dropdown-content bg-gray-800 rounded-box z-[1] mt-3 w-52 p-2 space-y-3 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="text-red-700 md:text-2xl font-bold">
            fOOdShare
          </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="font-semibold  gap-10 menu-horizontal px-1  text-green-700">
          {links}
        </ul>
      </div>

      <div className="login flex gap-2 items-center navbar-end">
        <div className=" ">
          {user && user?.email ? (
            <div className="relative group">
              <img
                className="w-10 h-10 rounded-full cursor-pointer border-2 border-white"
                src={user?.photoURL}
                alt=""
              />
              <div className="absolute hidden group-hover:block bg-white text-black p-2 shadow-lg  mt-2  z-30 -right-14 ">
                <p >
                  {user.displayName || "User"}
                </p>
                </div>
            </div>
          ) : (
            <Link
            to="/registration"
            className="btn btn-sm  "
          >
            Sign Up
          </Link>
          )}
        </div>
        {user && user?.email ? (
          <button
            onClick={handleLogout}
            className="btn btn-sm "
          >
            Log Out
          </button>
        ) : (
          <Link
            to="/login"
            className="btn  btn-sm"
          >
            Login
          </Link>
        )}
       
      </div>
    </div>
  </div>
       
  );
};

export default Navbar;