import { motion } from 'framer-motion';
import {
  Printer,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowUp,
} from 'lucide-react';
import { navLinks, services } from '@/lib/data';
import { fadeUp } from '@/lib/animations';

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink-950 text-ink-300 overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
        >
          {/* Brand */}
          <div className="lg:col-span-1">
            <a
              href="#home"
              className="flex items-center gap-2.5 font-display text-xl font-bold text-white mb-4"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-500">
                <Printer className="h-5 w-5" />
              </span>
              GK Printers
            </a>
            <p className="text-sm leading-relaxed text-ink-400 max-w-xs">
              Bringing Your Ideas to Print. Professional printing with
              precision, quality, and care.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-800 text-ink-400 hover:bg-accent-500 hover:text-white transition-all duration-300"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white mb-4">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-400 hover:text-accent-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {services.slice(0, 6).map((service) => (
                <li key={service.title}>
                  <a
                    href="#services"
                    className="text-sm text-ink-400 hover:text-accent-500 transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white mb-4">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-accent-500 shrink-0" />
                <span className="text-sm text-ink-400">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-accent-500 shrink-0" />
                <span className="text-sm text-ink-400">hello@gkprinters.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-accent-500 shrink-0" />
                <span className="text-sm text-ink-400">
                  123 Print Street, Design District, City - 456789
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-ink-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-ink-500">
            &copy; {new Date().getFullYear()} GK Printers. All rights reserved.
          </p>
          <a
            href="#home"
            className="flex items-center gap-2 text-sm text-ink-400 hover:text-accent-500 transition-colors"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink-800 hover:bg-accent-500 hover:text-white transition-all duration-300">
              <ArrowUp className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
