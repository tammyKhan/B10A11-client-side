import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate()

  const { handleRegister,  manageProfile, handleGoogleLogin} = useContext(AuthContext);

  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("")

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if(password.length < 6){
      toast.error('Password should be at least 6 character!')
      // setError("Password should be at least 6 character!")
      return;
    }
    
    if(!/[a-z]/.test(password)){
      toast.error("Password must be contain at least one small letter")
       return;
    }
    if(!/[A-Z]/.test(password)){
      toast.error("Password must be contain at least one capital letter")
       return;
    }

    handleRegister(email, password)
  .then(res => {
    toast.success("Successfully registered");
    setTimeout(() => navigate("/"), 2000);
    manageProfile(name, photo);
  })
  .catch(error => {
    console.error("Registration Error:", error);
    toast.error(error.message);
  });
  };

  const googleLoginHandler = () => {
    handleGoogleLogin().then(res => {
      toast.success("Successfully registered");
      setTimeout(() => navigate("/"), 2000);
    });
  };

  return (
    <div className="my-12 ">
      
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
        <h2 className="mt-6 text-3xl
        font-bold text-center">Register</h2>
        <form className="card-body" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input input-bordered"
            required
          />
          <input
            type="text"
            placeholder="Photo URL"
            name="photo"
            className="input input-bordered"
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
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
          

          {
            error && <p className=" text-red-600">{error}</p>
          }

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-block btn-neutral">
              Register
            </button>
          </div>

          <div className="flex items-center justify-center gap-3">
          <h2 className="font-bold">Already Have an Account ? </h2>
          <Link to="/login" className="font-bold text-red-600">
            Login
          </Link>
        </div>

        </form>

        
          <button onClick={googleLoginHandler} className="btn mb-6 w-11/12 mx-auto">
            Login With Google
          </button>
       

      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default SignUp;
