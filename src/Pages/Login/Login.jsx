import React, { useContext, useRef, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../../Auth/AuthContext/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { signInUser, signInGoogle, setLoading } = useContext(AuthContext);
  const EmailRef = useRef("");
  const handleShowPassword = () => {
    setShow(!show);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const minSix = /^.{6,}$/;
    const upperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;
    let errors = [];

    if (!minSix.test(password)) {
      errors.push("At least 6 characters");
    }
    if (!upperCase.test(password)) {
      if (errors.length > 0) errors.push(", one uppercase letter");
      else errors.push("At least one uppercase letter");
    }
    if (!lowerCase.test(password)) {
      if (errors.length > 0) errors.push(", one lowercase letter");
      else errors.push("At least one lowercase letter");
    }

    if (errors.length > 0) {
      toast.warning(errors.join("\n"));
      return;
    }
    signInUser(email, password)
      .then(() => {

        toast.success("Login Successful");
        navigate(location.state || "/");
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    signInGoogle()
      .then(() => {
        toast.success("Login Successful");
        navigate(location.state || "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleReset = () => {
    const email = EmailRef.current.value;
    if (email) {
      navigate(`/forget-password?email=${encodeURIComponent(email)}`);
    } else {
      navigate("/forget-password");
    }
  };
  const location = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-300 py-20">
      <title>ToyTopia - Login</title>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-2xl font-black text-center text-accent baloo">
            Login Now !
          </h1>
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <label className="label text-black">Email</label>
              <input
                type="email"
                className="input placeholder:text-accent rounded-lg border border-dashed border-primary focus:outline-none"
                placeholder="Email"
                name="email"
                ref={EmailRef}
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
                  className="absolute top-2.5 right-7 text-xl z-50"
                >
                  {show ? <IoMdEyeOff /> : <IoMdEye />}
                </span>
              </div>
              <div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="link link-hover bg-transparent border-none p-0 text-left underline cursor-pointer"
                >
                  Forgot password?
                </button>
              </div>
              <button className="btn btn-primary border-none hover:btn-secondary text-base-100 baloo mt-4">
                Login
              </button>
            </fieldset>
          </form>
          <p>
            Don't have an Account?{" "}
            <Link
              to={"/register"}
              className="text-blue-600 font-semibold underline"
            >
              Register
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
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
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

export default Login;
