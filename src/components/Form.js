import React from "react";
import "../assets/styles/form.css";

const Form = () => {
  return (
    <section className='form-container'>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const { name, email, tel } = e.target.elements;

          alert(
            `Hello ${name.value} ,Your email is ${email.value} and your phone number ${tel.value} `
          );
        }}
      >
        <input type='text' placeholder='Enter your name' name='name' />
        <input type='email' placeholder='Enter your email' name='email' />
        <input type='tel' placeholder='Enter your name' name='tel' />
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
};

export default Form;
