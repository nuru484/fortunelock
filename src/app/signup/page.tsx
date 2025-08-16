import SignupForm from "@/components/auth/signup-form";
import { Header } from "@/components/Header";
import { Shield } from "lucide-react";

const SignupPage = () => {
  return (
    <div className="min-h-screen relative">
      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        {/* Main signup area with professional branding */}
        <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="w-full max-w-2xl">
            {/* Professional branding section */}
            <div className="text-center my-8">
              <div className="flex justify-center mb-6"></div>
              <h1 className="text-3xl font-bold text-gradient-gold mb-2">
                Fortune Lock Depository
              </h1>
              <p className="text-muted-foreground text-sm mb-2">
                Create Your Secure Precious Metals Account
              </p>
              <div className="text-xs text-muted-foreground/80">
                <span className="inline-flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Join thousands of investors • LBMA Certified • Established
                  1983
                </span>
              </div>
            </div>

            {/* Enhanced signup form wrapper */}
            <div className="relative">
              {/* Form container */}
              <div className="relative bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-border/50">
                <SignupForm />
              </div>
            </div>

            {/* Security badges */}
            <div className="mt-8 text-center">
              <div className="flex items-center justify-center space-x-6 text-xs text-muted-foreground/60">
                <div className="flex items-center space-x-1">
                  <Shield className="h-3 w-3" />
                  <span>256-bit SSL</span>
                </div>
                <div className="w-px h-4 bg-border/50"></div>
                <div className="flex items-center space-x-1">
                  <Shield className="h-3 w-3" />
                  <span>KYC Protected</span>
                </div>
                <div className="w-px h-4 bg-border/50"></div>
                <div className="flex items-center space-x-1">
                  <Shield className="h-3 w-3" />
                  <span>GDPR Compliant</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground/60 mt-3">
                Your personal information is protected with bank-level security
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SignupPage;
