import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        alert('Thank you for your message! We will get back to you soon.')
        setFormData({ name: '', email: '', subject: '', message: '' })
    }

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Contact Hero banner */}
            <section className="pt-16 pb-20 border-b border-slate-200/50 bg-gradient-to-br from-white via-[#f8fafc] to-accent-light/10">
                <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
                    <div className="inline-flex items-center gap-3">
                        <span className="h-px w-8 bg-primary/40" />
                        <span className="text-xs font-bold uppercase tracking-widest text-primary">Get In Touch</span>
                        <span className="h-px w-8 bg-primary/40" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        Contact <span className="text-gradient">BMI Campus</span>
                    </h1>
                    <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                        We are here to answer your queries and help you coordinate your academic admission. Reach out to us today.
                    </p>
                </div>
            </section>

            {/* Main Contact Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        
                        {/* Contact Information (Left) */}
                        <motion.div
                            className="lg:col-span-5 space-y-8"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="space-y-2">
                                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                                    <span className="h-px w-6 bg-primary/40" /> Information
                                </span>
                                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Our Offices in Kandy</h2>
                                <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
                                    Feel free to visit our campus registry office directly or get in touch via phone lines during regular operational hours.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {/* Address Card */}
                                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-primary/20 transition-all">
                                    <div className="p-3 rounded-xl bg-primary/5 text-primary mt-1 shrink-0">
                                        <MapPin size={20} />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold text-slate-800 text-sm">Campus Address</h4>
                                        <p className="text-xs text-slate-500 leading-relaxed">No 14, Asgiriya Road, Kandy, Sri Lanka</p>
                                    </div>
                                </div>

                                {/* Phone Card */}
                                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-primary/20 transition-all">
                                    <div className="p-3 rounded-xl bg-primary/5 text-primary mt-1 shrink-0">
                                        <Phone size={20} />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold text-slate-800 text-sm">Admissions Hotline</h4>
                                        <p className="text-xs text-slate-500 leading-relaxed">081 292 2046</p>
                                    </div>
                                </div>

                                {/* Email Card */}
                                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-primary/20 transition-all">
                                    <div className="p-3 rounded-xl bg-primary/5 text-primary mt-1 shrink-0">
                                        <Mail size={20} />
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="font-bold text-slate-800 text-sm">General Inquiries</h4>
                                        <p className="text-xs text-slate-500 leading-relaxed">bmikandy@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form (Right) */}
                        <motion.div
                            className="lg:col-span-7"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <form className="p-6 sm:p-10 bg-white border border-slate-200/80 shadow-premium rounded-3xl space-y-6" onSubmit={handleSubmit}>
                                <div className="flex items-center gap-2 pb-4 border-b border-slate-100">
                                    <MessageSquare className="text-primary shrink-0" size={20} />
                                    <h3 className="font-extrabold text-slate-850 text-lg">Send us a Message</h3>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {/* Name input */}
                                    <div className="space-y-1.5">
                                        <label htmlFor="name" className="text-xs font-bold text-slate-550 uppercase tracking-wide block">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-slate-50/50"
                                            placeholder="Enter your name"
                                        />
                                    </div>

                                    {/* Email input */}
                                    <div className="space-y-1.5">
                                        <label htmlFor="email" className="text-xs font-bold text-slate-550 uppercase tracking-wide block">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-slate-50/50"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>

                                {/* Subject input */}
                                <div className="space-y-1.5">
                                    <label htmlFor="subject" className="text-xs font-bold text-slate-550 uppercase tracking-wide block">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-slate-50/50"
                                        placeholder="Admission, course query, etc."
                                    />
                                </div>

                                {/* Message input */}
                                <div className="space-y-1.5">
                                    <label htmlFor="message" className="text-xs font-bold text-slate-550 uppercase tracking-wide block">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-slate-50/50"
                                        placeholder="Type your message details here..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full py-3.5 bg-primary hover:bg-primary-dark text-white font-semibold text-sm rounded-xl transition-all shadow-md shadow-primary/10 hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 focus:outline-none"
                                >
                                    <Send size={16} />
                                    Send Inquiry Message
                                </button>
                            </form>
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact