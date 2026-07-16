import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import FloatingCourses from '../components/FloatingCourses'
import {
    Code,
    GraduationCap,
    Globe,
    Clock,
    Users,
    Award,
    BookOpen,
    Filter,
    Search,
    Briefcase,
    Building2,
    Sparkles
} from 'lucide-react'

const Courses = () => {
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [searchTerm, setSearchTerm] = useState('')

    const categories = ['All', 'BICT', 'BBA', 'MBA']

    const courses = [
        {
            id: 1,
            title: 'BICT (Hons) in Information and Communication Technology',
            category: 'BICT',
            icon: <Code size={24} />,
            description: 'Build core skills in networking, systems, programming, and digital infrastructure for modern ICT careers.',
            duration: '3 Years',
            level: 'Bachelor\'s',
            students: '420+',
            rating: 4.8,
            features: ['Programming', 'Networking', 'Databases', 'Systems Analysis'],
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
            price: 'LKR 350,000',
            popular: true
        },
        {
            id: 2,
            title: 'BBA (Hons) in Business Administration',
            category: 'BBA',
            icon: <GraduationCap size={24} />,
            description: 'Choose a business pathway that matches your goals: HRM, Marketing, Accounting & Finance, or Hotel Tourism.',
            duration: '3 Years',
            level: 'Bachelor\'s',
            students: '380+',
            rating: 4.9,
            features: ['HRM', 'Marketing', 'Accounting & Finance', 'Hotel Tourism'],
            image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop',
            price: 'LKR 280,000',
            popular: true
        },
        {
            id: 3,
            title: 'MBA in Business Management',
            category: 'MBA',
            icon: <Globe size={24} />,
            description: 'Postgraduate leadership study focused on strategy, finance, operations, and organizational growth.',
            duration: '1 Year',
            level: 'Master\'s',
            students: '180+',
            rating: 4.8,
            features: ['Leadership', 'Corporate Strategy', 'Finance', 'Operations'],
            image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop',
            price: 'LKR 450,000',
            popular: false
        }
    ]

    const bbaSpecializations = [
        {
            name: 'HRM',
            icon: <Users size={18} />,
            description: 'People, culture, hiring, and employee development.'
        },
        {
            name: 'Marketing',
            icon: <Briefcase size={18} />,
            description: 'Branding, digital campaigns, and market growth.'
        },
        {
            name: 'Accounting & Finance',
            icon: <Building2 size={18} />,
            description: 'Reporting, budgeting, and financial decision-making.'
        },
        {
            name: 'Hotel Tourism',
            icon: <Globe size={18} />,
            description: 'Hospitality operations, guest service, and tourism trends.'
        }
    ]

    const filteredCourses = courses.filter(course => {
        const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory
        const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.description.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Page Header / Hero banner */}
            <section className="pt-16 pb-20 border-b border-slate-200/50 bg-gradient-to-br from-white via-[#f8fafc] to-accent-light/10">
                <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
                    <div className="inline-flex items-center gap-3">
                        <span className="h-px w-8 bg-primary/40" />
                        <span className="text-xs font-bold uppercase tracking-widest text-primary">Academics</span>
                        <span className="h-px w-8 bg-primary/40" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        Our <span className="text-gradient">Degree Programs</span>
                    </h1>
                    <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                        Discover world-class undergraduate and postgraduate programs designed to prepare you for success in global industries.
                    </p>
                </div>
            </section>

            {/* Filters Bar */}
            <section className="py-8 bg-white border-b border-slate-200/50 sticky top-[70px] z-30 shadow-sm backdrop-blur-md bg-white/95">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-6 justify-between items-center">
                    {/* Search Field */}
                    <div className="relative w-full md:max-w-xs">
                        <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search degrees..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-slate-55/50"
                        />
                    </div>

                    {/* Categories Tabs */}
                    <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-none">
                        <Filter size={16} className="text-slate-400 shrink-0 hidden sm:block" />
                        <div className="flex gap-2">
                            {categories.map((category) => {
                                const isSelected = selectedCategory === category
                                return (
                                    <button
                                        key={category}
                                        className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                                            isSelected
                                                ? 'bg-primary text-white shadow-sm shadow-primary/20'
                                                : 'bg-slate-100 hover:bg-slate-200 text-slate-650'
                                        }`}
                                        onClick={() => setSelectedCategory(category)}
                                    >
                                        {category}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses Grid Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        {filteredCourses.map((course, index) => (
                            <motion.div
                                key={course.id}
                                className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-premium hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                viewport={{ once: true }}
                            >
                                <div className="relative">
                                    {/* Popular Ribbon */}
                                    {course.popular && (
                                        <div className="absolute top-3 left-3 bg-amber-500 text-white font-extrabold text-[9px] px-2 py-0.5 rounded-md flex items-center gap-1 shadow-sm z-10 uppercase tracking-wider">
                                            <Award size={10} />
                                            Popular
                                        </div>
                                    )}

                                    {/* Image */}
                                    <div className="aspect-video w-full overflow-hidden bg-slate-100">
                                        <img 
                                            src={course.image} 
                                            alt={course.title} 
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                                        />
                                    </div>

                                    {/* Category pill */}
                                    <span className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md border border-slate-200/50 text-[10px] font-bold text-slate-800 px-2.5 py-1 rounded-lg">
                                        {course.category}
                                    </span>
                                </div>

                                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-start gap-3 mb-2">
                                            <div className="p-2 rounded-lg bg-primary/5 text-primary mt-0.5">
                                                {course.icon}
                                            </div>
                                            <h3 className="font-bold text-slate-850 text-base leading-snug group-hover:text-primary transition-colors">
                                                {course.title}
                                            </h3>
                                        </div>
                                        <p className="text-xs text-slate-500 leading-relaxed mt-2">
                                            {course.description}
                                        </p>

                                        {/* Features pill tags */}
                                        <div className="flex flex-wrap gap-1.5 mt-4">
                                            {course.features.map((feature, idx) => (
                                                <span key={idx} className="text-[10px] font-medium px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md">
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Details row */}
                                    <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs text-slate-400 font-semibold">
                                        <div className="flex items-center gap-1">
                                            <Clock size={14} className="text-accent-dark" />
                                            <span>{course.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Users size={14} className="text-accent-dark" />
                                            <span>{course.students} Students</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <BookOpen size={14} className="text-accent-dark" />
                                            <span>{course.level}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* CTA Footer */}
                                <div className="px-6 py-4 bg-slate-50 border-t border-slate-150">
                                    <Link
                                        to="/contact"
                                        className="w-full flex items-center justify-center px-3 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg font-semibold text-xs transition-colors shadow-sm"
                                    >
                                        Apply
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="mt-16 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="max-w-2xl">
                            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
                                <span className="h-px w-6 bg-primary/40" /> BBA Pathways
                            </span>
                            <h2 className="text-2xl font-extrabold text-slate-900 mt-2">Choose your BBA specialization</h2>
                            <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                                The BBA program is divided into four focused pathways so students can align their studies with the career they want.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-8">
                            {bbaSpecializations.map((item) => (
                                <div key={item.name} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:border-primary/20 hover:shadow-sm transition-all">
                                    <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-4">
                                        {item.icon}
                                    </div>
                                    <h3 className="font-bold text-slate-900 text-sm">{item.name}</h3>
                                    <p className="text-slate-500 text-xs leading-relaxed mt-2">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* No results placeholder */}
                    {filteredCourses.length === 0 && (
                        <motion.div
                            className="text-center py-20 bg-white rounded-2xl border border-slate-200 max-w-md mx-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <BookOpen size={48} className="text-slate-350 mx-auto mb-4 animate-bounce" />
                            <h3 className="font-bold text-slate-800 text-lg mb-1">No degrees found</h3>
                            <p className="text-xs text-slate-500 max-w-xs mx-auto mb-6">We couldn't find any courses matching your keywords or chosen faculty category filter.</p>
                            <button
                                className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-xl text-xs font-semibold shadow-md shadow-primary/10 transition-colors"
                                onClick={() => {
                                    setSearchTerm('')
                                    setSelectedCategory('All')
                                }}
                            >
                                Reset Search Filters
                            </button>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Banner Call-to-Action */}
            <section className="pb-24">
                <div className="max-w-5xl mx-auto px-4">
                    <motion.div
                        className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 text-white text-center relative overflow-hidden shadow-xl"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
                        <div className="relative z-10 space-y-6 max-w-xl mx-auto">
                            <span className="text-xs font-bold uppercase tracking-widest text-accent flex items-center justify-center gap-1">
                                <Sparkles size={14} className="animate-spin" />
                                Future Intake
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">Ready to Start Your Academic Journey?</h2>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Join thousands of successful alumni who have graduated and unlocked high-growth careers across national and global companies.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3">
                                <Link to="/contact" className="px-6 py-3 bg-accent text-white font-semibold text-xs rounded-xl shadow-md shadow-accent/15 hover:bg-accent-dark transition-all duration-200 text-center">
                                    Submit Application
                                </Link>
                                <Link to="/contact" className="px-6 py-3 bg-slate-800 hover:bg-slate-750 text-slate-350 hover:text-white font-semibold text-xs rounded-xl transition-all duration-200 text-center">
                                    Schedule a Consultation
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
            <FloatingCourses />
        </div>
    )
}

export default Courses