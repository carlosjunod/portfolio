import React, { useRef, useState, useEffect, useCallback } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";
import "animate.css";

const ContactFrom = () => {
  const [formState, setFormState] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [messageSentStatus, setMessageSentStatus] = useState("");
  const [messageLoading, setMessageLoading] = useState(false);

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const validateForm = useCallback(() => {
    let valid = true;

    if (!formState.from_name) {
      valid = false;
    }

    if (!formState.reply_to || !isValidEmail(formState.reply_to)) {
      valid = false;
    }

    if (!formState.message) {
      valid = false;
    }

    return valid;
  }, [formState]);

  const form = useRef(null);

  const _focusHandlerIn = (event) => setFocusedField(event.target.name);
  const _focusHandlerOut = () => setFocusedField("");
  const _onChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    setIsFormValid(validateForm());
  }, [validateForm, formState]);

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setMessageLoading(true);
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            setMessageLoading(false);
            setMessageSentStatus(`${result.status}`);
            setTimeout(() => {
              setMessageSentStatus("");
            }, 5000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const clearAll = () => {
    setFormState({
      from_name: "",
      reply_to: "",
      message: "",
    });
    setMessageSentStatus("");
  };

  return (
    <section id='contact-form'>
      <form action='post' onSubmit={sendEmail} ref={form}>
        <h3>Let's talk...</h3>
        <p
          className={
            focusedField === "from_name" || formState.from_name
              ? "active"
              : undefined
          }
        >
          <label htmlFor='from_name'>Name</label>
          <input
            type='text'
            name='from_name'
            id='from_name'
            onFocus={(input) => _focusHandlerIn(input)}
            onBlur={_focusHandlerOut}
            value={formState.from_name}
            onChange={_onChange}
          />
        </p>
        <p
          className={
            focusedField === "reply_to" || formState.reply_to
              ? "active"
              : undefined
          }
        >
          <label htmlFor='reply_to'>e-mail</label>
          <input
            type='email'
            name='reply_to'
            id='reply_to'
            onFocus={(input) => _focusHandlerIn(input)}
            onBlur={_focusHandlerOut}
            value={formState.reply_to}
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
            value={formState.message}
            id='message'
            onFocus={(input) => _focusHandlerIn(input)}
            onBlur={_focusHandlerOut}
            onChange={_onChange}
          ></textarea>
        </p>
        <div className='button-container'>
          <input
            type='submit'
            value='submit'
            className={`submit ${!isFormValid ? "disabled" : ""}`}
            onSubmit={sendEmail}
          />
          <span className='clear-all' onClick={clearAll}>
            clear all
          </span>
        </div>
        {messageLoading && (
          <div className='animate__pulse animate__animated loading'>
            Loading...
          </div>
        )}
        {messageSentStatus && (
          <div
            className={`confirmationMessage ${
              messageSentStatus === "200" ? "OK" : "ERROR"
            }`}
          >
            {messageSentStatus === "200" ? (
              <p>Message sent successfully! 🙂</p>
            ) : (
              <p>Message failed to send. Please try again. 😨</p>
            )}
          </div>
        )}
      </form>
    </section>
  );
};

export default ContactFrom;
