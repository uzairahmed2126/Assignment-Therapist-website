import React, { useState } from "react";
import "./style.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    preferredTime: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid.";
    if (!formData.message.trim())
      newErrors.message = "Please tell us what brings you here.";
    if (!formData.preferredTime.trim())
      newErrors.preferredTime = "Preferred time is required.";
    if (!formData.agree) newErrors.agree = "You must agree to be contacted.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <section className="contact-form-section">
      <h2 className="contact-heading">Get in Touch</h2>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </label>

        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </label>

        <label>
          What brings you here?
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </label>

        <label>
          Preferred time to reach you:
          <input
            type="text"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
          />
          {errors.preferredTime && (
            <p className="error">{errors.preferredTime}</p>
          )}
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          I agree to be contacted
        </label>
        {errors.agree && <p className="error">{errors.agree}</p>}

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
