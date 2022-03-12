import { Formik, Field, Form, useFormik } from 'formik';

function SignUp() {
  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      gender: 'male',
      hobbies: [],
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <h1>Sign Up</h1>

      {/* Formik Yapısı ile Form Tasarlarsak;
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <button type="submit">Submit</button>
      </Form>
      */}

      {/*  HTML Form yapısı ile tasarlarsak; */}

      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          placeholder="Jane"
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          placeholder="Doe"
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
          onChange={handleChange}
        />
        <br />
        <br />
        <span>Male:</span>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleChange}
          checked={values.gender === 'male'}
        />
        <span>Female:</span>
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleChange}
          checked={values.gender === 'female'}
        />
        <br />
        <br />
        <strong>Hobbies</strong>
        <div>
          Software
          <input
            type="checkbox"
            name="hobbies"
            value="Software"
            onChange={handleChange}
          />
        </div>
        <div>
          Listen Music
          <input
            type="checkbox"
            name="hobbies"
            value="Listen Music"
            onChange={handleChange}
          />
        </div>
        <div>
          Travel
          <input
            type="checkbox"
            name="hobbies"
            value="Travel"
            onChange={handleChange}
          />
        </div>
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
        <code>{JSON.stringify(values)}</code>
      </form>
    </div>
  );
}

export default SignUp;
