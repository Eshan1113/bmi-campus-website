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

const About = () => {
    const [activeTimeline, setActiveTimeline] = useState(0)
    const [visibleStats, setVisibleStats] = useState(false)

    const timelineEvents = [
        {
            year: '2002',
            title: 'Foundation',
            description: 'IBA Campus established in the historic city of Kandy, Sri Lanka, launching with computing and business courses.',
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
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-16 pb-24 border-b border-slate-200/50 bg-gradient-to-br from-white via-[#f8fafc] to-accent-light/10">
                {/* Floating Shapes Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-primary/5"
                            animate={{
                                y: [-15, 15, -15],
                                rotate: [0, 180, 360],
                                scale: [1, 1.08, 1]
                            }}
                            transition={{
                                duration: 6 + i,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.4
                            }}
                            style={{
                                width: `${40 + i * 30}px`,
                                height: `${40 + i * 30}px`,
                                left: `${10 + i * 15}%`,
                                top: `${20 + (i % 2) * 35}%`
                            }}
                        />
                    ))}
                </div>

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6">
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
                        Established in 2002, BMI Campus (originally IBA Campus) is one of Kandy's most distinguished private institutions. Dedicated to delivering high-quality, accessible tertiary education, we've spent over two decades equipping students with globally-competitive skills.
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
            <section className="py-24 bg-white border-b border-slate-200/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Our History</span>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Our Journey Through Time</h2>
                    </div>

                    <div className="relative">
                        {/* Vertical Timeline Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2" />

                        {/* Events Container */}
                        <div className="space-y-12 relative">
                            {timelineEvents.map((event, index) => {
                                const isEven = index % 2 === 0
                                const isHighlighted = activeTimeline === index

                                return (
                                    <motion.div
                                        key={index}
                                        className={`flex flex-col md:flex-row items-stretch md:justify-between relative ${isEven ? '' : 'md:flex-row-reverse'}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5 }}
                                        viewport={{ once: true }}
                                    >
                                        {/* Card Column */}
                                        <div className="w-full md:w-[46%] pl-10 md:pl-0">
                                            <motion.div
                                                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                                                    isHighlighted
                                                        ? 'bg-white border-primary/20 shadow-premium ring-1 ring-primary/5'
                                                        : 'bg-slate-50/50 border-slate-200/60 opacity-80 hover:opacity-100 hover:bg-white hover:shadow-md'
                                                }`}
                                                onClick={() => setActiveTimeline(index)}
                                                whileHover={{ y: -2 }}
                                            >
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="text-sm font-extrabold text-primary px-2.5 py-0.5 rounded-full bg-primary/5">{event.year}</span>
                                                    <h3 className="font-bold text-slate-800 text-base">{event.title}</h3>
                                                </div>
                                                <p className="text-xs text-slate-500 leading-relaxed mt-2">{event.description}</p>
                                            </motion.div>
                                        </div>

                                        {/* Timeline Node Column */}
                                        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-4 z-10 flex items-center justify-center">
                                            <motion.div
                                                className={`w-9 h-9 rounded-full flex items-center justify-center border text-white shadow-sm transition-all duration-300 ${
                                                    isHighlighted 
                                                        ? 'bg-primary border-primary scale-110' 
                                                        : 'bg-slate-200 border-slate-300 text-slate-500 hover:bg-slate-300'
                                                }`}
                                            >
                                                {event.icon}
                                            </motion.div>
                                        </div>

                                        {/* Spacing for layout alignment */}
                                        <div className="hidden md:block w-[46%]" />
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

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
            </section>

            {/* Achievements Section */}
            <section className="py-24 bg-white border-t border-slate-200/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2 block">Facts & Figures</span>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Our Achievements at a Glance</h2>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                        onViewportEnter={() => setVisibleStats(true)}
                        viewport={{ once: true }}
                    >
                        {achievements.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="p-6 rounded-2xl border border-slate-200/60 text-center relative overflow-hidden group shadow-sm hover:shadow-premium bg-slate-50/50 hover:bg-white transition-all duration-300"
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="mx-auto w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-350">
                                    {stat.icon}
                                </div>
                                <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                                </h3>
                                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Message from Chairman */}
            <section className="py-24 bg-slate-50 border-t border-slate-200/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="bg-white rounded-3xl border border-slate-200/80 shadow-premium overflow-hidden grid grid-cols-1 lg:grid-cols-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {/* Chairman Photo */}
                        <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-full bg-slate-950">
                            <img
                                src="ceo.jpg"
                                alt="Chairman / CEO Mr. Sisira Wickramasinghe"
                                className="w-full h-full object-cover object-top opacity-90"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent flex flex-col justify-end p-8" />
                            <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                                <h4 className="text-lg font-bold">Mr. Sisira Wickramasinghe</h4>
                                <span className="text-xs text-slate-350 font-medium block mt-0.5">Chairman / CEO</span>
                                <span className="text-[9px] text-slate-400 block mt-2 font-medium leading-relaxed uppercase">
                                    M.Com(R)(KLN), MBA(Malaysia), B.Sc. Business Admin (USJP)
                                </span>
                            </div>
                        </div>

                        {/* Message Details */}
                        <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 flex flex-col justify-between">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-primary">
                                    <Quote size={32} className="opacity-40 shrink-0" />
                                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">Leading with Vision, Inspiring Academic Excellence</h3>
                                </div>
                                <div className="space-y-4 text-slate-650 text-sm leading-relaxed">
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
                                    <span>BMI Campus — Delivering Knowledge Since 2002</span>
                                </div>
                                <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    <span className="flex items-center gap-1.5"><Star size={12} className="text-accent-dark" /> Quality</span>
                                    <span className="flex items-center gap-1.5"><Star size={12} className="text-accent-dark" /> Honors</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default About