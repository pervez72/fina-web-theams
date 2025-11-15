
import React from 'react';
import { ArrowRightIcon, ShieldIcon, ServerIcon, BotIcon, TrendingUpIcon } from './Icons';

const Hero = () => {
    return (
        <section className="pt-32 pb-20 lg:pt-44 lg:pb-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary opacity-[0.08] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-teal opacity-[0.05] rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal"></span>
                            </span>
                            <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">Custom AI & Web Services</span>
                        </div>
                        
                        <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
                            Custom AI Solutions <br />
                            <span className="text-gradient">for Your Business</span>
                        </h1>
                        
                        <p className="text-lg text-brand-muted mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            AsuX AI is a service agency partnering with businesses to build bespoke AI applications, intelligent automation, and scalable web platforms.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a href="#contact" className="btn-primary px-8 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 group">
                                Book a Consultation
                                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#services" className="btn-outline px-8 py-4 rounded-xl font-bold text-base flex items-center justify-center">
                                See Our Services
                            </a>
                        </div>

                        <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 opacity-50">
                            <div className="flex items-center gap-2 font-medium text-sm text-white"><ShieldIcon className="w-4 h-4" /> Expert-Led Teams</div>
                            <div className="flex items-center gap-2 font-medium text-sm text-white"><ServerIcon className="w-4 h-4" /> On-Time Delivery</div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full relative animate-float">
                        <div className="relative bg-[#131b2e] rounded-2xl shadow-glow-card border border-white/10 p-2 backdrop-blur-md">
                            <div className="bg-[#0f172a] rounded-xl overflow-hidden border border-white/5 relative">
                                <div className="h-10 bg-[#1e293b] border-b border-white/5 flex items-center px-4 justify-between">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                                    </div>
                                    <div className="text-xs text-gray-500 font-mono">AsuX_Analytics_v2.4</div>
                                </div>
                                
                                <div className="p-6">
                                    <div className="flex justify-between items-end mb-8">
                                        <div>
                                            <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Total Revenue</p>
                                            <h3 className="text-3xl font-bold text-white">$124,500.00</h3>
                                        </div>
                                        <div className="px-3 py-1 bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold rounded-full flex items-center gap-1">
                                            <TrendingUpIcon className="w-3 h-3" /> +12.5%
                                        </div>
                                    </div>
                                    <div className="flex items-end justify-between h-40 gap-2">
                                        <div className="w-full bg-brand-primary/20 rounded-t-sm h-[40%]"></div>
                                        <div className="w-full bg-brand-primary/30 rounded-t-sm h-[60%]"></div>
                                        <div className="w-full bg-brand-primary rounded-t-sm h-[85%] shadow-[0_0_15px_rgba(59,130,246,0.5)] relative group cursor-pointer">
                                            <div className="absolute top-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        </div>
                                        <div className="w-full bg-brand-teal/80 rounded-t-sm h-[55%] shadow-[0_0_15px_rgba(45,212,191,0.3)]"></div>
                                        <div className="w-full bg-brand-primary/20 rounded-t-sm h-[30%]"></div>
                                    </div>
                                </div>
                                
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50 pointer-events-none"></div>
                            </div>
                        </div>
                        
                        <div className="absolute -bottom-6 -left-6 bg-[#1E293B] p-4 rounded-xl shadow-glow-card border border-white/10 flex items-center gap-4 animate-[bounce_4s_infinite]">
                            <div className="w-10 h-10 bg-brand-primary/20 rounded-full flex items-center justify-center text-brand-primary">
                                <BotIcon className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">AI Agent Status</p>
                                <p className="text-sm font-bold text-brand-teal flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse"></span> Optimizing
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
