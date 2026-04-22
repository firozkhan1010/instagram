import React, { useState } from "react";
import "./App.css";
import { Formik } from "formik";
import * as Yup from "yup";

function App() {
  const password = "12345";

  let userSchema = Yup.object({
    username: Yup.string().required("username is require"),
    password: Yup.string().required("password is require"),
  });
  return (
    <div className="container">
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={userSchema}
        onSubmit={(values, {resetForm}) => {
          console.log( "username = ",values.username, ":","password = ",values.password);
          
          if (values.password === password) {
            alert("successfully");
          } else {
            alert("incorrect password");
            
          }
         
          resetForm()
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          /* and other goodies */
        }) => (
          <form className="login-form" onSubmit={handleSubmit}>
            <h1>Login</h1>

            <label>Username*</label>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            <br />
            {errors.username && touched.username && errors.username}

            <label>Password*</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <br />
            {errors.password && touched.password && errors.password}

            <button type="submit">Login</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
