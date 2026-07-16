import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Eye, Image } from 'lucide-react'
import FloatingCourses from '../components/FloatingCourses'

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null)
    const [currentIndex, setCurrentIndex] = useState(0)

    const images = [
        {
            id: 1,
            url: 'image/2024/489868029_1697889801036880_4011985048527441810_n.jpg',
           
        },
        {
            id: 2,
            url: 'image/2024/489877858_1697888831036977_1563440393688646331_n.jpg',
           
        },
        {
            id: 3,
            url: 'image/2024/489888515_1697889984370195_4980102217417478546_n.jpg',
           
        },
        {
            id: 4,
            url: 'image/2024/489895000_1697889927703534_2289421801703900681_n.jpg',
            
        },
        {
            id: 5,
            url: 'image/2024/490353809_1697888724370321_5280965126051219552_n.jpg',
            
        },
        {
            id: 6,
            url: 'image/2024/490652856_1697890091036851_1674521376843106772_n.jpg',
           
        },
        {
            id: 7,
            url: 'image/2024/490655048_1697889924370201_4899216367099649662_n.jpg',
           
        },
        {
            id: 8,
            url: 'image/2024/490667103_1697888764370317_4310209377303896667_n.jpg',
           
        },
        {
            id: 9,
            url: 'image/2024/490679679_1697889944370199_2366898265973101914_n.jpg',
           
        },
        {
            id: 10,
            url: 'image/2024/490768786_1697889951036865_4072620445188414262_n.jpg',
            
        },
        {
            id: 11,
            url: 'image/2024/490781239_1697888867703640_1152399088567124652_n.jpg',
            
        },
        {
            id: 12,
            url: 'image/2024/490843825_1697888767703650_8706063944879520952_n.jpg',
            
        },
        {
            id: 13,
            url: 'image/2024/DSC_4537.JPG',
            
        },
        {
            id: 14,
            url: 'image/2024/DSC_4618.JPG',
            
        },
        {
            id: 15,
            url: 'image/2024/IMG_0252.JPG',
           
        },
        {
            id: 16,
            url: 'image/2024/IMG_0282.JPG',
           
        },
        {
            id: 17,
            url: 'image/2024/IMG_0287.JPG',
            
        },
        {
            id: 18,
            url: 'image/2024/IMG_3804.JPG',
            
        },
        {
            id: 19,
            url: 'image/2024/IMG_3821 (2).JPG',
           
        },
        {
            id: 20,
            url: 'image/2024/IMG_8616.JPG',
           
        },
        {
            id: 21,
            url: 'image/2024/IMG_8639.JPG',
           
        },
        {
            id: 22,
            url: 'image/2024/IMG_8644.JPG',
            
        },
        {
            id: 23,
            url: 'image/2024/IMG_8647.JPG',
           
        },
        {
            id: 24,
            url: 'image/2024/IMG_8674.JPG',
            
        },
        {
            id: 25,
            url: 'image/2024/IMG_8675.JPG',
           
        },
        {
            id: 26,
            url: 'image/2024/IMG_8692.JPG',
           
        },
        {
            id: 27,
            url: 'image/2024/IMG_8695.JPG',
           
        },
        {
            id: 28,
            url: 'image/2024/IMG_8706.JPG',
           
        },
        {
            id: 29,
            url: 'image/2024/IMG_8724.JPG',
           
        },
        {
            id: 30,
            url: 'image/2024/IMG_8742.JPG',
            
        },
        {
            id: 31,
            url: 'image/2024/IMG_8776.JPG',
           
        },
        {
            id: 32,
            url: 'image/2024/IMG_8785.JPG',
            
        },
        {
            id: 33,
            url: 'image/2024/IMG_8789.JPG',
           
        },
        {
            id: 34,
            url: 'image/2024/IMG_8812.JPG',
            
        },
        {
            id: 35,
            url: 'image/2024/IMG_8822.JPG',
            
        },
        {
            id: 36,
            url: 'image/2024/IMG_8836.JPG',
            
        },
        {
            id: 37,
            url: 'image/2024/IMG_8865.JPG',
            
        },
        {
            id: 38,
            url: 'image/2024/IMG_9019.JPG',
           
        },
        {
            id: 39,
            url: 'image/2024/IMG_9029.JPG',
            
        },
        {
            id: 40,
            url: 'image/2024/IMG_9058.JPG',
           
        },
        {
            id: 41,
            url: 'image/2024/IMG_9067.JPG',
           
        },
        {
            id: 42,
            url: 'image/2024/IMG_9192.JPG',
          
        },
        {
            id: 43,
            url: 'image/2024/REDL0246.JPG',
          
        },
        {
            id: 44,
            url: 'image/2024/REDL0248.JPG',
            
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
            {/* Floating WhatsApp Button */}
            <FloatingCourses />
        </div>
    )
}

export default Gallery