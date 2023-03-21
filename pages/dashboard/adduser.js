import React, { useEffect, useState } from "react";
import Link from "next/link";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import styles from "../../styles/Contactform.module.css";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Loader from "../../components/Loader";
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import Navbar from '../../components/Navbar'


export default function AddUser() {

  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [loadding, setLoadding] = useState(null);
  const userToken = Cookies.get("token");
  const ErrorSchema = Yup.object().shape({
    email: Yup.string().required("Please enter your email address"),
    password: Yup.string()
      .required("Please enter your password")
      .min(8, "password must be at least 8 characters")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    password2: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "password does not match",
    ),
  });

  useEffect(() => {
    if (!userToken) {
      router.push("/");
    }
  }, []);

  const handleToggleClick = () => {
    setShowPassword(!showPassword);
  };


  return (
    <>
    <Navbar />
    
    <Formik
      initialValues={{
        email: "",
        password: "",
        password2: "",
      }}
      validationSchema={ErrorSchema}
      onSubmit={(value) => {

        const postData = async () => {
          try {
            setLoadding(true)
            const res = await fetch("http://ap.almalk.org:3000/create-admin/yusif123", {
              method: "POST",
              headers: {
                "content-type": "application/json",
                "x-access-token": JSON.stringify(userToken)
              },
              body: JSON.stringify(value),
            });

            const data = await res.json();

            if (res.status == 401) {
              setError(data.message)
              setLoadding(false)
              console.log(data.message)
            }
            else {
              setError(null)

              router.push('/')

            }
          } catch (error) {
            setError(error);
            setLoadding(false);
          }
        }
        postData()
      }}
    >
      {({ errors, touched }) => (
        <div className="h-screen mobile:mt-[100px]  mobile:bg-slate-100 bg-slate-100 mobile:bg-inherit flex justify-center items-center w-full">
          {loadding ? (<>
            <Loader />
          </>) : (<>
            <Form className="mobile:mt-[-250px] ">
              <div className="bg-white  mobile:bg-white  px-10 py-8 rounded-md w-screen shadow-md mobile:rounded-2xl mobile:w-[100%]  mobile:bg-inherit mobile:mx-auto max-w-sm">
                <h1 className="text-left text-4xl font-semibold">Add Admin User</h1>

                <div className="space-y-4">
                  {/* <h1 className="text-center text-2xl font-semibold my-4">
                    signin
                  </h1> */}
                  <div className="my-4">
                    {error && (
                      <div
                        className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                        role="alert"
                      >
                        <span className="font-medium"> {error}</span>
                      </div>
                    )}
                    <div>
                      <label className="block mb-1  font-semibold">
                        Email
                      </label>
                      <Field
                        type="email"
                        className={
                          touched.email
                            ? `border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left ${errors.email
                              ? `${styles.invalid}`
                              : `${styles.valid}`
                            } `
                            : "border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left"
                        }
                        name="email"
                      /* placeholder="Your Name " */
                      />
                      {touched.email && errors.email && (
                        <p className="text-red-700  text-xs">{errors.email}</p>
                      )}
                    </div>


                    <div className="relative">
                      <label className="block mb-1  font-semibold">
                        Password
                      </label>
                      <Field
                        type={showPassword ? 'text' : 'password'}
                        className={
                          touched.password
                            ? `border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left ${errors.password
                              ? `${styles.invalid}`
                              : `${styles.valid}`
                            } `
                            : "border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left"
                        }
                        name="password"
                      />
                      <button
                        type="button"
                        onClick={handleToggleClick}
                        className="absolute top-[65%] right-[10px] transform -translate-y-[50%] bg-transparent border-none cursor-pointer"

                      >
                        {showPassword ? <RiEyeLine /> : < RiEyeOffLine />}
                      </button>
                      {touched.password && errors.password && (
                        <p className="text-red-700  text-xs">{errors.password}</p>
                      )}
                    </div>


                    <div className="relative">
                      <label className="block mb-1  font-semibold">
                        ReEnter Password
                      </label>
                      <button
                        type="button"
                        onClick={handleToggleClick}
                        className="absolute top-[65%] right-[10px] transform -translate-y-[50%] bg-transparent border-none cursor-pointer"

                      >
                        {showPassword ? <RiEyeLine /> : < RiEyeOffLine />}
                      </button>
                      <Field
                        type={showPassword ? 'text' : 'password'}
                        className={
                          touched.password2
                            ? `border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left ${errors.password2
                              ? `${styles.invalid}`
                              : `${styles.valid}`
                            } `
                            : "border w-full border-gray-500 p-3 rounded-md  focus:border-[#E77600] focus:shadow-md focus:outline-none text-left"
                        }
                        name="password2"

                      />

                      {touched.password2 && errors.password2 && (
                        <p className="text-red-700  text-xs">{errors.password2}</p>
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-4 w-full bg-[#DB9E43] text-white border-gray-500 hover:bg-[#c98e37]  font-semibold py-3 rounded-md  tracking-wide"
                  >
                    Add User
                  </button>


                </div>
              </div>
            </Form>

          </>)}

        </div>
      )}
    </Formik>
    </>
  );
}
