import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Register from "../Register/Register";
import { AuthContext } from "../../providers/AuthProviders";

const Login = (event) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();

  
  const handleLogin = (event) => {
    event.preventDefault();
    signInUser(email, password)
      .then((result) => {
        const NewUser = result.user;
        console.log(NewUser);
        event.target.reset();
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="pt-20">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse bg-white text-black">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl  order-2 lg:order-1 bg-white ">
            <form onSubmit={handleLogin} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="text-black">Email</span>
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="email"
                  className="input input-bordered bg-white"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-black">Password</span>
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="password"
                  className="input input-bordered bg-white"
                  required
                />
                <label className=" flex justify-center">
                  <Link
                    to="/forgot"
                    className="text-lg mt-3 text-blue-800 hover:underline hover:text-blue-700"
                  >
                    Forgotten password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-info">
                  <samp className="text-white font-semibold text-2xl">
                    Log in
                  </samp>
                </button>
              </div>
              <hr className="border-t-1 border-gray-300 my-5" />
            </form>

            <div className="flex lg:hidden justify-center">
              <Link to="/Register">
                <button className="bg-lime-600 hover:bg-lime-700 p-3 text-lg font-semibold mb-10 text-white rounded-xl">
                  Create new account
                </button>
              </Link>
            </div>

            <div className="hidden lg:flex justify-center">
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="bg-lime-600 hover:bg-lime-700 p-3 text-lg font-semibold mb-10 text-white rounded-xl"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Create new account
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-white w-[30%]">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <Register></Register>
                </div>
              </dialog>
            </div>
          </div>

          <div className="text-center lg:text-left order-1 lg:order-2">
            <h1 className="text-5xl font-bold">Please Login now!</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
