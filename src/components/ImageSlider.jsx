import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const images = [
        {
            url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1000&h=750&fit=crop',
            title: 'BMI Campus Main Building'
        },
        {
            url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1000&h=750&fit=crop',
            title: 'Modern Library & Learning Spaces'
        },
        {
            url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1000&h=750&fit=crop',
            title: 'Innovation Hub & Computing Labs'
        }
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            )
        }, 5000)

        return () => clearInterval(timer)
    }, [images.length])

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
    }

    const goToNext = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
    }

    return (
        <div className="relative w-full h-[320px] sm:h-[450px] rounded-3xl overflow-hidden shadow-premium group">
            {/* Slides */}
            <div className="w-full h-full relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        className="absolute inset-0 w-full h-full"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src={images[currentIndex].url}
                            alt={images[currentIndex].title}
                            className="w-full h-full object-cover"
                        />
                        {/* Slide Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent flex items-end p-8 sm:p-12" />
                        <div className="absolute bottom-8 left-8 right-8 z-10">
                            <motion.span 
                                className="text-xs uppercase tracking-widest text-accent font-bold mb-1.5 block"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                Campus Life
                            </motion.span>
                            <motion.h3 
                                className="text-xl sm:text-3xl font-bold text-white tracking-tight leading-tight"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                {images[currentIndex].title}
                            </motion.h3>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-950/20 hover:bg-slate-950/50 text-white p-2 sm:p-3 rounded-full backdrop-blur-md border border-white/10 hover:border-white/30 transition-all opacity-0 group-hover:opacity-100 z-20 focus:outline-none"
                onClick={goToPrevious}
                aria-label="Previous slide"
            >
                <ChevronLeft size={20} />
            </button>
            <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-950/20 hover:bg-slate-950/50 text-white p-2 sm:p-3 rounded-full backdrop-blur-md border border-white/10 hover:border-white/30 transition-all opacity-0 group-hover:opacity-100 z-20 focus:outline-none"
                onClick={goToNext}
                aria-label="Next slide"
            >
                <ChevronRight size={20} />
            </button>

            {/* Pagination Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                            index === currentIndex 
                                ? 'w-8 bg-accent' 
                                : 'w-2.5 bg-white/40 hover:bg-white/70'
                        }`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default ImageSlider