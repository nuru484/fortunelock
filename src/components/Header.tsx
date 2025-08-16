"use client";
import { motion } from "framer-motion";
import { Shield, Phone, Mail } from "lucide-react";
import { Button } from "./ui/enhanced-button";
import ModeToggleButton from "./ModeToggleButton";
import Link from "next/link";

export const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex items-center space-x-3"
            >
              <Shield className="h-7 w-7 text-primary" />
              <span className="text-xl font-semibold text-foreground">
                FortuneLock
              </span>
            </motion.div>
          </Link>

          {/* Contact Info - Desktop Only */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="hidden lg:flex items-center space-x-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-primary" />
              <span className="hover:text-foreground transition-colors">
                +8136163830 | +44 7424 699987
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-primary" />
              <span className="hover:text-foreground transition-colors">
                info@fortunelock.com
              </span>
            </div>
          </motion.div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <Button
              variant="outline"
              size="sm"
              className="font-medium border hover:bg-accent transition-colors"
              asChild
            >
              <Link href="/login">Sign In</Link>
            </Button>
            <Button
              size="sm"
              className="font-medium shadow-sm hover:shadow-md transition-all duration-200"
              asChild
            >
              <Link href="/signup">Get Started</Link>
            </Button>
            <ModeToggleButton />
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};
