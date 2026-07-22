'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, CheckCircle } from 'lucide-react';
import styles from './EvaluationForm.module.css';
import MagneticButton from '@/components/ui/MagneticButton';

export default function EvaluationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState('');
  
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    // Check form validity
    if (!formRef.current.reportValidity()) return;
    setIsSubmitting(true);
    
    const formData = new FormData(formRef.current);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const service = formData.get('service') as string;
    const urgency = formData.get('urgency') as string;
    const description = formData.get('description') as string;

    const subject = encodeURIComponent(`Free Evaluation Request: ${service} (${urgency})`);
    const body = encodeURIComponent(
      `New Evaluation Request\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nService Required: ${service}\nUrgency Level: ${urgency}\n\nDetailed Description:\n${description}`
    );
    
    // Open email client
    window.location.href = `mailto:Support@ftfxtechsolutions.com?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    // Check form validity before sending to WA
    if (!formRef.current.reportValidity()) return;

    const formData = new FormData(formRef.current);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const service = formData.get('service') as string;
    const urgency = formData.get('urgency') as string;
    const description = formData.get('description') as string;

    const message = encodeURIComponent(
      `*New Evaluation Request*\n\n*Name:* ${name}\n*Email:* ${email}\n*Phone:* ${phone}\n*Service:* ${service}\n*Urgency:* ${urgency}\n*Description:* ${description}`
    );
    const whatsappUrl = `https://wa.me/918595691335?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  if (submitted) {
    return (
      <motion.div 
        className={styles.formContainer}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.successMessage}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
          >
            <CheckCircle size={64} className={styles.successIcon} />
          </motion.div>
          <h2 className={styles.successTitle}>Request Received!</h2>
          <p className={styles.successText}>
            Thank you for reaching out. Our engineering team is reviewing your details and will contact you shortly with your free evaluation and quote.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className={styles.formContainer}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className={styles.formGrid}>
          
          <div className={styles.inputGroup}>
            <label className={styles.label}>Full Name</label>
            <input type="text" name="name" required className={styles.input} placeholder="Mokshit Parashar" />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Email Address</label>
            <input type="email" name="email" required className={styles.input} placeholder="mokshit@example.com" />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Phone Number</label>
            <input type="tel" name="phone" required className={styles.input} placeholder="+1 (555) 000-0000" />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Service Required</label>
            <select name="service" required className={styles.select} defaultValue="">
              <option value="" disabled>Select a category...</option>
              <option value="data-recovery">Data Recovery</option>
              <option value="it-support">Troubleshoot & IT Support</option>
              <option value="web-design">Website Design</option>
              <option value="other">Other / General Inquiry</option>
            </select>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Urgency Level</label>
            <select name="urgency" required className={styles.select} defaultValue="normal">
              <option value="normal">Normal (Standard Processing)</option>
              <option value="urgent">Urgent (Expedited Processing)</option>
              <option value="critical">Critical (Emergency 24/7 Response)</option>
            </select>
          </div>

          <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
            <label className={styles.label}>Detailed Description</label>
            <textarea 
              name="description"
              required 
              className={styles.textarea} 
              placeholder="Please describe the issue you are facing or the project requirements in detail..." 
            />
          </div>

          <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
            <label className={styles.label}>Attach Screenshot or Photo (Optional)</label>
            <label className={styles.fileUploadArea}>
              <input type="file" style={{ display: 'none' }} onChange={handleFileChange} />
              <UploadCloud size={32} className={styles.fileIcon} />
              <span className={styles.fileText}>
                {fileName ? `Attached: ${fileName}` : "Click to upload or drag and drop"}
              </span>
            </label>
          </div>

        </div>

        <div className={styles.submitWrapper} style={{ gap: '16px', flexWrap: 'wrap' }}>
          <MagneticButton variant="primary" type="submit">
            {isSubmitting ? 'Sending Request...' : 'Submit Request'}
          </MagneticButton>
          <MagneticButton variant="secondary" onClick={handleWhatsApp}>
            Send via WhatsApp
          </MagneticButton>
        </div>
      </form>
    </motion.div>
  );
}
