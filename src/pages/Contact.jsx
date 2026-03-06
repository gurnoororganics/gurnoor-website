import { useState } from 'react';
import useFadeUp from '../hooks/useFadeUp';
import './Contact.css';

const faqs = [
  { q: 'Do you deliver outside Punjab?',                    a: 'Yes. We deliver across India. Reach out via the form or WhatsApp and we\'ll confirm delivery timelines and costs to your location.' },
  { q: 'What is your minimum order quantity?',              a: 'We cater to both household and bulk orders. There is no strict minimum for household orders. For wholesale or bulk enquiries, contact us and we\'ll discuss pricing.' },
  { q: 'How do I know the produce is truly pesticide-free?',a: 'We welcome visitors to our farm. We also document our farming practices and are happy to share details on request. Our entire process is traceable end-to-end.' },
  { q: 'How long does delivery take?',                      a: 'Typically 3–7 days depending on your location. Local (Punjab) deliveries are often faster. We\'ll give you a tracking update once your order is dispatched.' },
  { q: 'Can I return or exchange my order?',                a: 'If you\'re unsatisfied for any reason, contact us within 48 hours of receiving your order. We stand behind everything we send and will make it right.' },
];

const WA_NUMBER = '918699489288';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', interest: '', message: '' });

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', phone: '', email: '', interest: '', message: '' });
    setTimeout(() => setSubmitted(false), 6000);
  };

  const infoRef = useFadeUp();
  const faqRef  = useFadeUp();

  return (
    <>
      <div className="contact-page">

        {/* LEFT: INFO */}
        <div className="contact-info-panel fade-up" ref={infoRef}>
          <p className="contact-eyebrow">Get in Touch</p>
          <h1 className="contact-heading">
            Order Direct.<br /><em>Talk to the Farmer.</em>
          </h1>
          <p className="contact-subtext">
            No call centres, no bots. When you reach out to Gurnoor, you're speaking directly
            to the family that grew your food.
          </p>

          <div className="contact-details">
            {[
              { icon: '📱', label: 'WhatsApp',      value: <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noreferrer">+91 86994 89288</a> },
              { icon: '📞', label: 'Owner Mobile',  value: <a href="tel:+918360560877">+91 83605 60877</a> },
              { icon: '✉️', label: 'Email',          value: <a href="mailto:gurnoor.organics@gmail.com">gurnoor.organics@gmail.com</a> },
              { icon: '📍', label: 'Address',        value: 'Shop No. 4, Venus Valley, Salempur (Musalmana), Jalandhar, Punjab' },
              { icon: '🕐', label: 'Response Time',  value: 'Within 24 hours' },
            ].map(d => (
              <div className="contact-detail" key={d.label}>
                <div className="detail-icon">{d.icon}</div>
                <div>
                  <div className="detail-label">{d.label}</div>
                  <div className="detail-value">{d.value}</div>
                </div>
              </div>
            ))}
          </div>

          <a
            className="whatsapp-btn"
            href={`https://wa.me/${WA_NUMBER}?text=Hi%2C%20I%20want%20to%20order%20from%20Gurnoor%20Organics`}
            target="_blank" rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        {/* RIGHT: FORM */}
        <div className="contact-form-panel">
          <div className="form-heading">Send Us a Message</div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input className="form-input" name="name" value={form.name} onChange={handleChange} placeholder="Amrit Singh" required />
              </div>
              <div className="form-group">
                <label className="form-label">Phone / WhatsApp</label>
                <input className="form-input" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" type="tel" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input className="form-input" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" type="email" />
            </div>
            <div className="form-group">
              <label className="form-label">I'm Interested In</label>
              <select className="form-select" name="interest" value={form.interest} onChange={handleChange}>
                <option value="">Select a product or topic…</option>
                <option value="grains">Grains &amp; Pulses (Wheat, Lentils, Chickpeas)</option>
                <option value="spices">Whole Spices</option>
                <option value="jaggery">Pure Jaggery</option>
                <option value="bulk">Bulk / Wholesale Enquiry</option>
                <option value="other">General Question</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-textarea" name="message" value={form.message} onChange={handleChange} placeholder="Tell us what you'd like to order, or ask us anything…" />
            </div>
            {submitted && (
              <div className="form-success">✅ Thanks! We'll get back to you within 24 hours. Check your WhatsApp too!</div>
            )}
            <button className="form-submit" type="submit">Send Message 🌾</button>
          </form>
        </div>
      </div>

      {/* FAQ */}
      <section className="faq-section">
        <p className="section-label fade-up" ref={faqRef}>FAQ</p>
        <h2 className="section-heading">Common Questions</h2>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div className={`faq-item ${openFaq === i ? 'open' : ''}`} key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
              <div className="faq-question">
                {f.q}
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-answer">{f.a}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}