"use client";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileCheck, Zap, Users } from "lucide-react";
import Image from "next/image";

const securityFeatures = [
  {
    icon: Shield,
    title: "Multi-Layer Security",
    description:
      "Biometric access, 24/7 surveillance, and military-grade protection systems.",
  },
  {
    icon: Lock,
    title: "Bank-Grade Encryption",
    description:
      "End-to-end encryption for all digital transactions and data storage.",
  },
  {
    icon: Eye,
    title: "Transparent Auditing",
    description:
      "Regular third-party audits and real-time inventory verification.",
  },
  {
    icon: FileCheck,
    title: "Full Compliance",
    description:
      "Regulated under international standards with comprehensive insurance coverage.",
  },
  {
    icon: Zap,
    title: "Instant Verification",
    description:
      "Real-time verification of gold authenticity and storage location.",
  },
  {
    icon: Users,
    title: "Expert Management",
    description:
      "Professional team with decades of experience in precious metals security.",
  },
];

export const SecuritySection = () => {
  return (
    <section
      id="security"
      className="py-24 bg-gradient-hero relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--gold)/0.05)_1px,_transparent_1px)] [background-size:32px_32px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Uncompromising <span className="text-gradient-gold">Security</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your wealth deserves the highest level of protection. Our
            state-of-the-art security measures ensure your gold is safe, secure,
            and accessible only to you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Security Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-elegant bg-card border border-border/30 backdrop-blur-sm">
              <Image
                src="/gold-security.jpg"
                alt="FortuneLock Security Technology"
                width={600}
                height={384}
                className="w-full h-96 object-cover"
                quality={90}
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

              {/* Animated Security Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                  type: "spring",
                  stiffness: 300,
                }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                viewport={{ once: true }}
                className="absolute top-6 right-6 bg-gradient-gold text-navy px-4 py-2 rounded-lg font-semibold shadow-gold border border-gold/30"
              >
                99.99% Secure
              </motion.div>

              {/* Floating Security Indicators */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-6 left-6 bg-card/95 backdrop-blur-sm border border-border rounded-lg p-3 shadow-card"
              >
                <div className="flex items-center space-x-2">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-2 h-2 bg-green-500 rounded-full"
                  />
                  <span className="text-sm font-medium text-card-foreground">
                    Live Monitoring
                  </span>
                </div>
              </motion.div>

              {/* Additional floating element */}
              <motion.div
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-6 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-2 shadow-card"
              >
                <div className="flex items-center space-x-2">
                  <Lock className="w-4 h-4 text-gold" />
                  <span className="text-xs font-medium text-card-foreground">
                    Encrypted
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Security Features */}
          <div className="space-y-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{ x: 8 }}
                className="flex items-start space-x-4 group cursor-default"
              >
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 10,
                    backgroundColor: "hsl(var(--gold) / 0.2)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="w-12 h-12 bg-muted/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-border/30 group-hover:border-gold/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <feature.icon className="h-6 w-6 text-gold group-hover:text-gold-light transition-colors duration-300" />
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-gold transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Security Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-gradient-card border border-border/30 rounded-xl p-8 shadow-elegant backdrop-blur-sm relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold/5 rounded-full translate-y-12 -translate-x-12"></div>

          {[
            { value: "$5B+", label: "Assets Protected", delay: 0 },
            { value: "99.99%", label: "Uptime", delay: 0.1 },
            { value: "24/7", label: "Monitoring", delay: 0.2 },
            { value: "0", label: "Security Breaches", delay: 0.3 },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.6 + stat.delay,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="text-center group cursor-default relative"
            >
              <div className="text-3xl font-bold text-gold mb-2 group-hover:text-gold-light transition-colors duration-200">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                {stat.label}
              </div>

              {/* Subtle hover effect */}
              <div className="absolute inset-0 bg-gold/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Compliance Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-foreground">
            Regulatory Compliance & Insurance
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { icon: FileCheck, label: "LBMA Certified" },
              { icon: Shield, label: "Lloyd's of London Insured" },
              { icon: Lock, label: "ISO 27001 Certified" },
              { icon: Eye, label: "Regulatory Audited" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + index * 0.1,
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-card/50 backdrop-blur-sm border border-border/30 rounded-lg px-4 py-3 hover:border-gold/30 transition-all duration-200 group cursor-default"
              >
                <div className="p-1 bg-gold/10 rounded-md group-hover:bg-gold/20 transition-colors duration-200">
                  <item.icon className="h-4 w-4 text-gold group-hover:text-gold-light transition-colors duration-200" />
                </div>
                <span className="text-sm font-medium text-foreground group-hover:text-gold transition-colors duration-200">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
