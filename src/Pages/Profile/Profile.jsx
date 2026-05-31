import React, { useContext } from "react";
import { Link } from "react-router";
import AuthContext from "../../Auth/AuthContext/AuthContext";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, updateUserProfile, setLoading } = useContext(AuthContext);
    const handleUpdateProfile = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value.trim();
      const photoURL = form.photoURL.value.trim();


      if (name.length < 4) {
        toast.warning("Name must be at least 4 characters long.");
        return;
      }

      const updates = {};
      if (name !== user.displayName) updates.displayName = name;
      if (photoURL !== user.photoURL) updates.photoURL = photoURL;

      if (Object.keys(updates).length === 0) {
        toast.info("No changes detected.");
        return;
      }

      updateUserProfile(updates)
        .then(() => {
          toast.success("Profile updated successfully!");
        })
        .catch(() => {
          toast.error("Failed to update profile.");
        })
      .finally(() => {
        setLoading(false);
      });
    };

  return (
    <div className="min-h-screen py-20 flex items-center justify-center bg-base-300 ">
      <title>ToyTopia - Profile</title>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-2xl font-black text-center text-accent baloo">
            Update Profile !
          </h1>
          <div className="flex justify-center ">
            <img
              className="rounded-full h-30 w-30 p-1 border-2 border-dashed border-primary object-cover"
              referrerPolicy="no-referrer"
              src={user?.photoURL}
              alt={user?.displayName}
            />
          </div>
          <form onSubmit={handleUpdateProfile}>
            <fieldset className="fieldset">
              <label className="label text-black">Email</label>
              <input
                type="email"
                className="input placeholder:text-accent rounded-lg border border-dashed border-primary focus:outline-none text-black opacity-90"
                placeholder="Email"
                name="email"
                defaultValue={user?.email}
                disabled
              />
              <label className="label text-black">Name</label>
              <input
                type="text"
                className="input placeholder:text-accent rounded-lg border border-dashed border-primary focus:outline-none"
                placeholder="Name"
                name="name"
                defaultValue={user?.displayName}
              />
              <label className="label text-black">PhotoURL</label>
              <input
                type="url"
                className="input placeholder:text-accent rounded-lg border border-dashed border-primary focus:outline-none"
                placeholder="PhotoURL"
                name="photoURL"
                defaultValue={user?.photoURL}
                required
              />

              <button className="btn btn-primary border-none hover:btn-secondary text-base-100 baloo mt-4">
                Update
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
