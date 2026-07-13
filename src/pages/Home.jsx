import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  GraduationCap,
  Laptop,
  Sparkles,
  BookOpen,
  Heart,
  Clock,
  MapPin,
  Calendar,
  Quote,
  Star,
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
  Library,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import FloatingCourses from '../components/FloatingCourses'

import InteractiveStats from '../components/InteractiveStats'

const heroSlides = [
  {
    eyebrow: 'For Hundreds Of Successful Students Here',
    titleLine1: 'Education Is A',
    highlight: 'Backbone',
    titleLine2: 'Of Life',
    image: '/image/2024/489868029_1697889801036880_4011985048527441810_n.jpg',
  },
  {
    eyebrow: 'Premier Private Higher Education In Kandy',
    titleLine1: 'Unlock Your',
    highlight: 'Potential',
    titleLine2: 'At BMI Campus',
    image: '/image/2024/489877858_1697888831036977_1563440393688646331_n.jpg',
  },
  {
    eyebrow: 'BICT · BBA · MBA',
    titleLine1: 'Build A Career',
    highlight: 'That Matters',
    titleLine2: 'Starting Today',
    image: '/image/2025/625208406_1942789496546908_5697848532008759434_n.jpg',
  },
]

const heroCards = [
  {
    type: 'card',
    icon: GraduationCap,
    title: 'Learn Courses First',
    desc: 'Explore BICT, BBA, and MBA pathways built around real careers and industry needs.',
  },
  {
    type: 'image',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=800&auto=format&fit=crop',
  },
  {
    type: 'card',
    icon: Library,
    title: 'Book Library',
    desc: 'Access physical and virtual library resources across every faculty on campus.',
  },
]

const programs = [
  {
    tag: 'BICT',
    title: 'BICT (Hons) in Information and Communication Technology',
    desc: 'A hands-on foundation in networking, software development, database systems, and digital transformation.',
    duration: '3 Years',
    mode: 'Full-Time',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
  },
  {
    tag: 'BBA',
    title: 'BBA (Hons) in Business Administration',
    desc: 'Choose one of four pathways: HRM, Marketing, Accounting & Finance, or Hotel Tourism.',
    duration: '3 Years',
    mode: 'Full-Time',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=800&auto=format&fit=crop',
  },
  {
    tag: 'MBA',
    title: 'MBA in Business Management',
    desc: 'Postgraduate leadership study focused on strategy, finance, operations, and organizational growth.',
    duration: '1 Year',
    mode: 'Full-Time',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop',
  },
]

const events = [
  { date: '27', month: 'AUG', title: 'BMI Campus Open Day 2026', location: 'Main Campus, Kandy', time: '9:00am - 4:00pm' },
  { date: '02', month: 'SEP', title: 'AI & Data Science Info Session', location: 'Innovation Lab, Kandy', time: '10:00am - 12:00pm' },
  { date: '15', month: 'SEP', title: 'New Intake Orientation Day', location: 'Main Campus, Kandy', time: '9:00am - 1:00pm' },
]

const testimonials = [
  {
    name: 'Nadeesha Perera',
    role: 'BICT, 2025',
    quote:
      'The lecturers actually know the industry, not just the textbook. I had two internship offers before I even graduated.',
  },
  {
    name: 'Ashan Fernando',
    role: 'MBA, 2024',
    quote:
      'Small class sizes meant real feedback on every project. The AI labs here are genuinely well equipped.',
  },
  {
    name: 'Dilki Wickramasinghe',
    role: 'BBA, 2025',
    quote:
      'From day one it felt like they were preparing us for real jobs, not just exams. Kandy is also a beautiful place to study.',
  },
]

const faqs = [
  {
    q: 'What programs does BMI Campus offer?',
    a: 'We offer BICT, BBA, and MBA programs. The BBA program includes four specializations: HRM, Marketing, Accounting & Finance, and Hotel Tourism.',
  },
  {
    q: 'Are BMI Campus qualifications recognized?',
    a: 'Yes. BMI Campus is registered under the Ministry of Higher Education, Sri Lanka, and our programs follow globally recognized curriculum structures.',
  },
  {
    q: 'Does the campus offer internships or job placement support?',
    a: 'Our career services team works with local and international partners to connect students with internships and graduate roles throughout their studies.',
  },
  {
    q: 'How do I apply for the next intake?',
    a: 'You can apply online through our Contact page or visit the campus in Asgiriya, Kandy. Our admissions team will guide you through document submission and enrollment.',
  },
]

