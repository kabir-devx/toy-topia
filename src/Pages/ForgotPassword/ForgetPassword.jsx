import React, { useContext } from "react";
import { Link, Navigate, useSearchParams } from "react-router";
import AuthContext from "../../Auth/AuthContext/AuthContext";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const { resetPassword, setLoading } = useContext(AuthContext);
  const [searchParams] = useSearchParams();
  const emailFromUrl = searchParams.get("email") || "";

  const handleReset = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent!");
        window.open("https://mail.google.com/", "_blank");
      })
      .catch(() => {
        toast.error("Failed to send password reset email.");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="h-screen flex items-center justify-center bg-base-300">
      <title>ToyTopia - Forget Password</title>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-2xl font-black text-center text-accent baloo">
            Reset Now !
          </h1>
          <form onSubmit={handleReset}>
            <fieldset className="fieldset">
              <label className="label text-black">Email</label>
              <input
                type="email"
                className="input rounded-lg border border-dashed border-primary focus:outline-none  placeholder:text-accent"
                placeholder="Email"
                name="email"
                defaultValue={emailFromUrl}
                required
              />

              <button className="btn btn-primary text-base-100 hover:bg-secondary baloo mt-4">
                Reset
              </button>
            </fieldset>
          </form>
          <p>
            Back to Login page?{" "}
            <Link
              to={"/login"}
              className="text-blue-600 font-semibold underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
