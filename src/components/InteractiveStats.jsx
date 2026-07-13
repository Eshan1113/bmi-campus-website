import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Users, Award, Globe } from 'lucide-react'

const InteractiveStats = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    const stats = [
        {
            icon: <Users size={28} />,
            value: 1000,
            suffix: '+',
            label: 'Students Enrolled',
            description: 'Active learners pursuing their higher education goals',
            color: '#0b3a75', // primary blue
            trend: '+12%'
        },
        {
            icon: <Award size={28} />,
            value: 98,
            suffix: '%',
            label: 'Success Rate',
            description: 'Graduates successfully completing their degrees',
            color: '#0ea5e9', // accent blue
            trend: '+5%'
        },
        {
            icon: <Globe size={28} />,
            value: 15,
            suffix: '+',
            label: 'Global Partners',
            description: 'Renowned international university collaborations',
            color: '#10b981', // green
            trend: '+3'
        },
        {
            icon: <TrendingUp size={28} />,
            value: 95,
            suffix: '%',
            label: 'Employment Rate',
            description: 'Graduates securing employment within six months',
            color: '#d97706', // gold
            trend: '+4%'
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % stats.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [stats.length])

    const AnimatedNumber = ({ value, duration = 2000 }) => {
        const [count, setCount] = useState(0)

        useEffect(() => {
            if (!isVisible) return

            let startTime
            const animate = (currentTime) => {
                if (!startTime) startTime = currentTime
                const progress = Math.min((currentTime - startTime) / duration, 1)
                setCount(Math.floor(progress * value))

                if (progress < 1) {
                    requestAnimationFrame(animate)
                }
            }
            requestAnimationFrame(animate)
        }, [value, duration, isVisible])

        return <span>{count.toLocaleString()}</span>
    }

    return (
        <motion.div
            className="w-full max-w-6xl mx-auto px-4 py-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            onViewportEnter={() => setIsVisible(true)}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Left Side Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-2/3">
                    {stats.map((stat, index) => {
                        const isSelected = activeIndex === index
                        return (
                            <motion.div
                                key={index}
                                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 relative overflow-hidden border ${
                                    isSelected 
                                        ? 'bg-white border-primary/20 shadow-premium ring-1 ring-primary/10' 
                                        : 'bg-white/60 border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300'
                                }`}
                                whileHover={{ scale: 1.02 }}
                                onClick={() => setActiveIndex(index)}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div 
                                        className="p-3 rounded-xl text-white shadow-sm"
                                        style={{ backgroundColor: stat.color }}
                                    >
                                        {stat.icon}
                                    </div>
                                    <span 
                                        className="text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1"
                                        style={{ backgroundColor: `${stat.color}15`, color: stat.color }}
                                    >
                                        <TrendingUp size={12} />
                                        {stat.trend}
                                    </span>
                                </div>

                                <div className="space-y-1">
                                    <div className="text-3xl font-bold text-slate-900 tracking-tight flex items-baseline">
                                        <AnimatedNumber value={stat.value} />
                                        <span className="text-xl font-semibold ml-0.5" style={{ color: stat.color }}>{stat.suffix}</span>
                                    </div>
                                    <h4 className="text-sm font-semibold text-slate-800">{stat.label}</h4>
                                    <p className="text-xs text-slate-500 leading-relaxed mt-1">{stat.description}</p>
                                </div>

                                {/* Active progress bar indicator */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-100 overflow-hidden">
                                    <motion.div
                                        className="h-full"
                                        style={{ backgroundColor: stat.color }}
                                        initial={{ width: 0 }}
                                        animate={{ width: isSelected ? '100%' : '0%' }}
                                        transition={{ duration: 4, ease: 'linear' }}
                                    />
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Right Side 3D Visualizer */}
                <div className="w-full lg:w-1/3 flex items-center justify-center min-h-[300px] relative">
                    <motion.div
                        className="bg-white rounded-3xl border border-slate-200/80 shadow-premium p-8 w-64 h-64 flex flex-col items-center justify-center text-center z-10"
                        key={activeIndex}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        <div 
                            className="p-4 rounded-2xl text-white mb-4 shadow-md"
                            style={{ backgroundColor: stats[activeIndex].color }}
                        >
                            {stats[activeIndex].icon}
                        </div>
                        <div className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
                            <AnimatedNumber value={stats[activeIndex].value} />
                            <span style={{ color: stats[activeIndex].color }}>{stats[activeIndex].suffix}</span>
                        </div>
                        <div className="text-sm font-semibold text-slate-700">{stats[activeIndex].label}</div>
                    </motion.div>

                    {/* Orbit rings animation */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-90">
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute border border-dashed rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 12 + i * 4,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                style={{
                                    width: `${280 + i * 40}px`,
                                    height: `${280 + i * 40}px`,
                                    borderColor: `${stats[activeIndex].color}25`
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default InteractiveStats