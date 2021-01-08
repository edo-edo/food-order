import React from 'react';
import { withFormik, FormikProps } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  email: string;
  password: string;
}

interface MyFormProps {
  initialEmail?: string;
  initialPassword?: string;
}

const LogIn = (props: FormikProps<FormValues>) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = props;

  return (
    <div>
      <h1>LogIn</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Email">
          <input
            width={50}
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
        </label>

        <label htmlFor="Password">
          <input
            width={50}
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
        </label>

        <button
          type="submit"
          disabled={
                        isSubmitting
                        || !!(errors.email && touched.email)
                        || !!(errors.password && touched.password)
                    }
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

const App = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => ({
    email: props.initialEmail || '',
    password: props.initialPassword || '',
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Email not valid')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  }),

  handleSubmit(
    { email, password }: FormValues,
  ) {
    console.log(email, password);
  },
})(LogIn);

export default App;
