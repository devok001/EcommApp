import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

export default function ContactForm() {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
          errors.email = "Invalid email address";
        }
        if (!values.password) {
          errors.password = "Required";
        } else if (values.password.length < 6) {
          errors.password = "Password must be at least 6 characters";
        }
        return errors;
      }}
      onSubmit={(values) => {
        console.log("Form data", values);
      }}
    >
      {({ touched, isSubmitting }) => (
        <Form>
          <div>
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" />
          </div>

          <div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
