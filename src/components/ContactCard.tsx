"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";

interface ContactCardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactCard = ({ isOpen, onClose }: ContactCardProps) => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+8136163830 | +44 7424 699987",
      href: "tel:+8136163830",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@fortunelockdepository.com",
      href: "mailto:info@fortunelockdepository.com",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "15 Kensington St., London, UK",
      href: "https://maps.google.com",
    },
    {
      icon: Clock,
      label: "Vault Access Hours",
      value: "Mon-Fri: 9AM-6PM | Sat: 10AM-4PM | 24/7 Online Trading",
      href: null,
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{
              duration: 0.4,
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg mx-4"
          >
            <div className="bg-gradient-card border border-gold/30 rounded-2xl p-8 shadow-2xl backdrop-blur-sm relative overflow-hidden">
              {/* Background decorations */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold/5 rounded-full translate-y-12 -translate-x-12"></div>

              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-gold/10 hover:bg-gold/20 hover:cursor-pointer transition-colors duration-200 border border-gold/20 hover:border-gold/40"
              >
                <X className="h-4 w-4 text-gold" />
              </motion.button>

              <div className="relative z-10">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-center mb-8"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gold/20 border border-gold/30 flex items-center justify-center">
                    <Phone className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Get in Touch
                  </h3>
                  <p className="text-muted-foreground">
                    Contact our team for personalized assistance
                  </p>
                </motion.div>

                {/* Contact Information */}
                <div className="space-y-4 mb-8">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="group"
                    >
                      {item.href ? (
                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="flex items-start space-x-4 p-3 rounded-xl hover:bg-gold/10 transition-all duration-200 border border-transparent hover:border-gold/30"
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center group-hover:bg-gold/20 group-hover:border-gold/40 transition-all duration-200">
                            <item.icon className="h-5 w-5 text-gold" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground group-hover:text-gold transition-colors duration-200">
                              {item.label}
                            </p>
                            <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                              {item.value}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start space-x-4 p-3 rounded-xl">
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center">
                            <item.icon className="h-5 w-5 text-gold" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">
                              {item.label}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {item.value}
                            </p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <Button
                    variant="hero"
                    size="lg"
                    className="flex-1 shadow-gold hover:shadow-gold/50"
                    onClick={() => window.open("tel:+8136163830")}
                  >
                    Call Now
                  </Button>
                  <Button
                    variant="hero-outline"
                    size="lg"
                    className="flex-1 shadow-gold hover:shadow-gold/50"
                    onClick={() =>
                      window.open("mailto:info@fortunelockdepository.com")
                    }
                  >
                    Send Email
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
