import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./providers/ReduxProvider";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fortune Lock",
  description: "A gold vault to purchase gold",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main>{children}</main>
            <Toaster
              position="top-right"
              reverseOrder={false}
              toastOptions={{
                className: "",
                duration: 5000,
              }}
            />
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
