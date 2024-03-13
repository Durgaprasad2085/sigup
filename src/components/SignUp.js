import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const SignUp = () => {
    const [firstName,setFirstName]=("");
    const [lastName,setLastName]=("");
    const [email,setEmail]=('');
    const [password,setPassword]=("")
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    terms: false,
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    terms: Yup.boolean()
      .oneOf([true], 'You must accept the terms and conditions')
      .required('You must accept the terms and conditions'),
  });

  const onSubmit = (values, { setSubmitting }) => {

   let res= axios.post("http://localhost:8080/Signup",{
        firstName:values.firstName,
        lastName:values.lastName,
        email:values.email,
        password:values.password
    })
    
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      
      
      setSubmitting(false);
      values.firstName=""
      values.lastName=""
      values.email=""
      values.password=""
      values.terms=""
    }, 400);
    
  };

  return (
    <div className="container">
      <div className="childcontainer">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <h1>SignUp</h1>
              <p>First Name:</p>
              <Field type="text" name="firstName" />
              <ErrorMessage name="firstName" />
              <p>Last Name:</p>
              <Field type="text" name="lastName" />
              <ErrorMessage name="lastName" />
              <p>Email:</p>
              <Field type="email" name="email" />
              <ErrorMessage name="email" />
              <p>Password:</p>
              <Field type="password" name="password" />
              <ErrorMessage name="password"/>
              <div className="checkbox">
                <label>

                  <Field type="checkbox" name="terms" />
                  I accept all terms & conditions
                </label>

              </div>
              <ErrorMessage name="terms" />
              <button type="submit" disabled={isSubmitting}>
                submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;