import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import signInImg from "../assets/signUp-img.jpg";
import { Link, useNavigate } from "react-router-dom";



const LogIn = () => {
  const navigate = useNavigate();

  
  const initialValues = {
    email: "",
    password: "",
  };

  
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .min(5, "Email must be at least 5 characters")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    
    navigate("/dashboard"); 
    setSubmitting(false);
    resetForm();
  };

  return (
    <div className="flex h-[100vh] flex-1 w-[100%]">
      {/* LEFT SIDE */}
      <div className="relative hidden w-[50%] lg:block">
        <img
          alt="sign-in-img"
          src={signInImg}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="w-[50%] flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <h2 className="text-2xl font-bold leading-9 tracking-tight text-[#343C6A]  mb-10">
            Sign In
          </h2>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, resetForm }) => (
              <Form className="space-y-6">
                {/* Email Field */}
                <div>
                  <label className="block text-sm font-medium leading-6 text-[#343C6A] ">
                    Email
                  </label>
                  <div className="mt-1">
                    <Field
                      id="email"
                      name="email"
                      type="email"
                      placeholder="example@gmail.com"
                      className="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-[#1814F3] sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm font-medium leading-6 text-[#343C6A] ">
                    Password
                  </label>
                  <div className="mt-1">
                    <Field
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter Password"
                      className="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-[#1814F3] sm:text-sm sm:leading-6"
                    />
                    <ErrorMessage
                      name="password"
                      component="p"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>

                {/* Forgot Password Link */}
                <span className="flex justify-end">
                  <Link to="" className="text-[#5243AA]">
                    Forgot password?
                  </Link>
                </span>

                {/* Buttons */}
                <div className="flex justify-end gap-5">
                  <button
                    type="button"
                    onClick={() => resetForm()}
                    className='rounded-3xl text-sm sm:ring-1 sm:ring-[#1814F3] py-1 px-5  text-[#1814F3]'
                    >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className='rounded-3xl text-sm sm:ring-1 sm:ring-[#1814F3] py-1 px-5  text-[#1814F3]'
                    >
                    {isSubmitting ? "Submitting..." : "Login"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>

          {/* Register Link */}
          <div className="mt-4 absolute bottom-5 flex gap-1">
            <p>Don't have an account?</p>
            <Link to={"/sign-up"} className="text-[#5243AA] font-semibold">
              Register here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
