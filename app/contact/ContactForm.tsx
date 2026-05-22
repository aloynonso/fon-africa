'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const INQUIRY_TYPES = ['Investor Relations', 'Partnership', 'Media · Press', 'Careers', 'General'];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    org: '',
    kind: 'Investor Relations',
    message: '',
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Wire up to API / CRM in production
    setSubmitted(true);
  };

  return (
    <section className="container-x py-16 border-t hairline-bone">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <span className="label">§ Office</span>
          <h2 className="serif text-3xl mt-6 mb-8">
            Father of Nations<br />
            <em className="italic">Holdings</em>
          </h2>
          <div className="space-y-6">
            <ContactItem label="Address" value={<>Sandton Central<br />Johannesburg, South Africa</>} />
            <ContactItem label="Investor Relations" value="investors@fon.africa" />
            <ContactItem label="Partnerships" value="partners@fon.africa" />
            <ContactItem label="Media" value="media@fon.africa" />
          </div>
        </div>

        <div className="lg:col-span-7">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border hairline-bone p-12 text-center"
              style={{ background: 'var(--ink-2)' }}
            >
              <div
                className="w-12 h-12 rounded-full mx-auto mb-6 flex items-center justify-center"
                style={{ background: 'var(--accent)' }}
              >
                <Check size={20} style={{ color: 'var(--ink)' }} />
              </div>
              <h3 className="serif text-3xl mb-4">Message received.</h3>
              <p style={{ color: 'var(--bone-2)' }}>
                Thank you. Our team will respond within two business days.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="Full Name">
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="form-input"
                  />
                </Field>
                <Field label="Email">
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="form-input"
                  />
                </Field>
              </div>
              <Field label="Organization">
                <input
                  value={form.org}
                  onChange={(e) => setForm({ ...form, org: e.target.value })}
                  className="form-input"
                />
              </Field>
              <Field label="Inquiry Type">
                <select
                  value={form.kind}
                  onChange={(e) => setForm({ ...form, kind: e.target.value })}
                  className="form-input"
                >
                  {INQUIRY_TYPES.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </Field>
              <Field label="Message">
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="form-input resize-none"
                />
              </Field>
              <button type="submit" className="btn-primary">
                Send Inquiry <ArrowRight size={14} />
              </button>
            </form>
          )}
        </div>
      </div>

      <style jsx>{`
        .form-input {
          width: 100%;
          background: transparent;
          border: 1px solid rgba(244, 239, 230, 0.15);
          color: var(--bone);
          padding: 14px 16px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          transition: border-color 0.3s;
          outline: none;
        }
        .form-input:focus {
          border-color: var(--accent);
        }
        select.form-input {
          appearance: none;
        }
        select.form-input option {
          background: var(--ink-2);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span
        className="mono text-[10px] tracking-[0.15em] uppercase mb-2 block"
        style={{ color: 'var(--accent)' }}
      >
        {label}
      </span>
      {children}
    </label>
  );
}

function ContactItem({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <div
        className="mono text-[10px] tracking-[0.15em] uppercase mb-1"
        style={{ color: 'var(--accent)' }}
      >
        {label}
      </div>
      <div style={{ color: 'var(--bone-2)' }}>{value}</div>
    </div>
  );
}
