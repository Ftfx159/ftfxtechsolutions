'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Navigation, MessageCircle } from 'lucide-react';
import styles from './Contact.module.css';
import SectionHeading from '../ui/SectionHeading';
import MagneticButton from '../ui/MagneticButton';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Data Recovery',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Service Request: ${formData.service}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService Required: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:Support@ftfxtechsolutions.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <SectionHeading 
          title="Get in Touch" 
          subtitle="Ready to experience premium technical support? Contact our team today."
          centered
        />

        <div className={styles.grid}>
          {/* Left: Contact Form */}
          <motion.div 
            className={styles.formContainer}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Mokshit Parashar" value={formData.name} onChange={handleChange} required />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="mokshit@example.com" value={formData.email} onChange={handleChange} required />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="service">Service Required</label>
                <select id="service" value={formData.service} onChange={handleChange}>
                  <option value="Data Recovery">Data Recovery</option>
                  <option value="IT Support">IT Support</option>
                  <option value="Website Design">Website Design</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={4} placeholder="Describe your issue..." value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <MagneticButton variant="primary" className={styles.submitBtn}>
                Send Message
              </MagneticButton>
            </form>
          </motion.div>

          {/* Right: Company Details & Map */}
          <motion.div 
            className={styles.infoContainer}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.infoCard}>
              <h3 className={styles.companyName}>FTFx Tech Solutions</h3>
              
              <ul className={styles.detailsList}>
                <li>
                  <Mail className={styles.icon} size={20} />
                  <a href="mailto:Support@ftfxtechsolutions.com" className="hover-target">Support@ftfxtechsolutions.com</a>
                </li>
                <li>
                  <Phone className={styles.icon} size={20} />
                  <a href="tel:08595691335" className="hover-target">08595691335</a>
                </li>
                <li>
                  <MapPin className={styles.icon} size={20} />
                  <span>Shop No. 159, Anand Garden,<br />Near Railway Station,<br />Gurgaon, Haryana 122001</span>
                </li>
              </ul>

              <div className={styles.actionButtons}>
                <MagneticButton 
                  variant="secondary" 
                  className={styles.actionBtn}
                  onClick={() => window.open('https://wa.me/918595691335', '_blank')}
                >
                  <MessageCircle size={18} color="#25D366" style={{ filter: 'drop-shadow(0px 2px 4px rgba(37, 211, 102, 0.5))' }} /> WhatsApp
                </MagneticButton>
                <MagneticButton 
                  variant="secondary" 
                  className={styles.actionBtn}
                  onClick={() => window.location.href = 'tel:08595691335'}
                >
                  <Phone size={18} color="#3b82f6" style={{ filter: 'drop-shadow(0px 2px 4px rgba(59, 130, 246, 0.5))' }} /> Call Now
                </MagneticButton>
                <MagneticButton 
                  variant="secondary" 
                  className={styles.actionBtn}
                  onClick={() => window.open('https://www.google.com/maps/dir/?api=1&destination=FTFX+TECH+SOLUTIONS+(OPC)+PRIVATE+LIMITED,+Shop+No.+159,+Anand+Garden,+Near+Railway+Station,+Gurgaon,+Haryana+122001', '_blank')}
                >
                  <Navigation size={18} color="#ef4444" style={{ filter: 'drop-shadow(0px 2px 4px rgba(239, 68, 68, 0.5))' }} /> Directions
                </MagneticButton>
              </div>
            </div>

            {/* Interactive 3D/Satellite Map */}
            <div className={styles.mapContainer}>
              <iframe 
                src="https://maps.google.com/maps?q=FTFX%20TECH%20SOLUTIONS%20(OPC)%20PRIVATE%20LIMITED,%20Shop%20No.%20159,%20Anand%20Garden,%20Near%20Railway%20Station,%20Gurgaon,%20Haryana%20122001&t=k&z=18&ie=UTF8&iwloc=&output=embed" 
                className={styles.mapIframe}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
