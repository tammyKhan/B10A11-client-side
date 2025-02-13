import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { handleLogin, handleGoogleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    handleLogin(email, password)
      .then((res) => {
        toast.success("Successfully login")
        setTimeout(() => navigate("/"), 2000)  ||
        navigate(location.state.from);
        
      })
      .catch((err) => {
        setError(err.message);
       toast.error(err.code)
      });
  };

  const googleLoginHandler = () => {
    handleGoogleLogin().then((res) => {
     toast.success("Successfully login")
     setTimeout(() => navigate("/"), 2000) ||
      navigate(location.state.from);
      
    });
  };

  

  const handleForgotPassword = () => {
    navigate("/forgot-password", { state: { email } });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-12">
       
      <h2 className="mt-6 text-3xl
        font-bold text-center">Login</h2>
      <form className="card-body" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          placeholder="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered"
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="input input-bordered"
          required
        />


        <div className="form-control mt-6">
         
          <button type="submit" className="btn btn-neutral btn-block">
            Login
          </button>
        </div>

        <div className="text-center">
          <button
            type="button"
            className="text-red-500 hover:underline text-sm"
            onClick={handleForgotPassword}
          >
            Forgot Password?
          </button>
        </div>

        <div className="flex items-center justify-center gap-3 ">
          <h2 className="font-bold">Don't Have an Account ? </h2>
          <Link to="/register" className="font-bold text-red-600">
            Register
          </Link>
        </div>
      </form>
      <button onClick={googleLoginHandler} className="btn mb-6 w-11/12 mx-auto">
            Login With Google
          </button>
      <ToastContainer />
    </div>
  );
};

export default Login;
