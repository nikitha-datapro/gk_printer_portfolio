import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from 'lucide-react';
import { serviceOptions } from '@/lib/data';
import { slideRight, slideLeft, staggerContainer, staggerItem } from '@/lib/animations';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+91 98765 43210' },
  { icon: Mail, label: 'Email', value: 'hello@gkprinters.com' },
  { icon: MapPin, label: 'Address', value: '123 Print Street, Design District, City - 456789' },
  { icon: Clock, label: 'Business Hours', value: 'Mon – Sat: 9:00 AM – 7:00 PM' },
];

type Errors = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

function FloatingField({
  id,
  label,
  type = 'text',
  value,
  onChange,
  error,
  placeholder,
  isTextarea,
  isSelect,
  options,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  error?: string;
  placeholder?: string;
  isTextarea?: boolean;
  isSelect?: boolean;
  options?: string[];
}) {
  const hasValue = value.length > 0;
  const baseClass = `peer w-full rounded-xl border bg-white px-4 pt-6 pb-2 text-sm text-ink-900 placeholder:text-transparent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-500/20 ${
    error ? 'border-red-400' : 'border-ink-200 focus:border-accent-500'
  }`;

  return (
    <div className="relative">
      {isTextarea ? (
        <textarea
          id={id}
          name={id}
          rows={4}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${baseClass} resize-none`}
        />
      ) : isSelect ? (
        <select
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          className={`${baseClass} appearance-none cursor-pointer ${hasValue ? '' : 'text-transparent'}`}
        >
          <option value="">Select a service</option>
          {options?.map((opt) => (
            <option key={opt} value={opt} className="text-ink-900">
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={baseClass}
        />
      )}
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 transition-all duration-200 ${
          hasValue || isSelect
            ? 'top-2 text-[0.7rem] font-semibold uppercase tracking-wider text-accent-500'
            : 'top-4 text-sm text-ink-400'
        } peer-focus:top-2 peer-focus:text-[0.7rem] peer-focus:font-semibold peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-accent-500`}
      >
        {label}
      </label>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim()) {
      e.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address';
    }
    if (!form.phone.trim()) {
      e.phone = 'Please enter your phone number';
    } else if (!/^[+\d\s()-]{7,}$/.test(form.phone)) {
      e.phone = 'Please enter a valid phone number';
    }
    if (!form.service) e.service = 'Please select a service';
    if (!form.message.trim()) e.message = 'Please tell us about your project';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof Errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-36 bg-gradient-to-b from-[#faf9f7] to-[#f5f3ef]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20">
          {/* Left — info */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <span className="inline-block text-sm font-semibold tracking-[0.2em] uppercase text-accent-500 mb-5">
              Get In Touch
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.02em] text-ink-900 text-balance">
              Let's Create Something Great.
            </h2>
            <p className="mt-6 text-lg text-ink-500 max-w-md leading-relaxed">
              Share your print requirements and we'll get back to you with a
              quote and timeline.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="mt-10 flex flex-col gap-px"
            >
              {contactInfo.map((info) => (
                <motion.div
                  key={info.label}
                  variants={staggerItem}
                  className="group flex items-center gap-5 py-5 border-b border-ink-100 transition-all duration-300"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink-50 text-accent-500 transition-all duration-300 group-hover:bg-accent-500 group-hover:text-white">
                    <info.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink-400">
                      {info.label}
                    </p>
                    <p className="text-base font-medium text-ink-900 mt-0.5">
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white border border-ink-100 p-6 sm:p-8 shadow-xl shadow-ink-900/5"
              noValidate
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <FloatingField
                  id="name"
                  label="Name"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                  placeholder="Your full name"
                />
                <FloatingField
                  id="email"
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="you@example.com"
                />
                <FloatingField
                  id="phone"
                  label="Phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  placeholder="+91 98765 43210"
                />
                <FloatingField
                  id="service"
                  label="Service"
                  value={form.service}
                  onChange={handleChange}
                  error={errors.service}
                  isSelect
                  options={serviceOptions}
                />
              </div>

              <div className="mt-4">
                <FloatingField
                  id="message"
                  label="Message"
                  value={form.message}
                  onChange={handleChange}
                  error={errors.message}
                  placeholder="Tell us about your print requirements..."
                  isTextarea
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-7 py-4 text-base font-semibold text-white shadow-lg shadow-accent-500/25 transition-colors hover:bg-accent-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-offset-2"
              >
                <Send className="h-4 w-4" />
                Request a Quote
              </motion.button>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center gap-2 rounded-xl bg-green-50 border border-green-200 px-4 py-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                  <p className="text-sm font-medium text-green-700">
                    Thank you! Your request has been received. We'll be in touch shortly.
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
