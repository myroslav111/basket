// import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { Input } from './FormValid.styled';
import * as yup from 'yup';

let schema = yup.object({
  login: yup.string().required(),
  password: yup.string().min(6).max(10).required(),
});

const initialValues = { login: '', password: '' };

const LoginForm = () => {
  //   const onHandleSubmit = e => {
  //     e.preventDefault();
  //     const { login, password } = e.target.element;
  //   };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    console.log(resetForm);
    console.log(resetForm);
    resetForm();
  };

  return (
    <Formik /* Formik не стилизируется */
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form autoComplete="off">
        <label htmlFor="login">
          name
          <Input type="text" name="login" />
          <ErrorMessage name="login" component="div" />
        </label>
        <label htmlFor="password">
          password
          <Input type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </label>
        <button type="submit">submit</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
