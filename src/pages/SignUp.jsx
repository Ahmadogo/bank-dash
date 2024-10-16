import React, { useState } from "react";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import createAccountImg from "../assets/signIn-img.jpg";

// Validation schema
const validationSchema = Yup.object({
  fullName: Yup.string()
    .min(5, "Full Name must be at least 5 characters")
    .required("Full Name is required"),
  email: Yup.string()
    .min(10, "Email must be at least 10 characters")
    .required("Email is required"),
  accType: Yup.string()
    .min(5, "Account type must be at least 5 characters")
    .required("Account type is required"),
  accNumber: Yup.string()
    .min(5, "Account Number must be at least 5 characters")
    .required("Account Number is required"),
});

function CreateAccount() {
  const navigate = useNavigate();

  const initialValues = {
    fullName: "",
    email: "",
    schoolName: "",
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(false);
    resetForm();

    setTimeout(() => {
        navigate("/_");
        setTimeout(() => {
          navigate("/");
        }, 2500);
      }, 400);
  };

  return (
    <>
      <div className="flex h-[100vh] w-[100%] flex-1">
        {/* LEFT SIDE */}
        <div className="relative hidden w-[50%] flex-1 lg:block">
          <img
            alt="boy-img"
            src={createAccountImg}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-1 flex-col w-[50%] relative justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <h2 className="text-2xl font-bold leading-9 tracking-tight text-[#343C6A] ">
              Create Account
            </h2>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, resetForm }) => (
                <Form className="space-y-6 mt-8">
                  <div>
                    <label className="block text-sm font-medium leading-6 text-[#343C6A] ">
                      Full Name
                    </label>
                    <div className="mt-1">
                      <Field
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="Ahmad Abdulkareem"
                        className="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 sm:text-sm sm:leading-6"
                      />
                      <ErrorMessage
                        name="fullName"
                        component="p"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium leading-6 text-[#343C6A] ">
                      Email
                    </label>
                    <div className="mt-1">
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        placeholder="example@email.com"
                        className="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 sm:text-sm sm:leading-6"
                      />
                      <ErrorMessage
                        name="email"
                        component="p"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium leading-6 text-[#343C6A] ">
                      Account Number
                    </label>
                    <div className="mt-1">
                      <Field
                        id="accNumber"
                        name="accNumber"
                        type="text"
                        placeholder="**** *** ****"
                        className="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 sm:text-sm sm:leading-6"
                      />
                      <ErrorMessage
                        name="accNumber"
                        component="p"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium leading-6 text-[#343C6A] ">
                      Account Type
                    </label>
                    <div className="mt-1">
                      <Field
                        id="accType"
                        name="accType"
                        type="text"
                        placeholder="enter account type"
                        className="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 sm:text-sm sm:leading-6"
                      />
                      <ErrorMessage
                        name="accType"
                        component="p"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-5">
                    <button
                      type="button"
                      onClick={() => resetForm()}
                      className="rounded-3xl text-sm sm:ring-1 sm:ring-[#1814F3] py-1 px-5  text-[#1814F3]"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="rounded-3xl text-sm sm:ring-1 sm:ring-[#1814F3] py-1 px-5  text-[#1814F3]"
                    >
                      {isSubmitting ? "Submitting..." : "Register"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>

            <div className="mt- flex gap-1 absolute bottom-3">
              <p>Already have an account?</p>
              <Link to={"/"} className="text-[#5243AA] font-semibold">
                Login here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateAccount;
