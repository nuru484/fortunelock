"use client";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Eye, TrendingUp } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/enhanced-button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <Image
          src="/hero-vault.jpg"
          alt="Fortune Lock Security Vault"
          fill
          className="object-cover opacity-20"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--gold)/0.02)_1px,_transparent_1px)] [background-size:80px_80px]"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gold/10"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-32 left-16 w-48 h-48 rounded-full bg-gold/5"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.02, 0.06, 0.02],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-gold/3"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-foreground">
              Your <span className="text-gradient-gold">Wealth</span>. <br />
              Our <span className="text-gradient-gold">Vault</span>.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            Securely buy, store, and track your gold holdings online or in
            person. Lock in and protect your fortune with unmatched reliability
            and transparency.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              variant="hero"
              size="xl"
              className="group shadow-gold hover:shadow-gold/50 transition-all duration-300"
            >
              Create Account
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="hero-outline"
              size="xl"
              className="shadow-gold hover:shadow-gold/50 transition-all duration-300"
            >
              Visit Our Vault
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-6 pt-8"
          >
            {[
              { icon: Shield, text: "Bank-Grade Security" },
              { icon: Eye, text: "Full Transparency" },
              { icon: TrendingUp, text: "Real-Time Tracking" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                  stiffness: 300,
                }}
                whileHover={{ scale: 1.05, x: 4 }}
                className="flex items-center space-x-3 group cursor-default"
              >
                <div className="p-2 bg-gold/10 border border-gold/20 rounded-lg group-hover:bg-gold/20 group-hover:border-gold/30 transition-all duration-200 backdrop-blur-sm">
                  <item.icon className="h-4 w-4 text-gold group-hover:text-gold-light transition-colors duration-200" />
                </div>
                <span className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-200">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Visual Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative">
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 50px hsl(var(--gold) / 0.2)",
                  "0 0 80px hsl(var(--gold) / 0.4)",
                  "0 0 50px hsl(var(--gold) / 0.2)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-96 h-96 rounded-2xl overflow-hidden shadow-elegant border border-border/30 backdrop-blur-sm"
            >
              <Image
                src="/hero-vault.jpg"
                alt="Fortune Lock Security Technology"
                fill
                className="object-cover"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />

              {/* Security Badge Overlay */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1.5,
                  type: "spring",
                  stiffness: 300,
                }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="absolute top-6 right-6 bg-gradient-gold text-navy px-4 py-2 rounded-lg font-semibold shadow-gold border border-gold/30 backdrop-blur-sm"
              >
                LBMA Certified
              </motion.div>
            </motion.div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="absolute -right-8 top-8 bg-gradient-card border border-border/30 backdrop-blur-sm rounded-xl p-4 shadow-elegant hover:shadow-gold/25 hover:border-gold/30 transition-all duration-300 group cursor-default"
            >
              <div className="text-2xl font-bold text-gold group-hover:text-gold-light transition-colors duration-200">
                99.9%
              </div>
              <div className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-200">
                Uptime
              </div>
              <div className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="absolute -left-8 bottom-8 bg-gradient-card border border-border/30 backdrop-blur-sm rounded-xl p-4 shadow-elegant hover:shadow-gold/25 hover:border-gold/30 transition-all duration-300 group cursor-default"
            >
              <div className="text-2xl font-bold text-gold group-hover:text-gold-light transition-colors duration-200">
                $5B+
              </div>
              <div className="text-sm text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-200">
                Assets Secured
              </div>
              <div className="absolute top-2 right-2 w-2 h-2 bg-gold rounded-full animate-pulse"></div>
            </motion.div>

            {/* Additional floating element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { duration: 0.8, delay: 1.2 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute top-1/2 -right-4 bg-gradient-card border border-border/30 backdrop-blur-sm rounded-lg p-3 shadow-elegant"
            >
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-gold" />
                <span className="text-xs font-medium text-foreground">
                  24/7 Secured
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-gold/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-gold rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
