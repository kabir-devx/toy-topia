import React, { useContext } from "react";
import AuthContext from "../../Auth/AuthContext/AuthContext";
import { toast } from "react-toastify";

const ExploreForm = () => {
  const { user } = useContext(AuthContext);
  const { displayName, email } = user || {};
  
    
    const handleWishList = (event) => {
      event.preventDefault();
      toast.success('Added to your wish list!');
    }
  return (
    <div>
      <div className=" py-40 flex items-center justify-center bg-base-300 ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-2xl font-black text-center text-accent baloo">
              Explore Toys !
            </h1>
            <form onSubmit={handleWishList}>
              <fieldset className="fieldset">
                <label className="label text-black">Name</label>
                <input
                  type="name"
                  className="input placeholder:text-accent rounded-lg border border-dashed border-primary focus:outline-none"
                  placeholder="Name"
                  name="name"
                  defaultValue={displayName}
                  disabled
                />
                <label className="label text-black">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    className="input placeholder:text-accent rounded-lg border border-dashed border-primary focus:outline-none"
                    placeholder="Email"
                    name="email"
                    defaultValue={email}
                    disabled
                  />
                </div>
                              <button
                                  type="button"
                  onClick={() => toast.success('Welcome to our waiting list!')}
                  className="btn btn-primary border-none hover:btn-secondary text-base-100 baloo mt-4"
                >
                  Try Now
                </button>
                <div className="divider baloo">OR</div>
                <button className="btn btn-primary border-none hover:btn-secondary text-base-100 baloo">
                  Add to Wish List
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreForm;
