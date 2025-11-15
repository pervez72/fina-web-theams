
import React, { useState } from 'react';
import { ZapIcon, MenuIcon } from './Icons';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 bg-[#0B1120]/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <a href="#" className="flex items-center gap-2.5 cursor-pointer group">
                        <div className="w-9 h-9 bg-gradient-to-br from-brand-primary to-brand-accent rounded-lg flex items-center justify-center text-white shadow-glow-blue group-hover:scale-105 transition-transform">
                            <ZapIcon className="w-5 h-5 fill-current" />
                        </div>
                        <span className="font-heading font-bold text-2xl text-white tracking-tight">AsuX<span className="text-brand-primary">AI</span></span>
                    </a>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#services" className="text-sm font-medium text-brand-muted hover:text-white transition-colors">Services</a>
                        <a href="#work" className="text-sm font-medium text-brand-muted hover:text-white transition-colors">Our Work</a>
                        <a href="#industries" className="text-sm font-medium text-brand-muted hover:text-white transition-colors">Industries</a>
                        <a href="#about" className="text-sm font-medium text-brand-muted hover:text-white transition-colors">About</a>
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <a href="#contact" className="text-brand-muted font-medium text-sm hover:text-white transition-colors">Contact Us</a>
                        <a href="#contact" className="btn-primary px-5 py-2.5 rounded-lg font-semibold text-sm">
                            Get a Quote
                        </a>
                    </div>

                    <div className="md:hidden">
                        <button id="mobile-menu-btn" className="text-gray-400 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <MenuIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>

            <div id="mobile-menu" className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-brand-surface border-b border-brand-border absolute w-full`}>
                <div className="px-4 pt-2 pb-6 space-y-2">
                    <a href="#services" className="block px-3 py-3 text-base font-medium text-gray-300 hover:bg-white/5 rounded-md" onClick={() => setIsMenuOpen(false)}>Services</a>
                    <a href="#work" className="block px-3 py-3 text-base font-medium text-gray-300 hover:bg-white/5 rounded-md" onClick={() => setIsMenuOpen(false)}>Our Work</a>
                    <a href="#contact" className="block w-full mt-4 text-center bg-brand-primary text-white px-3 py-3 font-bold rounded-md" onClick={() => setIsMenuOpen(false)}>Get a Quote</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;
