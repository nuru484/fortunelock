import LoginForm from "@/components/auth/login-form";
import { Header } from "@/components/Header";
import { Shield } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="min-h-screen relative">
      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        {/* Main login area with professional branding */}
        <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
          <div className="w-full max-w-md">
            {/* Professional branding section */}
            <div className="text-center my-8">
              <h1 className="text-3xl font-bold text-gradient-gold mb-2">
                Fortune Lock Depository
              </h1>
              <p className="text-muted-foreground text-sm">
                Secure Access to Your Precious Metals Account
              </p>
              <div className="mt-4 text-xs text-muted-foreground/80">
                <span className="inline-flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  LBMA Certified • Lloyd&apos;s Insured • Established 1983
                </span>
              </div>
            </div>

            {/* Enhanced login form wrapper */}
            <div className="relative">
              {/* Form container */}
              <div className="relative bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-border/50">
                <LoginForm />
              </div>
            </div>

            {/* Security badges */}
            <div className="my-8 text-center">
              <div className="flex items-center justify-center space-x-6 text-xs text-muted-foreground/60">
                <div className="flex items-center space-x-1">
                  <Shield className="h-3 w-3" />
                  <span>256-bit SSL</span>
                </div>
                <div className="w-px h-4 bg-border/50"></div>
                <div className="flex items-center space-x-1">
                  <Shield className="h-3 w-3" />
                  <span>SOC 2 Compliant</span>
                </div>
                <div className="w-px h-4 bg-border/50"></div>
                <div className="flex items-center space-x-1">
                  <Shield className="h-3 w-3" />
                  <span>FDIC Insured</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LoginPage;
