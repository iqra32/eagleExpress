import { Mail, Phone, MapPin } from 'lucide-react';
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ScrollReveal from '../components/ScrollReveal';
const Contact = () => {
    const form = useRef();

  const EMAILJS_SERVICE_ID = 'service_ymejp8f';
  const EMAILJS_TEMPLATE_ID = 'template_d7yamja';
  const EMAILJS_PUBLIC_KEY = 'VK-pCG7keTtKJa2Yb';

 const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      equipment: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string().required('Phone number is required'),
      equipment: Yup.string().required('Equipment type is required'),
      message: Yup.string().required('Please describe your dispatch needs'),
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
  {
        name: values.name,
        email: values.email,
        phone: values.phone,
        equipment: values.equipment,
        message: values.message,
      },
                EMAILJS_PUBLIC_KEY
        )
        .then((res) => {
        console.log('res=====>>>>',res)
          alert('✅ Message sent successfully!');
          resetForm();
        })
        .catch((error) => {
          console.log(error);
          alert('❌ Failed to send message');
        });
    },
  });
  const inputStyle = (fieldName) => ({
    padding: '1rem',
    borderRadius: '8px',
    background: 'var(--bg-secondary)',
    border: `1px solid ${formik.touched[fieldName] && formik.errors[fieldName] ? 'red' : 'var(--border-color)'}`,
    color: 'var(--text-primary)',
    width: '100%',
  });

  const errorStyle = {
    color: 'red',
    fontSize: '0.85rem',
    marginTop: '-0.5rem',
  };
  return (
    <div className="animate-fade-in">
      <section className="hero-section">
        <div className="container">
          <ScrollReveal delay={0}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', maxWidth: '800px', lineHeight: 1.1, color: '#ffffff' }}>
              Get in Touch
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={140}>
            <p className="hero-subtitle">
              Ready to increase your payload and cut the stress? Reach out today.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-padding" style={{ marginTop: '6px', paddingTop: 0 }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <ScrollReveal delay={0}>
              <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Contact <span className="highlight-text">Us</span></h1>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                We&apos;re here to help with all your dispatch service needs
              </p>
            </ScrollReveal>
          </div>

        <div className="grid md:grid-cols-2 gap-lg">
          
          {/* Contact Details */}
          <div className="flex flex-col gap-lg" style={{ order: 2 }}>
            <ScrollReveal delay={0}>
              <div className="card flex items-center gap-md">
                <div style={{ background: 'rgba(249, 115, 22, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                  <Phone size={32} color="var(--accent-primary)" />
                </div>
                <div>
                  <h3 style={{ marginBottom: '0.2rem' }}>Phone</h3>
                  <a href="tel:912-200-8911" style={{ color: 'var(--text-secondary)' }}>912-200-8911</a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="card flex items-center gap-md">
                <div style={{ background: 'rgba(249, 115, 22, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                  <Mail size={32} color="var(--accent-primary)" />
                </div>
                <div>
                  <h3 style={{ marginBottom: '0.2rem' }}>Email</h3>
                  <a href="mailto:alexcarter.pts@gmail.com" style={{ color: 'var(--text-secondary)' }}>alexcarter.pts@gmail.com</a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="card flex items-center gap-md">
                <div style={{ background: 'rgba(249, 115, 22, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                  <MapPin size={32} color="var(--accent-primary)" />
                </div>
                <div>
                  <h3 style={{ marginBottom: '0.2rem' }}>Address</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>2781 CYPRESS AVE EAST MEADOW NEW YORK</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Form */}
          <div className="contact-form-column" style={{ order: 1 }}>
            <ScrollReveal delay={160} className="contact-form-reveal">
              <div className="card">
                <h2 style={{ marginBottom: '1.5rem' }}>Send a Message</h2>
                <form className="flex flex-col gap-md" onSubmit={formik.handleSubmit}>

                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  style={inputStyle('name')}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name && (
                  <p style={errorStyle}>⚠ {formik.errors.name}</p>
                )}

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  style={inputStyle('email')}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <p style={errorStyle}>⚠ {formik.errors.email}</p>
                )}

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  style={inputStyle('phone')}
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p style={errorStyle}>⚠ {formik.errors.phone}</p>
                )}

                <input
                  type="text"
                  name="equipment"
                  placeholder="Equipment Type (e.g. Box Truck)"
                  style={inputStyle('equipment')}
                  value={formik.values.equipment}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.equipment && formik.errors.equipment && (
                  <p style={errorStyle}>⚠ {formik.errors.equipment}</p>
                )}

                <textarea
                  name="message"
                  placeholder="Tell us about your dispatch needs..."
                  style={{
                    ...inputStyle('message'),
                    minHeight: '150px',
                    resize: 'vertical',
                  }}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.message && formik.errors.message && (
                  <p style={errorStyle}>⚠ {formik.errors.message}</p>
                )}

                <button type="submit" className="btn btn-primary">
                  Submit Request
                </button>
                </form>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
