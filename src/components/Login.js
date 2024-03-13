import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const initialValues = {
    email: '',
    password: '',
    terms: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Must be at least 8 characters')
      .required('Required'),
    terms: Yup.boolean()
      .oneOf([true], 'You must accept the terms and conditions')
      .required('Required'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="container">
      <div className="childcontainer">
        <h1>Login</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <p>Email:</p>
              <Field type="email" name="email" />
              <ErrorMessage name="email" />
              <p>Password:</p>
              <Field type="password" name="password" />
              <ErrorMessage name="password" />
              <div className="checkbox">
                <label>
                  <Field type="checkbox" name="terms" />
                  I accept all terms & conditions
                </label>
              </div>
              <button type="submit" disabled={isSubmitting}>
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;