import React from 'react'
import ContactForm from '../ContactForm'
import ContactInfo from '../ContactInfo'

import './ContactSection.css'

const ContactSection = () => (
  <section id="contact-section">
    <ContactForm />
    <ContactInfo />
  </section>
)

export default ContactSection