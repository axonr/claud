import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

/**
 * Claud - AI Photo Editing Landing Page
 * 
 * Design Philosophy: Premium, modern AI tool aesthetic
 * - Purple gradient hero with sophisticated UI mockups
 * - Clean white sections with bold typography
 * - Yellow CTA buttons for high contrast and engagement
 * - Asymmetric layout with flowing visual elements
 */

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-violet-600 rounded-lg flex items-center justify-center text-white font-bold">
              C
            </div>
            <span className="text-xl font-bold text-gray-900" style={{fontFamily: "'Poppins', sans-serif"}}>Claud</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">About</a>
            <a href="#tools" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Tools</a>
            <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Pricing</a>
            <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Contact</a>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <button className="btn-primary">Get Started</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <nav className="flex flex-col gap-4 p-4">
              <a href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900">About</a>
              <a href="#tools" className="text-sm font-medium text-gray-600 hover:text-gray-900">Tools</a>
              <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-gray-900">Contact</a>
              <button className="btn-primary w-full">Get Started</button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-700 via-purple-600 to-violet-600 py-20 md:py-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-violet-400 rounded-full blur-3xl opacity-20"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{fontFamily: "'Poppins', sans-serif"}}>
                Effortless AI-Powered Photo Editing for Everyone
              </h1>
              <p className="text-lg md:text-xl text-purple-100 mb-8 leading-relaxed">
                Transform your photos instantly with cutting-edge AI tools. No experience needed. Professional results guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-full hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105" style={{fontFamily: "'Poppins', sans-serif"}}>
                  Start Free Trial
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-200">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Right - Feature Showcase */}
            <div className="relative h-96 md:h-full flex items-center justify-center">
              {/* Main Image - Placeholder */}
              <div className="absolute w-64 h-80 bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 z-20 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 flex flex-col items-center justify-center p-4 text-center">
                  <div className="text-4xl mb-2">🎨</div>
                  <p className="text-sm font-semibold text-gray-700">Claud App Interface</p>
                  <p className="text-xs text-gray-500 mt-2">AI Photo Editor</p>
                </div>
              </div>

              {/* Floating Card 1 - CAROLINA STOLF */}
              <div className="absolute top-0 left-0 w-56 h-64 bg-white rounded-2xl shadow-xl overflow-hidden transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <img src="/images/CAROLINA STOLF.png" alt="Carolina Stolf" className="w-full h-full object-cover" />
              </div>

              {/* Floating Card 2 - CHARLOTTE LION */}
              <div className="absolute bottom-0 right-0 w-56 h-64 bg-white rounded-2xl shadow-xl overflow-hidden transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <img src="/images/CHARLOTTE LION.png" alt="Charlotte Lion" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>
              Transform Your Photo Instantly With AI Tools
            </h2>
            <div className="flex items-center gap-3">
              <div className="w-12 h-1 bg-yellow-400"></div>
              <span className="text-yellow-500 font-semibold">POWERFUL FEATURES</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Feature 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-purple-100">
                  <span className="text-2xl">🖼️</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{fontFamily: "'Poppins', sans-serif"}}>Ultra HD Image Upscaler</h3>
                <p className="text-gray-600 leading-relaxed">
                  Enhance your photos with our advanced upscaling technology. Transform low-resolution images into stunning high-definition masterpieces with AI-powered enhancement.
                </p>
              </div>
            </div>

            {/* Feature Image - CHANTI GREWS */}
            <div className="relative">
              <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl">
                <img src="/images/CHANTI GREWS.jpg" alt="Chanti Grews" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Feature Image - CAROLINA STOLF */}
            <div className="relative order-last md:order-none">
              <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl">
                <img src="/images/CAROLINA STOLF.png" alt="Carolina Stolf" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-6 order-none md:order-last">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-lg bg-purple-100">
                  <span className="text-2xl">☁️</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{fontFamily: "'Poppins', sans-serif"}}>AI-Powered Sky Replacement</h3>
                <p className="text-gray-600 leading-relaxed">
                  Replace boring skies with stunning alternatives. Our AI intelligently detects and replaces skies while preserving natural lighting and shadows for perfect results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-20 md:py-32 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center" style={{fontFamily: "'Poppins', sans-serif"}}>
            More Powerful Tools
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tool Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{fontFamily: "'Poppins', sans-serif"}}>Background Removal</h3>
              <p className="text-gray-600">
                Remove backgrounds instantly with pixel-perfect precision. Perfect for product photos and portraits.
              </p>
            </div>

            {/* Tool Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{fontFamily: "'Poppins', sans-serif"}}>Color Enhancement</h3>
              <p className="text-gray-600">
                Automatically enhance colors and contrast. Make your photos pop with intelligent color grading.
              </p>
            </div>

            {/* Tool Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{fontFamily: "'Poppins', sans-serif"}}>Smart Restoration</h3>
              <p className="text-gray-600">
                Restore old and damaged photos. Bring vintage memories back to life with AI restoration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-purple-600 to-violet-600">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{fontFamily: "'Poppins', sans-serif"}}>
            Ready to Transform Your Photos?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of creators using Claud to edit photos faster and smarter.
          </p>
          <button className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-full hover:bg-yellow-300 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105" style={{fontFamily: "'Poppins', sans-serif"}}>
            Get Started Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-violet-600 rounded-lg flex items-center justify-center text-white font-bold">
                  C
                </div>
                <span className="text-xl font-bold text-white" style={{fontFamily: "'Poppins', sans-serif"}}>Claud</span>
              </div>
              <p className="text-sm text-gray-400">
                AI-powered photo editing for everyone. Make professional edits in seconds.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-bold text-white mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Security</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Roadmap</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-white mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold text-white mb-4" style={{fontFamily: "'Poppins', sans-serif"}}>Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Cookies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">License</a></li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400">
                © 2024 Claud. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white transition">GitHub</a>
                <a href="#" className="text-gray-400 hover:text-white transition">Discord</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
