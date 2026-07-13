import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Eye, Image } from 'lucide-react'

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    const images = [
        {
            id: 1,
            url: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop',
            title: 'Campus Main Entrance & Building',
            category: 'Architecture'
        },
        {
            id: 2,
            url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
            title: 'Modern Academic Library',
            category: 'Facilities'
        },
        {
            id: 3,
            url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&h=600&fit=crop',
            title: 'Science & BioTech Laboratory',
            category: 'Labs'
        },
        {
            id: 4,
            url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
            title: 'Student Commons & Lounge Area',
            category: 'Student Life'
        },
        {
            id: 5,
            url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop',
            title: 'Spacious Lecture Hall',
            category: 'Classrooms'
        },
        {
            id: 6,
            url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
            title: 'Vibrant Campus Courtyard',
            category: 'Outdoor'
        },
        {
            id: 7,
            url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
            title: 'Collaborative Study Groups',
            category: 'Student Life'
        },
        {
            id: 8,
            url: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',
            title: 'High-Speed Computer Laboratory',
            category: 'Labs'
        }
    ]

    const openModal = (image, index) => {
        setSelectedImage(image)
        setCurrentIndex(index)
    }

    const closeModal = () => {
        setSelectedImage(null)
    }

    const nextImage = (e) => {
        e.stopPropagation()
        const nextIndex = (currentIndex + 1) % images.length
        setCurrentIndex(nextIndex)
        setSelectedImage(images[nextIndex])
    }

    const prevImage = (e) => {
        e.stopPropagation()
        const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1
        setCurrentIndex(prevIndex)
        setSelectedImage(images[prevIndex])
    }

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Gallery Hero banner */}
            <section className="pt-16 pb-20 border-b border-slate-200/50 bg-gradient-to-br from-white via-[#f8fafc] to-accent-light/10">
                <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary block">Life at BMI</span>
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
                        Campus <span className="text-gradient">Photo Gallery</span>
                    </h1>
                    <p className="text-slate-550 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                        Explore our beautiful Kandy campus facilities, tech infrastructure, and vibrant student activities through our curated photos.
                    </p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        {images.map((image, index) => (
                            <motion.div
                                key={image.id}
                                className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white aspect-[4/3] group shadow-sm hover:shadow-premium cursor-pointer"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                onClick={() => openModal(image, index)}
                            >
                                <img 
                                    src={image.url} 
                                    alt={image.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                                />

                                {/* Lightbox Hover Overlay */}
                                <div className="absolute inset-0 bg-slate-950/75 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5">
                                    <div className="p-2 rounded-full bg-accent/20 border border-accent/30 text-white w-fit mb-3 translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                                        <Eye size={18} />
                                    </div>
                                    <h3 className="font-bold text-white text-sm translate-y-3 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        {image.title}
                                    </h3>
                                    <span className="text-[10px] text-accent font-semibold tracking-wider uppercase mt-1 translate-y-3 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                        {image.category}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Lightbox / Slideshow Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-slate-950/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="relative max-w-4xl w-full flex flex-col items-center justify-center"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button 
                                className="absolute right-0 -top-12 p-2 bg-slate-900/50 hover:bg-slate-800 text-white rounded-xl border border-slate-850 hover:border-slate-700 transition-colors z-20 focus:outline-none"
                                onClick={closeModal}
                                aria-label="Close lightbox"
                            >
                                <X size={20} />
                            </button>

                            {/* Left Navigation */}
                            <button 
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-900/50 hover:bg-slate-800 text-white p-3 rounded-full border border-slate-850 hover:border-slate-700 transition-colors z-20 focus:outline-none hidden sm:block"
                                onClick={prevImage}
                                aria-label="Previous image"
                            >
                                <ChevronLeft size={22} />
                            </button>

                            {/* Right Navigation */}
                            <button 
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-900/50 hover:bg-slate-800 text-white p-3 rounded-full border border-slate-850 hover:border-slate-700 transition-colors z-20 focus:outline-none hidden sm:block"
                                onClick={nextImage}
                                aria-label="Next image"
                            >
                                <ChevronRight size={22} />
                            </button>

                            {/* Main Active Image */}
                            <div className="relative rounded-2xl overflow-hidden border border-slate-850 bg-slate-950 aspect-[4/3] max-h-[70vh] flex items-center justify-center shadow-2xl">
                                <img 
                                    src={selectedImage.url} 
                                    alt={selectedImage.title} 
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Image Caption bar */}
                            <div className="w-full text-center mt-6 text-white space-y-1">
                                <h3 className="font-bold text-base sm:text-lg tracking-tight">
                                    {selectedImage.title}
                                </h3>
                                <span className="inline-block text-[10px] text-accent uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full border border-accent/25 bg-accent/5">
                                    {selectedImage.category}
                                </span>
                            </div>

                            {/* Mobile controls row */}
                            <div className="flex gap-4 mt-6 sm:hidden">
                                <button className="p-3 bg-slate-900/50 border border-slate-850 text-white rounded-full" onClick={prevImage}>
                                    <ChevronLeft size={16} />
                                </button>
                                <button className="p-3 bg-slate-900/50 border border-slate-850 text-white rounded-full" onClick={nextImage}>
                                    <ChevronRight size={16} />
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Gallery