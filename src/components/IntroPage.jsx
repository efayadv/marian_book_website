import 'react';
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useNavigate } from "react-router-dom";
import bookCover from '../images/book_cover_marian_hd.jpg';
import authorPic from '../images/marian_authorpic_placeholder.jpg';


export default function IntroPage() {

    const navigate = useNavigate();

    const scrollToSummary = () => {
        document.getElementById('summary')?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
                {/* Intro Section */}
                < section className="min-h-screen flex items-center justify-center px-6 py-12" >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
                    >
                        {/* Book Cover */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex justify-center"
                        >
                            <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg opacity-20 group-hover:opacity-30 blur-xl transition duration-500"></div>
                                <ImageWithFallback
                                    src={bookCover}
                                    alt="Book Cover"
                                    className="relative w-full max-w-md h-auto rounded-lg shadow-2xl transform group-hover:scale-105 transition duration-500"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-6"
                        >
                            <motion.h1
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="text-5xl md:text-6xl text-gray-900 leading-tight"
                            >
                                A story that will 
                                <span className="block text-gray-700 italic">Transform You</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="text-xl text-gray-600 leading-relaxed"
                            >
                                Discover a journey through words that will captivate your imagination and touch your heart.
                            </motion.p>

                            { /* Author Section */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 1 }}
                                className="flex items-center gap-4 pt-4"
                            >
                                <ImageWithFallback
                                    src={authorPic}
                                    alt="Author"
                                    className="w-16 h-16 rounded-full object-cover shadow-md"
                                />
                                <div>
                                    <p className="text-gray-900">by Marian Fayad</p>
                                </div>
                            </motion.div>

                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 1.2 }}
                                onClick={scrollToSummary}
                                className="mt-6 text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
                                whileHover={{ y: 5 }}
                            >
                                <span>Scroll to learn more</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Summary Section */}
                <section id="summary" className="min-h-screen flex items-center justify-center px-6 py-20 bg-white">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl text-gray-900 mb-8 text-center"
                        >
                            About this book
                        </motion.h2>

                        <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="prose prose-lg mx-auto text-gray-700 space-y-6 mb-12"
                        >
                            <p>
                                In this compelling narrative, discover a world where dreams collide with reality, 
                                and the boundaries of what's possible are pushed beyond imagination. This story 
                                weaves together themes of love, loss, and redemption in ways that will stay with 
                                you long after you turn the final page.
                            </p>
                            <p>
                                Perfect for readers who appreciate deeply human stories with rich character 
                                development and unexpected plot twists. This book has been praised by critics 
                                and readers alike for its emotional depth and masterful storytelling.
                            </p>
                            <p>
                                Whether you're looking for an escape from everyday life or a mirror to reflect 
                                on your own journey, this book offers something truly special.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                            className="flex justify-center"
                        >
                            <motion.button
                                onClick={() => navigate('/order')}
                                className="px-12 py-4 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors shadow-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Buy Book
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </section>
            </div>
        </>
    );
}