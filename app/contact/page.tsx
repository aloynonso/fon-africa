import type { Metadata } from 'next';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact · Begin a Dialogue',
  description:
    'Connect with Father of Nations · investor relations, partnerships, media, and general inquiries.',
};

export default function ContactPage() {
  return (
    <>
      <section className="container-x pt-40 pb-16">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-px" style={{ background: 'var(--accent)' }} />
          <span className="label">§ Contact</span>
        </div>
        <h1 className="serif font-light leading-[0.95] text-[clamp(48px,8vw,128px)] max-w-[1400px] mb-12">
          Begin a<br />
          <em className="italic accent-text font-normal">dialogue</em>.
        </h1>
      </section>

      <ContactForm />
    </>
  );
}
