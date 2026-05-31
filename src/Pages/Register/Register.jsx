import React, { useContext, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router";
import AuthContext from "../../Auth/AuthContext/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { createUser, updateUserProfile, signInGoogle, setLoading } =
    useContext(AuthContext);

  const handleShowPassword = () => {
    setShow(!show);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    // Password validations
    const minSix = /^.{6,}$/;
    const upperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;

    let errors = [];
    if (!minSix.test(password)) errors.push("At least 6 characters");
    if (!upperCase.test(password)) errors.push("One uppercase letter");
    if (!lowerCase.test(password)) errors.push("One lowercase letter");

    if (errors.length > 0) {
      toast.warning(errors.join("\n"));
      return;
    }

    setLoading(true);
    createUser(email, password)
      .then(() => {
        toast.success("Registration Successful");
        updateUserProfile({
          displayName: name,
          photoURL: photoURL,
        });
        form.reset();
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    setLoading(true);
    signInGoogle()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-300 py-20">
      <title>ToyTopia - Register</title>
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <h1 className="text-2xl font-black text-center text-accent baloo">
            Register Now!
          </h1>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              <label className="label text-black">Name</label>
              <input
                type="text"
                className="input placeholder:text-accent rounded-lg border border-dashed border-primary focus:outline-none"
                placeholder="Name"
                name="name"
                required
              />
              <label className="label text-black">Email</label>
              <input
                type="email"
                className="input placeholder:text-accent rounded-lg border border-dashed border-primary focus:outline-none"
                placeholder="Email"
                name="email"
                required
              />
              <label className="label text-black">Photo URL</label>
              <input
                type="url"
                className="input placeholder:text-accent rounded-lg border border-dashed border-primary focus:outline-none"
                placeholder="Photo URL"
                name="photoURL"
                required
              />
              <label className="label text-black">Password</label>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  className="input placeholder:text-accent rounded-lg border border-dashed border-primary focus:outline-none z-0"
                  placeholder="Password"
                  name="password"
                  required
                />
                <span
                  onClick={handleShowPassword}
                  className="absolute top-2.5 right-7 text-xl cursor-pointer z-50"
                >
                  {show ? <IoMdEyeOff /> : <IoMdEye />}
                </span>
              </div>
              <button className="btn border-none btn-primary hover:btn-secondary mt-4 text-base-100 baloo">
                Register
              </button>
            </fieldset>
          </form>

          <p className="mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-semibold underline">
              Login
            </Link>
          </p>

          <div className="divider baloo">OR</div>

          <button
            onClick={handleGoogleSignIn}
            className="btn bg-white text-black rounded-lg border border-dashed border-primary focus:outline-none baloo"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path fill="#fff" d="M0 0h512v512H0z"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="M386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="M90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