const FaqItem = ({ item, isOpen, onClick }) => (
  <div
    className={`border rounded-2xl overflow-hidden bg-white transition-colors ${
      isOpen ? 'border-accent/50 shadow-sm' : 'border-slate-200'
    }`}
  >
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
    >
      <span className={`font-semibold text-sm sm:text-base ${isOpen ? 'text-primary' : 'text-slate-900'}`}>
        {item.q}
      </span>
      <span
        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
          isOpen ? 'bg-primary text-white' : 'bg-primary/5 text-primary'
        }`}
      >
        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
      </span>
    </button>
    <motion.div
      initial={false}
      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.25 }}
      className="overflow-hidden"
    >
      <p className="px-6 pb-5 text-sm text-slate-500 leading-relaxed">{item.a}</p>
    </motion.div>
  </div>
)

const SectionEyebrow = ({ children, tone = 'light' }) => (
  <div className="inline-flex items-center gap-3 justify-center">
    <span className={`h-px w-8 ${tone === 'light' ? 'bg-primary/40' : 'bg-accent/60'}`} />
    <span
      className={`text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase ${
        tone === 'light' ? 'text-primary' : 'text-accent'
      }`}
    >
      {children}
    </span>
    <span className={`h-px w-8 ${tone === 'light' ? 'bg-primary/40' : 'bg-accent/60'}`} />
  </div>
)

// Rotating campus-seal badge — the page's signature element, echoing a
// university crest. Text runs along the circumference around a graduation cap.
const CampusSeal = ({ size = 128, className = '' }) => (
  <div className={`relative ${className}`} style={{ width: size, height: size }}>
    <motion.svg
      viewBox="0 0 200 200"
      className="w-full h-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
    >
      <defs>
        <path id="sealPath" d="M 100,100 m -82,0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0" />
      </defs>
      <circle cx="100" cy="100" r="98" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.35" />
      <text fontSize="10.5" fontWeight="700" letterSpacing="3.5" fill="currentColor">
        <textPath href="#sealPath" startOffset="0%">
          BMI CAMPUS • ESTABLISHED 2002 • KANDY SRI LANKA •
        </textPath>
      </text>
    </motion.svg>
    <div className="absolute inset-0 flex items-center justify-center">
      <GraduationCap size={size * 0.22} strokeWidth={1.5} />
    </div>
  </div>
)

const Home = () => {
  const [openFaq, setOpenFaq] = useState(0)
  const [heroIndex, setHeroIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const goToHero = (i) => setHeroIndex(i)
  const prevHero = () => setHeroIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  const nextHero = () => setHeroIndex((prev) => (prev + 1) % heroSlides.length)
  const slide = heroSlides[heroIndex]

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section — full-bleed background slider */}
      <section className="relative overflow-hidden h-[640px] sm:h-[680px]">
        {heroSlides.map((s, i) => (
          <div
            key={s.image}
            className={`absolute inset-0 transition-opacity duration-700 ${i === heroIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={s.image} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-slate-950/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" />
          </div>
        ))}

        {/* Prev / Next arrows */}
        <button
          onClick={prevHero}
          aria-label="Previous slide"
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center backdrop-blur transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextHero}
          aria-label="Next slide"
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white items-center justify-center backdrop-blur transition-colors"
        >
          <ChevronRight size={20} />
        </button>

        {/* Campus Seal — signature crest element */}
        <div className="hidden lg:block absolute top-8 right-8 z-[1] text-white/70">
          <CampusSeal size={112} />
        </div>

        <div className="relative z-[1] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            key={heroIndex}
            className="max-w-2xl space-y-6 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-3 text-xs sm:text-sm font-bold tracking-[0.2em] text-white/80 uppercase">
              <span className="h-px w-8 bg-accent" />
              {slide.eyebrow}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {slide.titleLine1} <span className="text-accent">{slide.highlight}</span>
              <br />
              {slide.titleLine2}
            </h1>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/courses"
                className="px-6 py-3.5 border-2 border-accent text-accent hover:bg-accent hover:text-slate-950 font-semibold text-sm rounded-xl text-center transition-all"
              >
                View Courses
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3.5 bg-accent text-slate-950 hover:bg-accent-dark hover:text-white font-semibold text-sm rounded-xl text-center shadow-lg shadow-accent/20 hover:-translate-y-0.5 transition-all"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Dot indicators */}
        <div className="absolute z-[1] bottom-24 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToHero(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === heroIndex ? 'w-6 bg-accent' : 'w-2 bg-white/50 hover:bg-white/80'}`}
            />
          ))}
        </div>
      </section>

      {/* Overlapping Feature Cards — sits on top of the hero/next-section boundary */}
      <section className="relative z-[2] -mt-20 sm:-mt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 rounded-3xl overflow-hidden shadow-premium">
          {heroCards.map((c, i) =>
            c.type === 'image' ? (
              <div key="img" className="hidden sm:block h-full min-h-[220px]">
                <img src={c.image} alt="Students at BMI Campus" className="w-full h-full object-cover" />
              </div>
            ) : (
              <motion.div
                key={c.title}
                className={`p-8 sm:p-10 flex flex-col justify-center ${i === 0 ? 'bg-primary' : 'bg-accent-dark'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <c.icon size={30} className="text-white mb-4" />
                <h3 className="text-white font-bold text-lg mb-2">{c.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{c.desc}</p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* Interactive Stats Section */}
      <section className="py-12 bg-slate-50 border-y border-slate-200/50">
        <InteractiveStats />
      </section>

      {/* Popular Programs Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.4] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
            backgroundSize: '22px 22px',
            color: '#e2e8f0',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mx-auto text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionEyebrow tone="light">Our Programs</SectionEyebrow>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4">Popular Programs</h2>
            <p className="text-slate-500 mt-4 text-sm sm:text-base">
              Four faculties, one goal — preparing you for a career that matters.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((p, i) => (
              <motion.div
                key={p.title}
                className="group rounded-3xl overflow-hidden border border-slate-100 bg-white shadow-sm hover:shadow-premium transition-all duration-300 hover:-translate-y-1.5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-[11px] font-bold text-primary">
                    {p.tag}
                  </span>
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <h3 className="font-bold text-slate-900 text-base leading-snug">{p.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
                  <div className="flex items-center gap-4 text-[11px] text-slate-400 pt-2 border-t border-slate-100">
                    <span className="flex items-center gap-1"><Clock size={12} /> {p.duration}</span>
                    <span className="flex items-center gap-1"><BookOpen size={12} /> {p.mode}</span>
                  </div>
                  <Link
                    to="/courses"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all mt-1"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future and Technology section */}
      

      {/* Upcoming Events Section */}
      {/* <section className="relative py-24 bg-slate-950 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
            backgroundSize: '22px 22px',
            color: '#ffffff',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mx-auto text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionEyebrow tone="dark">What's On</SectionEyebrow>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4">Upcoming Events</h2>
            <p className="text-slate-400 mt-4 text-sm sm:text-base">
              Open days, info sessions, and orientation dates worth marking on your calendar.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((e, i) => (
              <motion.div
                key={e.title}
                className="rounded-2xl bg-slate-900 border border-slate-800 hover:border-accent/40 p-6 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 shrink-0 rounded-xl bg-accent/10 text-accent flex flex-col items-center justify-center">
                    <span className="text-lg font-extrabold leading-none">{e.date}</span>
                    <span className="text-[10px] font-bold tracking-wide">{e.month}</span>
                  </div>
                  <h3 className="font-bold text-white text-sm leading-snug">{e.title}</h3>
                </div>
                <div className="space-y-2 text-xs text-slate-400">
                  <span className="flex items-center gap-2"><MapPin size={13} className="text-accent" /> {e.location}</span>
                  <span className="flex items-center gap-2"><Calendar size={13} className="text-accent" /> {e.time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mx-auto text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionEyebrow tone="light">Testimonials</SectionEyebrow>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4">What Our Students Say</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="relative overflow-hidden p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-premium transition-all duration-300 flex flex-col gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Quote className="absolute -top-2 -right-2 text-primary/5" size={110} strokeWidth={1} />
                <Quote className="relative text-accent/50" size={28} />
                <p className="relative text-slate-600 text-sm leading-relaxed flex-1">{t.quote}</p>
                <div className="relative flex items-center gap-1 text-accent-dark">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={13} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <div className="relative">
                  <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionEyebrow tone="light">FAQ</SectionEyebrow>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((item, i) => (
              <FaqItem
                key={item.q}
                item={item}
                isOpen={openFaq === i}
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-primary px-8 py-14 sm:px-16 sm:py-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute -right-10 -top-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="hidden sm:block absolute -left-6 -bottom-6 text-white/10">
              <CampusSeal size={160} />
            </div>
            <Heart className="relative mx-auto text-accent mb-4" size={32} />
            <h2 className="relative text-2xl sm:text-3xl font-extrabold text-white mb-3">Ready to start your journey?</h2>
            <p className="relative text-primary-light/80 text-sm sm:text-base max-w-xl mx-auto mb-8 text-white">
              Applications for the next intake are open. Talk to our admissions team and find the right program for you.
            </p>
            <Link
              to="/contact"
              className="relative inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary font-semibold text-sm rounded-xl hover:-translate-y-0.5 transition-all shadow-lg"
            >
              Apply Now
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sticky Floating Courses widget */}
      <FloatingCourses />
    </div>
  )
}

export default Home