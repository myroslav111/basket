import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {} from './ProductReviewForm.styled';
import styled from '@emotion/styled';

const ErrorText = styled.p`
  color: red;
`;

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const products = ['sweater', 'Keyboard', 'Sofa', 'Freezer'];

const validationSchema = yup.object().shape({
  product: yup.string().required('please select a product').oneOf(products),
  name: yup.string().required(),
  email: yup.string().email().required(),
  title: yup.string().required(),
  review: yup.string().required(),
  rating: yup.number().min(1).max(10).required(),
  date: yup.date().default(() => new Date()),
  wouldRecomendet: yup.boolean().default(false),
});

const initialValues = {
  name: '',
  email: '',
  title: '',
  review: '',
  rating: '',
  date: new Date(),
  wouldRecomendet: false,
  product: '',
};

class ProductReviewForm extends Component {
  handleSubmit = (values, { resetForm }) => {
    console.log(values);
    console.log(resetForm);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={this.handleSubmit}
      >
        <Form autoComplete="off">
          <div>
            <label htmlFor="name">Full name</label>
            <div>
              <Field name="name" type="text" placeholder="Full name" />
              <FormError name="name" />
            </div>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <div>
              <Field name="email" type="text" placeholder="Email" />
              <FormError name="email" />
            </div>
          </div>

          <div>
            <label htmlFor="product">Product</label>
            <div>
              <Field name="product" as="select">
                <option value="">Select a product</option>
                {products.map((product, idx) => {
                  return (
                    <option value={product} key={idx}>
                      {product}
                    </option>
                  );
                })}
              </Field>
              <FormError name="product" />
            </div>
          </div>

          <div>
            <label htmlFor="title">Title</label>
            <div>
              <Field name="title" type="text" placeholder="title" />
              <FormError name="title" />
            </div>
          </div>

          <div>
            <label htmlFor="review">review</label>
            <div>
              <Field name="review" as="textarea" placeholder="review" />
              <FormError name="review" />
            </div>
          </div>

          <div>
            <label htmlFor="rating">rating</label>
            <div>
              <Field name="rating" type="number" placeholder="rating" />
              <FormError name="rating" />
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="wouldRecomendet">
                <Field name="wouldRecomendet" type="checkbox" />
                wouldRecomendet
              </label>
            </div>
          </div>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );
  }
}

export default ProductReviewForm;
