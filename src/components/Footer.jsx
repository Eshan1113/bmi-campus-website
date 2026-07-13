import React, { useState } from 'react'
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
  Globe,
  ExternalLink,
  ArrowRight,
  Calendar,
  Clock,
} from 'lucide-react'

const upcomingEvents = [
  { date: '27 Aug', title: 'Open Day 2026', time: '9am - 4pm' },
  { date: '02 Sep', title: 'AI & Data Science Info Session', time: '10am - 12pm' },
  { date: '15 Sep', title: 'New Intake Orientation', time: '9am - 1pm' },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="relative bg-slate-950 text-slate-300">
      {/* Decorative top edge */}
      <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-primary" />

      {/* Newsletter Strip */}
      <div className="relative border-b border-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            color: '#ffffff',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <h3 className="text-white font-bold text-xl">Subscribe to our newsletter</h3>
            <p className="text-slate-400 text-sm mt-1">
              Get the latest on new courses, open days, and campus news.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="flex w-full max-w-md gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="px-5 py-3 bg-accent text-slate-950 font-semibold text-sm rounded-xl hover:bg-accent-dark hover:text-white transition-colors flex items-center gap-2 shrink-0"
            >
              Subscribe
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>

      {subscribed && (
        <p className="text-center text-xs text-accent pb-4 bg-slate-950 relative">Thanks for subscribing! Check your inbox to confirm.</p>
      )}

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1: Logo & About */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo_neww.png" alt="BMI Campus Logo" className="h-12 w-auto brightness-110" />
            <span className="flex flex-col leading-tight border-l border-slate-800 pl-3">
              <span className="text-[10px] font-bold tracking-[0.15em] text-accent uppercase">Est. 2002</span>
              <span className="text-[11px] text-slate-500">Kandy, Sri Lanka</span>
            </span>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed">
            BMI Campus (formerly IBA Campus), established in 2002 in the historic city of Kandy, is one of Sri
            Lanka's premier private higher education institutions, offering world-class academic programs.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-accent transition-colors p-2 bg-slate-900 hover:bg-slate-800 rounded-full" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-accent transition-colors p-2 bg-slate-900 hover:bg-slate-800 rounded-full" aria-label="Twitter">
              <Twitter size={18} />
            </a>
            <a href="#" className="hover:text-accent transition-colors p-2 bg-slate-900 hover:bg-slate-800 rounded-full" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="#" className="hover:text-accent transition-colors p-2 bg-slate-900 hover:bg-slate-800 rounded-full" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="hover:text-accent transition-colors p-2 bg-slate-900 hover:bg-slate-800 rounded-full" aria-label="YouTube">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6 border-l-4 border-accent pl-3">Quick Links</h3>
          <div className="space-y-3 text-sm">
            <Link to="/" className="flex items-center gap-2 hover:text-white transition-colors">
              <span className="text-accent">›</span> Home
            </Link>
            <Link to="/about" className="flex items-center gap-2 hover:text-white transition-colors">
              <span className="text-accent">›</span> About Us
            </Link>
            <Link to="/courses" className="flex items-center gap-2 hover:text-white transition-colors">
              <span className="text-accent">›</span> Courses
            </Link>
            <Link to="/gallery" className="flex items-center gap-2 hover:text-white transition-colors">
              <span className="text-accent">›</span> Gallery
            </Link>
            <Link to="/contact" className="flex items-center gap-2 hover:text-white transition-colors">
              <span className="text-accent">›</span> Contact
            </Link>
          </div>

          <h3 className="text-white font-semibold text-lg mt-8 mb-4 border-l-4 border-accent pl-3">Faculties</h3>
          <div className="space-y-3 text-sm">
            <Link to="/courses" className="flex items-center gap-2 hover:text-white transition-colors">
              <span className="text-accent">›</span> Computing
            </Link>
            <Link to="/courses" className="flex items-center gap-2 hover:text-white transition-colors">
              <span className="text-accent">›</span> AI &amp; Data Science
            </Link>
            <Link to="/courses" className="flex items-center gap-2 hover:text-white transition-colors">
              <span className="text-accent">›</span> Business
            </Link>
            <Link to="/courses" className="flex items-center gap-2 hover:text-white transition-colors">
              <span className="text-accent">›</span> Hospitality
            </Link>
          </div>
        </div>

        {/* Column 3: Upcoming Events */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-6 border-l-4 border-accent pl-3">Upcoming Events</h3>
          <div className="space-y-5">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="flex gap-4">
                <div className="shrink-0 w-14 h-14 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center">
                  <Calendar size={14} className="text-accent mb-0.5" />
                  <span className="text-[10px] font-semibold text-slate-300">{event.date}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-200 leading-snug">{event.title}</p>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                    <Clock size={11} /> {event.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <a href="#" className="inline-flex items-center gap-1.5 text-xs text-accent hover:underline mt-5">
            <Globe size={12} /> Student Portal <ExternalLink size={11} className="text-slate-500" />
          </a>
        </div>

        {/* Column 4: Contact Info & Map */}
        <div className="space-y-6">
          <h3 className="text-white font-semibold text-lg border-l-4 border-accent pl-3">Contact Us</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start space-x-3">
              <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
              <span className="text-slate-400">No 14, Asgiriya Road, Kandy, Sri Lanka</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={16} className="text-accent shrink-0" />
              <span className="text-slate-400">081 220 0932 / 081 220 0933</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={16} className="text-accent shrink-0" />
              <span className="text-slate-400">info@iba.lk</span>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden h-28 w-full bg-slate-900 border border-slate-800 hover:border-accent/40 transition-colors">
            <div className="absolute inset-0 bg-slate-900 flex flex-col items-center justify-center text-center p-2">
              <MapPin size={24} className="text-accent animate-bounce mb-1" />
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 pt-8 pb-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
        <div>
          &copy; {currentYear} BMI Campus. All rights reserved. Registered under Ministry of Higher Education Sri Lanka.
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-400 transition-colors">Terms &amp; Conditions</a>
          <a href="#" className="hover:text-slate-400 transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer