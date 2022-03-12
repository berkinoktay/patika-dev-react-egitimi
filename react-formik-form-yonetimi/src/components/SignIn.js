import { Formik, Field, Form, useFormik } from 'formik';
import validationSchema from './Validations';
import '../App.css';
function SignIn() {
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
        passwordConfirm: '',
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema,
    });
  return (
    <div>
      <h1>SignIn</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && (
          <span
            style={{
              color: 'white',
              backgroundColor: 'red',
              display: 'inline-block',
            }}
          >
            {errors.email}
          </span>
        )}
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && (
          <span
            style={{
              color: 'white',
              backgroundColor: 'red',
              display: 'inline-block',
            }}
          >
            {errors.password}
          </span>
        )}
        <br />
        <br />
        <label htmlFor="passwordConfirm">Password Confirm</label>
        <input
          id="passwordConfirm"
          name="passwordConfirm"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.passwordConfirm && touched.passwordConfirm && (
          <span
            style={{
              color: 'white',
              backgroundColor: 'red',
              display: 'inline-block',
            }}
          >
            {errors.passwordConfirm}
          </span>
        )}
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
        <code>{JSON.stringify(values)}</code>
      </form>
    </div>
  );
}

export default SignIn;
