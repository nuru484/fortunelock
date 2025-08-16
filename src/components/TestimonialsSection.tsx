"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    title: "Investment Advisor",
    content:
      "Fortune Lock has revolutionized how I manage my clients' gold portfolios. The transparency and security are unmatched in the industry.",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "David Chen",
    title: "Private Investor",
    content:
      "The peace of mind knowing my gold is stored with military-grade security while having 24/7 digital access is incredible. Best decision I've made.",
    rating: 5,
    avatar: "DC",
  },
  {
    name: "Maria Rodriguez",
    title: "Portfolio Manager",
    content:
      "Real-time tracking and professional management have made Fortune Lock an essential part of our wealth preservation strategy.",
    rating: 5,
    avatar: "MR",
  },
  {
    name: "James Thompson",
    title: "Wealth Manager",
    content:
      "The seamless integration of physical and digital gold management sets Fortune Lock apart. My clients are consistently impressed.",
    rating: 5,
    avatar: "JT",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--gold)/0.03)_1px,_transparent_1px)] [background-size:50px_50px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Trusted by <span className="text-gradient-gold">Investors</span>{" "}
            Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied clients who trust Fortune Lock
            Depository with their most valuable assets.
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-card border border-border/30 rounded-2xl p-8 md:p-12 shadow-elegant backdrop-blur-sm relative overflow-hidden group"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full -translate-y-20 translate-x-20 group-hover:bg-gold/10 transition-colors duration-500"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold/3 rounded-full translate-y-16 -translate-x-16"></div>

            <div className="text-center relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 300,
                }}
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-16 h-16 bg-gold/10 border border-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm group-hover:border-gold/50 transition-all duration-300"
              >
                <Quote className="h-8 w-8 text-gold group-hover:text-gold-light transition-colors duration-300" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-xl md:text-2xl leading-relaxed mb-8 text-foreground"
              >
                `{testimonials[currentIndex].content}`
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center justify-center space-x-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-12 h-12 bg-gradient-gold border border-gold/30 rounded-full flex items-center justify-center text-navy font-bold backdrop-blur-sm shadow-gold/25"
                >
                  {testimonials[currentIndex].avatar}
                </motion.div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[currentIndex].title}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex justify-center mt-4 space-x-1"
              >
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.6 + i * 0.1,
                      type: "spring",
                      stiffness: 400,
                    }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <Star className="h-5 w-5 text-gold fill-current" />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3 mb-16">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 border ${
                index === currentIndex
                  ? "bg-gold border-gold/50 shadow-gold/25"
                  : "bg-muted-foreground/20 border-border/30 hover:bg-gold/30 hover:border-gold/30"
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true }}
              className="bg-gradient-card border border-border/30 rounded-xl p-6 hover:border-gold/50 hover:shadow-gold/25 transition-all duration-300 shadow-elegant backdrop-blur-sm relative overflow-hidden group cursor-default"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gold/5 rounded-full -translate-y-8 translate-x-8 group-hover:bg-gold/10 transition-colors duration-300"></div>

              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 bg-gradient-gold border border-gold/30 rounded-full flex items-center justify-center text-navy font-bold text-sm shadow-gold/25 backdrop-blur-sm"
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <div className="font-semibold text-sm text-foreground group-hover:text-gold transition-colors duration-300">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.title}
                    </div>
                  </div>
                </div>

                <div className="flex mb-3 space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gold fill-current" />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-muted-foreground/90 transition-colors duration-300">
                  `{testimonial.content.substring(0, 120)}...`
                </p>
              </div>

              {/* Subtle bottom accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-gradient-card border border-border/30 rounded-xl p-6 backdrop-blur-sm relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 rounded-full -translate-y-12 translate-x-12"></div>

          <div className="relative z-10">
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>5,000+ Satisfied Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>4.9/5 Average Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>99% Client Retention</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
