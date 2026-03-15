import { ContactSchema } from '@src/types/Contact';
import React from 'react';

export const Contact = () => {
  const contact: ContactSchema = {
    eyebrow: 'Get In Touch',
    title: "Let's ",
    emphasis: 'Connect',
    message: ['コラボレーションのご相談、プロジェクトのご依頼など', 'お気軽にご連絡ください。'],
    email: 'naruhiyo.apps@gmail.com'
  };

  return (
    <section className="contact-panel">
      <div className="contact-bg-text">Contact</div>
      <p className="contact-eyebrow">{contact.eyebrow}</p>
      <h2 className="contact-title">
        {contact.title}
        <em>{contact.emphasis}</em>
      </h2>
      <p className="contact-sub">
        {contact.message[0]}
        <br />
        {contact.message[1]}
      </p>
      <div className="gold-rule"></div>
      <p className="contact-email">{contact.email}</p>
    </section>
  );
};
