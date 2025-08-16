"use client";
import { motion } from "framer-motion";
import {
  Shield,
  TrendingUp,
  CreditCard,
  Building,
  Eye,
  UserCheck,
} from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import Link from "next/link";

const features = [
  {
    icon: Shield,
    title: "Secure Vault Storage",
    description:
      "State-of-the-art security with multi-layer protection, biometric access, and 24/7 monitoring.",
    delay: 0.1,
  },
  {
    icon: TrendingUp,
    title: "Real-Time Tracking",
    description:
      "Monitor your gold holdings in real-time with detailed analytics and performance insights.",
    delay: 0.2,
  },
  {
    icon: CreditCard,
    title: "Buy & Sell Platform",
    description:
      "Seamlessly purchase and liquidate gold through our integrated trading platform.",
    delay: 0.3,
  },
  {
    icon: Building,
    title: "Physical & Digital",
    description:
      "Access both physical vault storage and digital gold management in one platform.",
    delay: 0.4,
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description:
      "Complete visibility into storage locations, insurance coverage, and asset verification.",
    delay: 0.5,
  },
  {
    icon: UserCheck,
    title: "Professional Management",
    description:
      "Expert oversight with discretionary services and personalized account management.",
    delay: 0.6,
  },
];

export const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="py-24 bg-gradient-hero relative overflow-hidden"
    >
      {/* Subtle background pattern - matching other components */}
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
            Premium <span className="text-gradient-gold">Features</span> &
            Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the future of gold storage with cutting-edge technology,
            complete transparency, and professional-grade security measures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: feature.delay,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group cursor-default"
            >
              <div className="bg-gradient-card border border-border/30 rounded-xl p-6 h-full hover:border-gold/50 transition-all duration-300 shadow-elegant hover:shadow-gold/25 backdrop-blur-sm relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gold/5 rounded-full -translate-y-10 translate-x-10 group-hover:bg-gold/10 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-gold/3 rounded-full translate-y-6 -translate-x-6"></div>

                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 10,
                    backgroundColor: "hsl(var(--gold) / 0.2)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:border-gold/50 transition-all duration-300 border border-gold/20 backdrop-blur-sm relative z-10"
                >
                  <feature.icon className="h-6 w-6 text-gold group-hover:text-gold-light transition-colors duration-300" />
                </motion.div>

                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-gold transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed group-hover:text-muted-foreground/90 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Subtle bottom accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 bg-gradient-card border border-border/30 rounded-xl p-8 shadow-elegant backdrop-blur-sm relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-16 translate-x-16"></div>

          {[
            { value: "99.9%", label: "Uptime", delay: 0 },
            { value: "24/7", label: "Support", delay: 0.1 },
            { value: "100%", label: "Insured", delay: 0.2 },
            { value: "40+", label: "Countries", delay: 0.3 },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.7 + stat.delay,
                type: "spring",
                stiffness: 200,
              }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="text-center group cursor-default relative"
            >
              <div className="text-2xl md:text-3xl font-bold text-gold mb-2 group-hover:text-gold-light transition-colors duration-200">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                {stat.label}
              </div>
              <div className="absolute inset-0 bg-gold/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Ready to secure your wealth with industry-leading protection and
            premium features?
          </p>
          <Link href="/signup">
            <Button
              variant="hero"
              size="lg"
              className="shadow-gold hover:shadow-gold/50 hover:cursor-pointer"
            >
              Start Your Journey
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
