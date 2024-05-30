import React, { useState } from 'react';

function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [validation, setValidation] = useState({
    fullName: true,
    subject: true,
    email: true,
    body: true,
  });

  const validateField = (field, value) => {
    if (field === 'email') {
      return /\S+@\S+\.\S+/.test(value);
    } else {
      return value.length >= 3;
    }
  };

  const handleBlur = (field, value) => {
    setValidation({ ...validation, [field]: validateField(field, value) });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.values(validation).every(Boolean)) {
      console.log({ fullName, subject, email, body });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} onBlur={() => handleBlur('fullName', fullName)} required />
      <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} onBlur={() => handleBlur('subject', subject)} required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={() => handleBlur('email', email)} required />
      <textarea value={body} onChange={(e) => setBody(e.target.value)} onBlur={() => handleBlur('body', body)} required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactPage;
