"use client";
import { motion } from "framer-motion";
import { Shield, Mail, Phone, ExternalLink } from "lucide-react";

export const DashboardFooter = () => {
  return (
    <footer className="border-t border-border/50 bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Brand & Status */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <motion.div
                  whileHover={{ rotate: 15 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="p-1 rounded-md bg-gold/10"
                >
                  <Shield className="h-5 w-5 text-gold" />
                </motion.div>
                <span className="font-semibold text-gold text-sm">
                  Fortune Lock Depository
                </span>
              </div>

              <div className="hidden md:flex items-center space-x-2 text-xs text-muted-foreground">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>LBMA Certified • Lloyd&apos;s Insured</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex items-center space-x-6 text-xs">
              <a
                href="#"
                className="text-muted-foreground hover:text-gold transition-colors duration-200 flex items-center space-x-1"
              >
                <Mail className="h-3 w-3" />
                <span>Support</span>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-gold transition-colors duration-200 flex items-center space-x-1"
              >
                <Phone className="h-3 w-3" />
                <span>+44 7424 699987</span>
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-gold transition-colors duration-200 flex items-center space-x-1"
              >
                <ExternalLink className="h-3 w-3" />
                <span>Help Center</span>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-xs text-muted-foreground/80">
              © 2025 Fortune Lock Depository LLC
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
