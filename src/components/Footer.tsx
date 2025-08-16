"use client";
import { motion } from "framer-motion";
import {
  Shield,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Clock,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import { ContactCard } from "@/components/ContactCard";
import { useState } from "react";

const footerLinks = {
  Services: [
    "Physical Gold Storage",
    "Online Gold Trading",
    "Precious Metals IRA",
    "Bullion Authentication",
    "Portfolio Management",
    "Secure Vault Access",
  ],
  "Security & Compliance": [
    "LBMA Approved Vault Facility",
    "Lloyd's of London Insured",
    "SOC 2 Type II Certified",
    "Anti-Money Laundering Compliant",
    "24/7 Armed Security",
    "Segregated Storage Options",
  ],
  Support: [
    "Help Center",
    "Contact Us",
    "Documentation",
    "API Reference",
    "System Status",
    "Community",
  ],
  Legal: [
    "Privacy Policy",
    "Terms of Service",
    "Risk Disclosure",
    "Complaint Procedure",
    "Cookie Policy",
    "Regulatory Info",
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export const Footer = () => {
  const [isContactCardOpen, setIsContactCardOpen] = useState(false);

  const handleScheduleVaultVisit = () => {
    setIsContactCardOpen(true);
  };

  return (
    <footer className="bg-gradient-hero border-t border-border/50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_hsl(var(--gold))_1px,_transparent_0)] [background-size:24px_24px] opacity-[0.02]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <div className="flex items-center space-x-2 mb-6">
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="p-1 rounded-lg bg-gold/10 border border-gold/20"
                >
                  <Shield className="h-8 w-8 text-gold" />
                </motion.div>
                <span className="text-2xl font-bold text-gradient-gold">
                  Fortune Lock Depository
                </span>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                <span className="font-medium">Established since 1983.</span>
                <br />
                Your trusted partner for secure precious metals storage,
                trading, and investment solutions.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-6">
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center space-x-3 group cursor-pointer"
                >
                  <div className="p-2 rounded-lg bg-gold/10 border border-gold/20 group-hover:bg-gold/20 transition-colors duration-200">
                    <MapPin className="h-4 w-4 text-gold" />
                  </div>
                  <span className="text-sm text-foreground group-hover:text-gold transition-colors duration-200">
                    15 Kensington St., London, UK
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center space-x-3 group cursor-pointer"
                >
                  <div className="p-2 rounded-lg bg-gold/10 border border-gold/20 group-hover:bg-gold/20 transition-colors duration-200">
                    <Phone className="h-4 w-4 text-gold" />
                  </div>
                  <span className="text-sm text-foreground group-hover:text-gold transition-colors duration-200">
                    +8136163830 | +44 7424 699987
                  </span>
                </motion.div>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center space-x-3 group cursor-pointer"
                >
                  <div className="p-2 rounded-lg bg-gold/10 border border-gold/20 group-hover:bg-gold/20 transition-colors duration-200">
                    <Mail className="h-4 w-4 text-gold" />
                  </div>
                  <span className="text-sm text-foreground group-hover:text-gold transition-colors duration-200">
                    info@fortunelockdepository.com
                  </span>
                </motion.div>
              </div>

              {/* Working Hours */}
              <motion.div
                whileHover={{ x: 4 }}
                className="bg-muted/5 border border-border/20 rounded-lg p-4 mb-6"
              >
                <div className="flex items-center space-x-2 mb-3">
                  <Clock className="h-4 w-4 text-gold" />
                  <span className="text-sm font-medium text-gold">
                    Vault Access Hours
                  </span>
                </div>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                  <p>Sat: 10:00 AM - 4:00 PM</p>
                  <p className="text-gold font-medium">24/7 Online Trading</p>
                </div>
              </motion.div>

              {/* CTA */}
              <Button
                variant="hero-outline"
                size="sm"
                className="shadow-lg hover:shadow-gold/25 hover:cursor-pointer"
                onClick={handleScheduleVaultVisit}
              >
                Book Vault Visit
              </Button>
            </motion.div>

            {/* Links Sections */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <h3 className="font-semibold text-gold border-b border-gold/20 pb-2 relative flex items-center gap-2">
                    {category === "Services" && <Award className="h-4 w-4" />}
                    {category}
                    <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-gold"></div>
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link, linkIndex) => (
                      <motion.li
                        key={link}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1 + linkIndex * 0.05,
                        }}
                        viewport={{ once: true }}
                      >
                        <a
                          href="#"
                          className="text-sm text-muted-foreground hover:text-gold transition-colors duration-200 flex items-center group hover:cursor-pointer"
                        >
                          <span className="w-0 group-hover:w-2 h-px bg-gold transition-all duration-200 mr-0 group-hover:mr-2"></span>
                          {category === "Services" ||
                          category === "Security & Compliance"
                            ? `• ${link}`
                            : link}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-border/50 py-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground order-2 lg:order-1">
              <p>© 2025 Fortune Lock Depository LLC. All rights reserved.</p>
              <p className="text-xs text-muted-foreground/70 mt-1">
                Licensed Precious Metals Dealer • Member: LBMA, IPMI • FDIC
                Insured up to $250,000
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3 order-1 lg:order-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.5 + index * 0.1,
                    type: "spring",
                    stiffness: 400,
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotate: 15,
                    backgroundColor: "hsl(var(--gold) / 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-muted/10 border border-border/30 rounded-xl flex items-center justify-center hover:border-gold/50 transition-all duration-200 backdrop-blur-sm hover:cursor-pointer"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground hover:text-gold transition-colors duration-200" />
                </motion.a>
              ))}
            </div>

            {/* Compliance */}
            <div className="text-xs text-muted-foreground text-center lg:text-right order-3 space-y-1">
              <div className="flex items-center justify-center lg:justify-end space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>LBMA Certified • Lloyd&apos;s Insured • ISO 27001</span>
              </div>
              <div className="text-muted-foreground/80">
                Regulated by Financial Conduct Authority
              </div>
            </div>
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-border/30 py-6"
        >
          <div className="bg-muted/5 border border-border/20 rounded-lg p-4">
            <p className="text-xs text-muted-foreground max-w-4xl mx-auto leading-relaxed text-center">
              <span className="text-gold font-medium">Important Notice:</span>{" "}
              Precious metals investments carry market risk. Past performance
              does not guarantee future results. All storage and transaction
              fees apply as per our fee schedule. Physical gold deposits require
              proper documentation and verification. Consult with a qualified
              financial advisor before making investment decisions.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Contact Card Modal */}
      <ContactCard
        isOpen={isContactCardOpen}
        onClose={() => setIsContactCardOpen(false)}
      />
    </footer>
  );
};
