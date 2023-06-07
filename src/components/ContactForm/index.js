import React, { useRef, useState, useEffect, useCallback } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";

const ContactFrom = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const validateForm = useCallback(
    (form) => {
      let valid = true;

      if (!formState.name) {
        valid = false;
      }

      if (!formState.email) {
        valid = false;
      }

      if (!formState.message) {
        valid = false;
      }

      if (!form?.current) {
        valid = false;
      }

      return valid;
    },
    [formState]
  );

  const form = useRef(null);

  const _focusHandlerIn = (event) => setFocusedField(event.target.name);
  const _focusHandlerOut = () => setFocusedField("");
  const _onChange = useCallback(
    (event) => {
      setFormState({ ...formState, [event.target.name]: event.target.value });
    },
    [formState]
  );
  useEffect(() => {
    setIsFormValid(validateForm());
  }, [validateForm, _onChange]);

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <section id='contact-form'>
      <form action='post' onSubmit={sendEmail} ref={form}>
        <h3>Let's talk...</h3>
        <p
          className={
            focusedField === "name" || formState.name ? "active" : undefined
          }
        >
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            onFocus={(input) => _focusHandlerIn(input)}
            onBlur={_focusHandlerOut}
            value={formState.name}
            onChange={_onChange}
          />
        </p>
        <p
          className={
            focusedField === "email" || formState.email ? "active" : undefined
          }
        >
          <label htmlFor='email'>e-mail</label>
          <input
            type='email'
            name='email'
            id='email'
            onFocus={(input) => _focusHandlerIn(input)}
            onBlur={_focusHandlerOut}
            value={formState.email}
            onChange={_onChange}
          />
        </p>
        <p
          className={
            focusedField === "message" || formState.message
              ? "active"
              : undefined
          }
        >
          <label htmlFor='message'>message</label>
          <textarea
            name='message'
            defaultValue=''
            id='message'
            onFocus={(input) => _focusHandlerIn(input)}
            onBlur={_focusHandlerOut}
            onChange={_onChange}
          ></textarea>
        </p>
        <input
          type='submit'
          value='submit'
          className={`submit ${!isFormValid ? "disabled" : ""}`}
          onSubmit={sendEmail}
        />
      </form>
    </section>
  );
};

export default ContactFrom;
