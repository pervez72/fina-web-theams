
import React from 'react';
import { ZapIcon, LinkedinIcon, TwitterIcon, GithubIcon } from './Icons';

const Footer = () => {
    return (
        <footer className="bg-[#080c17] border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <ZapIcon className="w-6 h-6 text-brand-primary" />
                            <span className="font-heading font-bold text-xl text-white">AsuX AI</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Gazipur, Dhaka, Bangladesh.<br />
                            Empowering businesses with next-generation software and AI.
                        </p>
                    </div>
                    
                    <div>
                        <h4 className="font-bold text-white mb-4">Services</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-brand-primary transition-colors">AI Consulting</a></li>
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Web Development</a></li>
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Data Analytics</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="font-bold text-white mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="#" className="hover:text-brand-primary transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-brand-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="font-bold text-white mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-500 hover:text-white transition-colors"><LinkedinIcon className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-500 hover:text-white transition-colors"><TwitterIcon className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-500 hover:text-white transition-colors"><GithubIcon className="w-5 h-5" /></a>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-white/5 pt-8 text-center text-sm text-gray-600">
                    <p>© 2025 AsuX AI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
