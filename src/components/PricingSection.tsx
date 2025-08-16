"use client";
import { motion } from "framer-motion";
import { Check, Star, Crown } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";

const plans = [
  {
    name: "Essential",
    price: "0.50",
    period: "per oz/month",
    description: "Perfect for new investors getting started with gold storage",
    features: [
      "Secure vault storage",
      "24/7 monitoring",
      "Digital tracking",
      "Basic insurance coverage",
      "Monthly reports",
      "Email support",
    ],
    popular: false,
    icon: Check,
  },
  {
    name: "Professional",
    price: "0.35",
    period: "per oz/month",
    description: "Ideal for serious investors with larger holdings",
    features: [
      "All Essential features",
      "Premium insurance",
      "Real-time alerts",
      "Physical inspection access",
      "Priority support",
      "Tax reporting assistance",
      "Portfolio analytics",
    ],
    popular: true,
    icon: Star,
  },
  {
    name: "Institutional",
    price: "Custom",
    period: "tailored pricing",
    description: "For institutions and high-net-worth individuals",
    features: [
      "All Professional features",
      "Dedicated account manager",
      "Custom reporting",
      "Bulk storage discounts",
      "White-glove service",
      "24/7 phone support",
      "Compliance assistance",
    ],
    popular: false,
    icon: Crown,
  },
];

export const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="py-24 bg-gradient-hero relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(var(--gold)/0.03)_1px,_transparent_1px)] [background-size:60px_60px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Simple, <span className="text-gradient-gold">Transparent</span>{" "}
            Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose the plan that fits your needs. No hidden fees, no surprises.
            Start securing your wealth today with our competitive rates.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 group cursor-default overflow-hidden ${
                plan.popular
                  ? "bg-gradient-card border-2 border-gold/50 shadow-gold hover:shadow-gold/50 hover:border-gold/70"
                  : "bg-gradient-card border border-border/30 shadow-elegant hover:shadow-gold/25 hover:border-gold/50"
              }`}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full -translate-y-16 translate-x-16 group-hover:bg-gold/10 transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold/3 rounded-full translate-y-12 -translate-x-12"></div>

              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ scale: 0, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.3,
                    type: "spring",
                    stiffness: 300,
                  }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-gold text-navy font-bold px-6 py-2 rounded-full text-sm shadow-gold border border-gold/30 backdrop-blur-sm"
                >
                  MOST POPULAR
                </motion.div>
              )}

              <div className="text-center mb-8 relative z-10">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 10,
                    backgroundColor: plan.popular
                      ? "hsl(var(--gold) / 0.3)"
                      : "hsl(var(--gold) / 0.2)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center transition-all duration-300 border backdrop-blur-sm ${
                    plan.popular
                      ? "bg-gold/20 border-gold/30"
                      : "bg-gold/10 border-gold/20 group-hover:border-gold/50"
                  }`}
                >
                  <plan.icon
                    className={`h-8 w-8 transition-colors duration-300 ${
                      plan.popular
                        ? "text-gold"
                        : "text-gold group-hover:text-gold-light"
                    }`}
                  />
                </motion.div>

                <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-gold transition-colors duration-300">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed group-hover:text-muted-foreground/90 transition-colors duration-300">
                  {plan.description}
                </p>

                <div className="mb-4">
                  <span
                    className={`text-4xl font-bold transition-colors duration-300 ${
                      plan.popular
                        ? "text-gold"
                        : "text-foreground group-hover:text-gold"
                    }`}
                  >
                    {plan.price === "Custom" ? plan.price : `$${plan.price}`}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-muted-foreground ml-2 text-base">
                      {plan.period}
                    </span>
                  )}
                </div>
                {plan.price === "Custom" && (
                  <span className="text-muted-foreground text-base">
                    {plan.period}
                  </span>
                )}
              </div>

              <ul className="space-y-4 mb-8 relative z-10">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + featureIndex * 0.05 + 0.4,
                    }}
                    whileHover={{ x: 4 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 group/item"
                  >
                    <div
                      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 transition-all duration-200 border backdrop-blur-sm ${
                        plan.popular
                          ? "bg-gold/20 border-gold/30 group-hover/item:bg-gold/30 group-hover/item:border-gold/50"
                          : "bg-gold/10 border-gold/20 group-hover/item:bg-gold/20 group-hover/item:border-gold/30"
                      }`}
                    >
                      <Check
                        className={`h-3 w-3 transition-colors duration-200 ${
                          plan.popular
                            ? "text-gold"
                            : "text-gold group-hover/item:text-gold-light"
                        }`}
                      />
                    </div>
                    <span className="text-sm text-foreground leading-relaxed group-hover/item:text-gold transition-colors duration-200">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <div className="relative z-10">
                <Button
                  variant={plan.popular ? "hero" : "hero-outline"}
                  size="lg"
                  className="w-full shadow-gold hover:shadow-gold/50"
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Button>
              </div>

              {/* Subtle glow effect */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  plan.popular
                    ? "bg-gradient-to-r from-transparent via-gold/5 to-transparent"
                    : "bg-gradient-to-r from-transparent via-gold/3 to-transparent"
                }`}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-card border border-border/30 rounded-xl p-8 max-w-4xl mx-auto shadow-elegant backdrop-blur-sm relative overflow-hidden group">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gold/5 rounded-full -translate-y-20 translate-x-20 group-hover:bg-gold/10 transition-colors duration-500"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold/3 rounded-full translate-y-16 -translate-x-16"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Start Securing Your Gold Today
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
                Join thousands of investors who trust Fortune Lock Depository
                with their precious metals. No setup fees, no long-term
                contracts, cancel anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  className="shadow-gold hover:shadow-gold/50"
                >
                  Create Account
                </Button>
                <Button
                  variant="hero-outline"
                  size="lg"
                  className="shadow-gold hover:shadow-gold/50"
                >
                  Schedule Vault Visit
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground mb-6">
            Trusted by investors worldwide
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {[
              { value: "$5B+", label: "Assets Secured" },
              { value: "10K+", label: "Happy Clients" },
              { value: "99.9%", label: "Uptime" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                className="text-center group cursor-default"
              >
                <div className="text-2xl md:text-3xl font-bold text-gold group-hover:text-gold-light transition-colors duration-200 mb-2">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
