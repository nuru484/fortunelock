// src/components/Footer.tsx
import { Shield, MapPin, Phone, Mail, Clock, Award } from "lucide-react";

const Footer = () => {
  return (
    <div>
      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-card to-muted text-foreground mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <span className="text-xl font-bold">
                  Fortune Lock Depository
                </span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                <span> Established since 1983.</span> <br /> Your trusted
                partner for secure precious metals storage, trading, and
                investment solutions.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground">
                <span>Licensed Precious Metals Dealer</span>
              </div>
            </div>

            {/* Services */}
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-lg mb-4 flex items-center justify-center md:justify-start gap-2">
                <Award className="w-5 h-5 text-primary" />
                Services
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Physical Gold Storage</p>
                <p>• Online Gold Trading</p>
                <p>• Precious Metals IRA</p>
                <p>• Bullion Authentication</p>
                <p>• Portfolio Management</p>
                <p>• Secure Vault Access</p>
              </div>
            </div>

            {/* Security & Compliance */}
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-lg mb-4">
                Security & Compliance
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• LBMA Approved Vault Facility</p>
                <p>• Lloyd&apos;s of London Insured</p>
                <p>• SOC 2 Type II Certified</p>
                <p>• Anti-Money Laundering Compliant</p>
                <p>• 24/7 Armed Security</p>
                <p>• Segregated Storage Options</p>
              </div>
            </div>

            {/* Contact & Hours */}
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-lg mb-4 flex items-center justify-center md:justify-start gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Contact & Hours
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>15 Kensington St., London, UK</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+8136163830 | +44 7424 699987</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Mail className="w-4 h-4" />
                  <span>info@fortunelockdepository.com</span>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">Vault Access Hours:</p>
                  <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                  <p>Sat: 10:00 AM - 4:00 PM</p>
                  <p className="text-primary">24/7 Online Trading</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-muted-foreground text-sm">
                  © 2025 Fortune Lock Depository LLC. All rights reserved.
                </p>
                <p className="text-xs text-muted-foreground/70 mt-1">
                  Licensed Precious Metals Dealer • Member: LBMA, IPMI • FDIC
                  Insured up to $250,000
                </p>
              </div>
              <div className="flex space-x-6 text-xs text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Risk Disclosure
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  Complaint Procedure
                </a>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-6 p-4 bg-secondary rounded-lg">
              <p className="text-xs text-muted-foreground text-center leading-relaxed">
                <strong className="text-primary">Important Notice:</strong>
                Precious metals investments carry market risk. Past performance
                does not guarantee future results. All storage and transaction
                fees apply as per our fee schedule. Physical gold deposits
                require proper documentation and verification. Consult with a
                qualified financial advisor before making investment decisions.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
