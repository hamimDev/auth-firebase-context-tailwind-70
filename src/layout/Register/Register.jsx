import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Register = (event) => {
  const from = event.target;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { user, createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    console.log(name, email, password);
    createUser(email, password)
      .then((result) => {
        const NewUser = result.user;
        console.log(NewUser);
        event.target.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-80 mx-auto pt-24 lg:pt-2  h-screen lg:h-auto">
      <form
        onSubmit={handleSignUp}
        className="card-body  bg-slate-100 rounded mt-4"
      >
        <div>
          <h1 className="text-3xl font-semibold mb-1">Sign Up</h1>
          <p className="text-lg text-gray-500">It's quick and easy.</p>
          <hr className="border-t-1 border-gray-300 my-2" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="text-black">Name</span>
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            className="input input-bordered bg-white"
            required
          />
        </div>
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
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-success">
            <samp className="text-white font-semibold text-2xl">Sign Up</samp>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
