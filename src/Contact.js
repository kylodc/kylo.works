import React from 'react';
import './Contact.css';
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
    return (
        <div className="page-wrapper">
            <section className="contact-section page-section" style={{ paddingTop: '100px' }}>
                <div className="contact-container">

                    <div className="contact-header">
                        <h1 className="contact-title">Get In Touch</h1>
                        <p className="contact-subtitle">
                            Feel free to reach out for collaborations, opportunities, or just a tech conversation.
                        </p>
                    </div>

                    <div className="contact-content-grid">

                        {/* Left Column */}
                        <div className="contact-left">

                            <div className="contact-group">
                                <h3 className="contact-group-title">Contact Information</h3>

                                <div className="info-card">
                                    <div className="info-icon-box email-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                    </div>
                                    <div className="info-details">
                                        <span className="info-label">Email Address</span>
                                        <span className="info-value">johnkylodc12@gmail.com</span>
                                    </div>
                                </div>

                                <div className="info-card">
                                    <div className="info-icon-box location-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                    </div>
                                    <div className="info-details">
                                        <span className="info-label">Location</span>
                                        <span className="info-value">Bulacan, Philippines</span>
                                    </div>
                                </div>

                                <div className="info-card">
                                    <div className="info-icon-box time-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                    </div>
                                    <div className="info-details">
                                        <span className="info-label">Availability</span>
                                        <span className="info-value">Open for collaboration</span>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-group">
                                <h3 className="contact-group-title">Connect With Me</h3>
                                <div className="social-grid">
                                    <a href="https://www.linkedin.com/in/kylodc/" target="_blank" rel="noopener noreferrer" className="social-card linkedin">
                                        <span className="social-card-icon"><FaLinkedin /></span>
                                        <span className="social-card-name">LinkedIn</span>
                                        <span className="social-card-action">Click to connect</span>
                                    </a>
                                    <a href="https://www.facebook.com/jnkdc.wp/" target="_blank" rel="noopener noreferrer" className="social-card facebook">
                                        <span className="social-card-icon"><FaFacebook /></span>
                                        <span className="social-card-name">Facebook</span>
                                        <span className="social-card-action">Click to connect</span>
                                    </a>
                                    <a href="https://www.instagram.com/kylodc/" target="_blank" rel="noopener noreferrer" className="social-card instagram">
                                        <span className="social-card-icon"><FaInstagram /></span>
                                        <span className="social-card-name">Instagram</span>
                                        <span className="social-card-action">Click to connect</span>
                                    </a>
                                    <a href="mailto:johnkylodc12@gmail.com" className="social-card email">
                                        <span className="social-card-icon"><MdEmail /></span>
                                        <span className="social-card-name">Email</span>
                                        <span className="social-card-action">Click to connect</span>
                                    </a>
                                    <a href="https://github.com/kylodc" target="_blank" rel="noopener noreferrer" className="social-card github">
                                        <span className="social-card-icon"><FaGithub /></span>
                                        <span className="social-card-name">GitHub</span>
                                        <span className="social-card-action">Click to connect</span>
                                    </a>
                                </div>
                            </div>

                            <div className="create-together-box">
                                <h3 className="create-title">Let's Create Together</h3>
                                <p className="create-desc">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
                                <div className="response-time">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px' }}><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Response time: Usually within 24 hours
                                </div>
                            </div>

                        </div>

                        {/* Right Column */}
                        <div className="contact-right">
                            <div className="contact-form-container">
                                <h2 className="form-title">Send a Message</h2>
                                <p className="form-subtitle">Fill out the form below and I'll get back to you as soon as possible.</p>

                                <form className="contact-form">
                                    <div className="form-group">
                                        <label>Full Name *</label>
                                        <div className="input-wrapper">
                                            <span className="input-icon">👤</span>
                                            <input type="text" placeholder="Enter your full name" required />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Email Address *</label>
                                        <div className="input-wrapper">
                                            <span className="input-icon">✉️</span>
                                            <input type="email" placeholder="Enter your email address" required />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Subject</label>
                                        <div className="input-wrapper">
                                            <span className="input-icon">🏷️</span>
                                            <input type="text" placeholder="What is this regarding?" />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Message *</label>
                                        <div className="input-wrapper textarea-wrapper">
                                            <span className="input-icon" style={{ marginTop: '12px' }}>💬</span>
                                            <textarea placeholder="Tell me about your project or just say hello..." rows="5" required></textarea>
                                        </div>
                                    </div>

                                    <button type="submit" className="submit-btn">
                                        Send Message
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '8px' }}><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                                    </button>

                                    <p className="form-note">* Required fields. Your information will only be used to respond to your inquiry.</p>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
