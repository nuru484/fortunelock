"use client";
import { motion } from "framer-motion";
import { UserPlus, CreditCard, BarChart3, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Open Your Account",
    description:
      "Register online in minutes or visit our secure facility. Complete identity verification and choose your storage plan.",
    delay: 0.1,
  },
  {
    icon: CreditCard,
    step: "02",
    title: "Deposit or Purchase",
    description:
      "Transfer existing gold holdings to our vault or purchase gold directly through our platform at competitive rates.",
    delay: 0.2,
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Track & Manage",
    description:
      "Monitor your portfolio in real-time, receive detailed reports, and manage your holdings anytime, anywhere.",
    delay: 0.3,
  },
];

export const HowItWorksSection = () => {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-gradient-hero relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--gold)/0.03)_1px,_transparent_1px)] [background-size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            How <span className="text-gradient-gold">Fortune Lock</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Getting started with secure gold storage is simple. Follow these
            three steps to begin protecting and growing your wealth.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute left-1/2 top-24 bottom-24 w-px bg-gradient-to-b from-gold/30 via-gold/60 to-gold/30 transform -translate-x-px" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: step.delay,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-16 lg:mb-24 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Step Content */}
              <motion.div
                whileHover={{ y: -4 }}
                className={`flex-1 ${
                  index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"
                }`}
              >
                <div className="bg-gradient-card border border-border/30 rounded-xl p-8 shadow-elegant hover:shadow-gold/25 hover:border-gold/50 transition-all duration-300 backdrop-blur-sm relative overflow-hidden group">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gold/5 rounded-full -translate-y-10 translate-x-10 group-hover:bg-gold/10 transition-colors duration-300"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gold/3 rounded-full translate-y-8 -translate-x-8"></div>

                  <div className="flex items-start space-x-4 relative z-10">
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: 10,
                        backgroundColor: "hsl(var(--gold) / 0.2)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      className="w-12 h-12 bg-gold/10 border border-gold/20 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm group-hover:border-gold/50 transition-all duration-300"
                    >
                      <step.icon className="h-6 w-6 text-gold group-hover:text-gold-light transition-colors duration-300" />
                    </motion.div>

                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          className="text-sm font-bold text-gold bg-gold/10 border border-gold/20 px-3 py-1 rounded-full backdrop-blur-sm group-hover:bg-gold/20 group-hover:border-gold/30 transition-all duration-300"
                        >
                          STEP {step.step}
                        </motion.span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-gold transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed group-hover:text-muted-foreground/90 transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Subtle bottom accent */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>

              {/* Center Circle */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: step.delay + 0.3,
                  type: "spring",
                  stiffness: 300,
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                viewport={{ once: true }}
                className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-gold rounded-full items-center justify-center shadow-gold border border-gold/30 z-10 backdrop-blur-sm"
              >
                <span className="text-xl font-bold text-navy">{step.step}</span>
              </motion.div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{
                    opacity: 1,
                    y: [0, 5, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.5, delay: step.delay + 0.5 },
                    y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  }}
                  viewport={{ once: true }}
                  className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 lg:hidden"
                >
                  <div className="p-2 bg-gold/10 border border-gold/20 rounded-full backdrop-blur-sm">
                    <ArrowDown className="h-4 w-4 text-gold" />
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Progress Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-4 mb-16"
        >
          {steps.map((_, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.5 + index * 0.1,
                type: "spring",
              }}
              viewport={{ once: true }}
              className="w-2 h-2 bg-gold/30 rounded-full"
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-gradient-card border border-border/30 rounded-xl p-8 shadow-elegant backdrop-blur-sm relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold/5 rounded-full translate-y-12 -translate-x-12"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Join thousands of investors who trust Fortune Lock Depository with
              their wealth protection and precious metals storage.
            </p>
            <Button
              variant="hero"
              size="lg"
              className="shadow-gold hover:shadow-gold/50"
            >
              Open Account Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
