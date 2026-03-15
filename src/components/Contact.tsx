import { ContactSchema } from '@src/types/Contact';
import React from 'react';

export const Contact = () => {
  const contact: ContactSchema = {
    eyebrow: 'Get In Touch',
    title: 'Contact',
    email: 'naruhiyo.apps@***',
    note: '*** には gmail.com を入れてください'
  };

  return (
    <section className="contact-panel">
      <div className="contact-bg-text">Contact</div>
      <p className="contact-eyebrow">{contact.eyebrow}</p>
      <h2 className="contact-title">{contact.title}</h2>
      <p className="contact-email">{contact.email}</p>
      <p className="contact-note">{contact.note}</p>
    </section>
  );
};
