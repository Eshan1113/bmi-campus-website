import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Award,
    Users,
    BookOpen,
    Globe,
    Target,
    Eye,
    Heart,
    ChevronRight,
    Quote,
    Calendar,
    MapPin,
    Star,
    TrendingUp
} from 'lucide-react'
import FloatingCourses from '../components/FloatingCourses'

const About = () => {
    const [activeTimeline, setActiveTimeline] = useState(0)
    const [visibleStats, setVisibleStats] = useState(false)
    const [currentCEO, setCurrentCEO] = useState(0)

    

    const timelineEvents = [
        {
            year: '2015',
            title: 'Foundation',
            description: 'BMI Campus established in the historic city of Kandy, Sri Lanka, launching with computing and business courses.',
            icon: <BookOpen size={20} />
        },
        {
            year: '2005',
            title: 'Expansion',
            description: 'Campus operations spread across Sri Lanka with support centers in multiple districts to grant tertiary access.',
            icon: <Globe size={20} />
        },
        {
            year: '2010',
            title: 'Recognition',
            description: 'Recognized as one of the region\'s premier private education providers with global university affiliations.',
            icon: <Award size={20} />
        },
        {
            year: '2015',
            title: 'Innovation',
            description: 'Incorporated digital lab infrastructure, modern teaching methodologies, and high-quality local lecturer faculty.',
            icon: <Target size={20} />
        },
        {
            year: '2020',
            title: 'Digital Transformation',
            description: 'Pioneered hybrid and cloud-based learning delivery, ensuring seamless student access during national shifts.',
            icon: <TrendingUp size={20} />
        },
        {
            year: '2024',
            title: 'Future Ready',
            description: 'Rebranded as BMI Campus, introducing advanced AI curricula and Turnitin-style academic integrity software systems.',
            icon: <Star size={20} />
        }
    ]

    const achievements = [
        { number: 25000, suffix: '+', label: 'Graduates Success', icon: <Users size={24} />, color: '#0b3a75' },
        { number: 100, suffix: '+', label: 'Senior Lecturers', icon: <Award size={24} />, color: '#0ea5e9' },
        { number: 25, suffix: '+', label: 'Degree Programs', icon: <BookOpen size={24} />, color: '#10b981' },
        { number: 22, suffix: '+', label: 'Years of Excellence', icon: <Calendar size={24} />, color: '#d97706' }
    ]

    const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
        const [count, setCount] = useState(0)

        useEffect(() => {
            if (!visibleStats) return

            let startTime
            const animate = (currentTime) => {
                if (!startTime) startTime = currentTime
                const progress = Math.min((currentTime - startTime) / duration, 1)
                setCount(Math.floor(progress * end))

                if (progress < 1) {
                    requestAnimationFrame(animate)
                }
            }
            requestAnimationFrame(animate)
        }, [end, duration, visibleStats])

        return <span>{count.toLocaleString()}{suffix}</span>
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTimeline((prev) => (prev + 1) % timelineEvents.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [timelineEvents.length])

    return (
        <div className="bg-slate-70 min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-16 pb-24 border-b border-slate-200/50 bg-gradient-to-br from-white via-[#f8fafc] to-accent-light/10">
                {/* Floating Shapes Background */}
                
                


                <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-4">
                    <motion.div
                        className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full text-xs font-bold text-primary"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <MapPin size={12} />
                        <span>Kandy, Sri Lanka</span>
                    </motion.div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        About <span className="text-gradient">BMI Campus</span>
                    </h1>

                    <motion.p
                        className="text-slate-650 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        Established in 2015, BMI Campus is one of Kandy's most distinguished private institutions. Dedicated to delivering high-quality, accessible tertiary education, we've spent over two decades equipping students with globally-competitive skills.
                    </motion.p>

                    {/* Quick Stats Summary */}
                    <motion.div
                        className="grid grid-cols-3 gap-6 max-w-md mx-auto pt-4 text-center border-t border-slate-200/60 mt-4"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <div>
                            <span className="text-2xl font-bold text-primary block">22+</span>
                            <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Years of Service</span>
                        </div>
                        <div>
                            <span className="text-2xl font-bold text-primary block">25k+</span>
                            <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Alumni Base</span>
                        </div>
                        <div>
                            <span className="text-2xl font-bold text-primary block">4+</span>
                            <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Main Faculties</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Timeline Journey Section */}
          

            {/* Mission, Vision, Values */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Mission */}
                        <motion.div
                            className="p-8 rounded-3xl bg-white border border-slate-200/60 shadow-sm hover:shadow-premium transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
                            whileHover={{ y: -6 }}
                        >
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-6">
                                    <Target size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Our Mission</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    To offer outstanding, affordable higher education to Sri Lankan students. We are committed to rendering rich academic resources and student growth programs that ensure success in vocational, scientific, and civic ambitions.
                                </p>
                            </div>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            className="p-8 rounded-3xl bg-white border border-slate-200/60 shadow-sm hover:shadow-premium transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
                            whileHover={{ y: -6 }}
                        >
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent-dark flex items-center justify-center mb-6">
                                    <Eye size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Our Vision</h3>
                                <div className="space-y-4">
                                    <Quote size={28} className="text-accent/20" />
                                    <p className="text-slate-700 font-medium italic text-base leading-relaxed">
                                        "Upliftment of society with knowledge, skills, and positive academic attitude."
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Values */}
                        <motion.div
                            className="p-8 rounded-3xl bg-white border border-slate-200/60 shadow-sm hover:shadow-premium transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
                            whileHover={{ y: -6 }}
                        >
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-[#10b981]/10 text-[#10b981] flex items-center justify-center mb-6">
                                    <Heart size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Our Values</h3>
                                <ul className="space-y-2.5 text-slate-500 text-sm">
                                    {['Academic Excellence', 'Academic Honesty & Integrity', 'Community Engagement', 'Creativity & Research Focus', 'Diversity & Inclusion'].map((val) => (
                                        <li key={val} className="flex items-center gap-2">
                                            <ChevronRight size={14} className="text-accent-dark shrink-0" />
                                            <span>{val}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <section className="py-24 bg-slate-50 border-t border-slate-200/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                  
                      

                        {/* Message Details */}
                        <div className="lg:col-span-7 p-6 sm:p-8 space-y-4 flex flex-col justify-between">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-primary">
                                    <Quote size={32} className="opacity-40 shrink-0" />
                                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">Leading with Vision, Inspiring Academic Excellence</h3>
                                </div>
                                <div className="space-y-3 text-slate-650 text-sm leading-relaxed">
                                    <p>
                                        As CEO and Chairman, I am delighted to welcome you to BMI Campus. Over the years, this institution has nurtured ambitious minds and trained students whose professional careers thrive inside both local and global industries. We have established support systems and centers across Sri Lanka to guarantee tertiary learning opportunities stay within reach for every local student.
                                    </p>
                                    <p>
                                        We continually strive to scale higher academic honors and expand our syllabus range. To date, more than 25,000 students have completed undergraduate, postgraduate, and professional courses successfully with us. We invite you to join our network of leaders and unlock your potential in our research-driven environments.
                                    </p>
                                </div>
                            </div>

                            <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                                    <Calendar size={14} className="text-primary" />
                                    <span>BMI Campus — Delivering Knowledge Since 2015</span>
                                </div>
                                <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    <span className="flex items-center gap-1.5"><Star size={12} className="text-accent-dark" /> Quality</span>
                                    <span className="flex items-center gap-1.5"><Star size={12} className="text-accent-dark" /> Honors</span>
                                </div>
                            </div>
                        </div>
                  
                </div>
            </section>
            </section>


            {/* Message from Chairman */}
                {/* Sticky Floating Courses widget */}
                  <FloatingCourses />
        </div>
    )
}

export default About