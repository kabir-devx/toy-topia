import React, { useContext } from "react";
import { Link } from "react-router";
import AuthContext from "../../Auth/AuthContext/AuthContext";
import { toast } from "react-toastify";

const Feedback = () => {
    const { user } = useContext(AuthContext);
    const { displayName, email } = user || {};

    const handleSubmit = (event) => {
        event.preventDefault();
      event.target.reset();
      toast.success("Thank you for your feedback!");
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-300 py-20 ">
      <title>ToyTopia - Feedback</title>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-2xl font-black text-center text-accent baloo">
            Feedback Form
          </h1>
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">
              <label className="label text-black">Name</label>
              <input
                type="text"
                className="input placeholder:text-accent rounded-lg border border-dashed border-primary focus:outline-none"
                placeholder="Name"
                name="name"
                required
                defaultValue={displayName}
                disabled
              />

              <label className="label text-black">Email</label>
              <input
                type="email"
                className="input placeholder:text-accent rounded-lg border border-dashed border-primary focus:outline-none"
                placeholder="Email"
                name="email"
                required
                defaultValue={email}
                disabled
              />
              <label className="label text-black">Subject</label>
              <input
                type="text"
                className="input placeholder:text-accent rounded-lg border border-dashed border-primary focus:outline-none"
                placeholder="Subject"
                name="subject"
                required
              />
              <label className="label text-black">Message</label>
              <div className="form-control">
                <textarea
                  className="textarea placeholder:text-accent rounded-lg border border-dashed border-primary focus:outline-none resize-none"
                  placeholder="Message"
                  name="message"
                  rows={6}
                  resize="none"
                ></textarea>
              </div>
              <button className="btn btn-primary border-none hover:btn-secondary text-base-100 baloo mt-4">
                Send Feedback
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
