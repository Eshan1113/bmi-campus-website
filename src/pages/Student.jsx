import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { IdCard, Search, BadgeCheck, CalendarDays, BookOpen, User } from 'lucide-react'
import FloatingCourses from '../components/FloatingCourses'
const Student = () => {
  const [studentNumber, setStudentNumber] = useState('')
  const [submittedNumber, setSubmittedNumber] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedNumber(studentNumber.trim())
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="pt-16 pb-20 border-b border-slate-200/50 bg-gradient-to-br from-white via-[#f8fafc] to-accent-light/10">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-primary block">Student Access</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Student <span className="text-gradient">Number Lookup</span>
          </h1>
          <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Enter your student number to open the student section and check your account details.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div
            className="lg:col-span-5 rounded-3xl bg-white border border-slate-200 shadow-sm p-6 sm:p-8"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-5">
              <IdCard size={24} />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900">Enter student number</h2>
            <p className="text-sm text-slate-500 leading-relaxed mt-3">
              Use your student ID number exactly as it appears on your admission record.
            </p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="studentNumber" className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Student Number
                </label>
                <input
                  id="studentNumber"
                  type="text"
                  value={studentNumber}
                  onChange={(e) => setStudentNumber(e.target.value)}
                  placeholder="Enter student number"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-slate-50/60 text-slate-900"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-primary text-white font-semibold hover:bg-primary-dark transition-colors shadow-md"
              >
                <Search size={16} />
                Open Student Section
              </button>
            </form>
          </motion.div>

          <motion.div
            className="lg:col-span-7 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-premium p-6 sm:p-8 overflow-hidden relative"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            viewport={{ once: true }}
          >
            <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                <BadgeCheck className="text-accent mb-3" size={22} />
                <p className="text-xs uppercase tracking-widest text-white/50 font-bold">Status</p>
                <p className="text-lg font-semibold mt-1">Student access ready</p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                <User className="text-accent mb-3" size={22} />
                <p className="text-xs uppercase tracking-widest text-white/50 font-bold">Current ID</p>
                <p className="text-lg font-semibold mt-1 break-words">{submittedNumber || 'No student number entered yet'}</p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                <CalendarDays className="text-accent mb-3" size={22} />
                <p className="text-xs uppercase tracking-widest text-white/50 font-bold">Next step</p>
                <p className="text-lg font-semibold mt-1">Verify your details</p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                <BookOpen className="text-accent mb-3" size={22} />
                <p className="text-xs uppercase tracking-widest text-white/50 font-bold">Student area</p>
                <p className="text-lg font-semibold mt-1">Admission, records, and updates</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Floating WhatsApp Button */}
      <FloatingCourses />
    </div>
  )
}

export default Student