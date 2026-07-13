import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Globe,
  Search,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [coursesOpen, setCoursesOpen] = useState(false)
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const location = useLocation()

  // Close mobile drawer whenever the route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Student', path: '/student' },
    { name: 'Contact', path: '/contact' },
  ]

  const faculties = [
    { name: 'BICT', path: '/courses' },
    { name: 'BBA', path: '/courses' },
    { name: 'MBA', path: '/courses' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Utility Bar */}
      <div className="hidden md:block bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-11 flex items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-slate-500">
              <span className="w-6 h-6 rounded-full bg-slate-100 text-primary flex items-center justify-center">
                <MapPin size={12} />
              </span>
              No 14, Asgiriya Road, Kandy, Sri Lanka
            </span>
            <a href="mailto:bmikandy@gmail.com" className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors">
              <span className="w-6 h-6 rounded-full bg-slate-100 text-primary flex items-center justify-center">
                <Mail size={12} />
              </span>
              bmikandy@gmail.com
            </a>
            <a href="tel:0812922046" className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors">
              <span className="w-6 h-6 rounded-full bg-slate-100 text-primary flex items-center justify-center">
                <Phone size={12} />
              </span>
              081 292 2046
            </a>
          </div>

          <div className="flex items-center gap-5">
            <button className="flex items-center gap-1.5 text-slate-500 hover:text-primary transition-colors">
              <span className="w-6 h-6 rounded-full bg-slate-100 text-primary flex items-center justify-center">
                <Globe size={12} />
              </span>
              English
              <ChevronDown size={12} />
            </button>
            <div className="flex items-center gap-2 border-l border-slate-200 pl-4">
              <a href="#" aria-label="Facebook" className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
                <Facebook size={13} />
              </a>
              <a href="#" aria-label="Twitter" className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
                <Twitter size={13} />
              </a>
              <a href="#" aria-label="Instagram" className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
                <Instagram size={13} />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-7 h-7 rounded-full bg-slate-100 text-slate-500 hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
                <Linkedin size={13} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav — solid color bar with an overlapping logo card */}
      <motion.nav
        className="relative bg-primary shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo card — overlaps the top bar / color bar seam on desktop */}
            <Link
              to="/"
              className="relative z-10 flex items-center gap-3 bg-white rounded-b-xl md:rounded-xl shadow-lg px-4 py-3 md:-mt-2 md:mb-[-14px]"
            >
              <img src="/logo.jpg" alt="BMI Campus" className="h-7 w-auto object-contain" />
              <span className="hidden sm:flex flex-col leading-tight border-l border-slate-200 pl-3">
                <span className="text-[10px] font-bold tracking-[0.15em] text-accent-dark uppercase">Est. 2002</span>
                <span className="text-[11px] text-slate-400">Kandy, Sri Lanka</span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.slice(0, 2).map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-4 py-6 text-sm font-bold tracking-wide uppercase transition-colors ${
                    isActive(item.path) ? 'text-white' : 'text-white/75 hover:text-white'
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.span
                      layoutId="activeNavUnderline"
                      className="absolute left-4 right-4 bottom-4 h-[3px] bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}

              {/* Courses Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setCoursesOpen(true)}
                onMouseLeave={() => setCoursesOpen(false)}
              >
                <Link
                  to="/courses"
                  className={`relative px-4 py-6 text-sm font-bold tracking-wide uppercase transition-colors flex items-center gap-1 ${
                    isActive('/courses') ? 'text-white' : 'text-white/75 hover:text-white'
                  }`}
                >
                  Courses
                  <ChevronDown size={13} className={`transition-transform duration-200 ${coursesOpen ? 'rotate-180' : ''}`} />
                  {isActive('/courses') && (
                    <motion.span
                      layoutId="activeNavUnderline"
                      className="absolute left-4 right-4 bottom-4 h-[3px] bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {coursesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-1 w-64"
                    >
                      <div className="bg-white rounded-xl shadow-premium border border-slate-100 p-2 overflow-hidden">
                        {faculties.map((f) => (
                          <Link
                            key={f.name}
                            to={f.path}
                            className="flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-slate-600 hover:bg-primary/5 hover:text-primary transition-colors"
                          >
                            {f.name}
                            <ChevronRight size={14} className="text-slate-300" />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navItems.slice(2).map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-4 py-6 text-sm font-bold tracking-wide uppercase transition-colors ${
                    isActive(item.path) ? 'text-white' : 'text-white/75 hover:text-white'
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.span
                      layoutId="activeNavUnderline"
                      className="absolute left-4 right-4 bottom-4 h-[3px] bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Search box (desktop) */}
            <div className="hidden md:block shrink-0">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center border border-white/40 rounded-lg overflow-hidden focus-within:border-white transition-colors"
              >
                <input
                  type="text"
                  placeholder="Search"
                  className="w-40 lg:w-52 bg-transparent px-3 py-2.5 text-sm text-white placeholder:text-white/60 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Search"
                  className="px-3 py-2.5 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Search size={16} />
                </button>
              </form>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-1">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle search"
              >
                <Search size={20} />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-white/10"
            >
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center px-4 py-3 gap-2">
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 bg-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/60 focus:outline-none"
                />
                <button type="submit" aria-label="Search" className="p-2.5 rounded-lg bg-white/10 text-white">
                  <Search size={16} />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/10 bg-primary-dark overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navItems.slice(0, 2).map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                      isActive(item.path) ? 'bg-white/10 text-white' : 'text-white/75 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronRight size={16} />
                  </Link>
                ))}

                {/* Mobile Courses Accordion */}
                <div>
                  <button
                    onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                      isActive('/courses') ? 'bg-white/10 text-white' : 'text-white/75 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>Courses</span>
                    <ChevronDown size={16} className={`transition-transform ${mobileCoursesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {mobileCoursesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 overflow-hidden"
                      >
                        {faculties.map((f) => (
                          <Link
                            key={f.name}
                            to={f.path}
                            className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white/60 hover:text-white"
                          >
                            <ChevronRight size={12} />
                            {f.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {navItems.slice(2).map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                      isActive(item.path) ? 'bg-white/10 text-white' : 'text-white/75 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronRight size={16} />
                  </Link>
                ))}

                {/* Mobile utility info */}
                <div className="pt-3 mt-3 border-t border-white/10 space-y-2 text-xs text-white/60">
                  <span className="flex items-center gap-2"><MapPin size={13} /> No 14, Asgiriya Road, Kandy</span>
                  <span className="flex items-center gap-2"><Phone size={13} /> 081 292 2046</span>
                  <span className="flex items-center gap-2"><Mail size={13} /> bmikandy@gmail.com</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  )
}

export default Navbar