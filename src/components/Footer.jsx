import React from 'react'
import { Link } from 'react-router-dom'
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ExternalLink,
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-slate-950 text-slate-300">
      {/* Decorative top edge */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-primary" />

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
        {/* Column 1: Logo & About */}
        <div className="lg:col-span-5 space-y-6">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.jpg" alt="BMI Campus Logo" className="h-12 w-auto rounded-lg brightness-110" />
            <span className="flex flex-col leading-tight border-l border-slate-800 pl-3">
              <span className="text-[10px] font-bold tracking-[0.15em] text-accent uppercase">Est. 2015</span>
              <span className="text-[11px] text-slate-500">Kandy, Sri Lanka</span>
            </span>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            BMI Campus  established in 2015 in the historic city of Kandy, is one of Sri
            Lanka's premier private higher education institutions, offering world-class academic programs.
          </p>
          <div className="flex space-x-3">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-accent hover:border-accent transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={16} />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-accent hover:border-accent transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={16} />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-accent hover:border-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-accent hover:border-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-accent hover:border-accent transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={16} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="lg:col-span-3">
          <h3 className="text-white font-semibold text-lg mb-6 border-l-4 border-accent pl-3">Quick Links</h3>
          <div className="space-y-3.5 text-sm">
            <Link to="/" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <span className="text-accent transition-transform group-hover:translate-x-0.5">›</span> Home
            </Link>
            <Link to="/about" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <span className="text-accent transition-transform group-hover:translate-x-0.5">›</span> About Us
            </Link>
            <Link to="/courses" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <span className="text-accent transition-transform group-hover:translate-x-0.5">›</span> Courses
            </Link>
            <Link to="/gallery" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <span className="text-accent transition-transform group-hover:translate-x-0.5">›</span> Gallery
            </Link>
            <Link to="/contact" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <span className="text-accent transition-transform group-hover:translate-x-0.5">›</span> Contact
            </Link>
            <Link to="/student" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
              <span className="text-accent transition-transform group-hover:translate-x-0.5">›</span> Student
            </Link>
          </div>
        </div>

        {/* Column 3: Contact Info & Map */}
        <div className="lg:col-span-4 space-y-6">
          <h3 className="text-white font-semibold text-lg border-l-4 border-accent pl-3">Contact Us</h3>
          <div className="space-y-3.5 text-sm">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 shrink-0 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
                <MapPin size={14} className="text-accent" />
              </span>
              <span className="text-slate-400 pt-1.5">No 14, Asgiriya Road, Kandy, Sri Lanka</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 shrink-0 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
                <Phone size={14} className="text-accent" />
              </span>
              <span className="text-slate-400">081 292 2046</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 shrink-0 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
                <Mail size={14} className="text-accent" />
              </span>
              <span className="text-slate-400">bmikandy@gmail.com</span>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden h-28 w-full bg-slate-900 border border-slate-800 hover:border-accent/40 transition-colors">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2">
              <MapPin size={22} className="text-accent animate-bounce mb-1" />
              <span className="text-xs text-white font-medium">Asgiriya, Kandy</span>
              <a
                href="https://maps.google.com/?q=No+14,+Asgiriya+Road,+Kandy,+Sri+Lanka"
                target="_blank"
                rel="noreferrer"
                className="text-[10px] text-accent hover:underline flex items-center gap-1 mt-1"
              >
                View on Google Maps
                <ExternalLink size={8} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sub Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8 border-t border-slate-900 text-center">
        <p className="text-xs text-slate-500">
          &copy; {currentYear} BMI Campus. All rights reserved. Registered under Ministry of Higher Education Sri Lanka.
        </p>
      </div>
    </footer>
  )
}

export default Footer