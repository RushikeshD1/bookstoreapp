import React from "react";
import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.form?.pathname || "/"

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      emailId : data.emailId,
      fullName : data.fullName,
      password : data.password
    }

    await axios.post("http://localhost:3000/v1/api/user/signup", userInfo)
      .then((res) => {
        // console.log(res.data.user);
        if(res.data){
          toast.success("User signup successfully");
          navigate(from, {replace : true});
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user))
      })
      .catch(err => {
        toast.error(err.response.data.message);        
      })
  }

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="border-[2px] shadow-md p-5">
          <div className=" text-black">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>
              {/* Name */}
              <div className=" mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="bg-transparent w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("fullName", { required: true })}
                />
                <br />
                {errors.fullName && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
                )}
              </div>
              {/* Email */}
              <div className=" mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-transparent w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("emailId", { required: true })}
                />
                <br />
                {errors.emailId && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
                )}
              </div>
              {/* Password */}
              <div className=" mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your password"
                  className="bg-transparent w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
                )}
              </div>
              {/* Button */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 hover:bg-pink-700 px-3 py-1 rounded-md duration-200">
                  Signup
                </button>
                <p>
                  Have account?{" "}
                  <a
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                    className="underline text-blue-500 cursor-pointer"
                  >
                    Login
                  </a>
                  <Login />
                </p>{" "}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
