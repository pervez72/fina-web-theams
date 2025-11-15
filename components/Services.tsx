
import React from 'react';
import { BarChart2Icon, CpuIcon, LayersIcon, ChevronRightIcon } from './Icons';

const Services = () => {
    return (
        <section id="services" className="py-24 bg-[#0f1623] border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-heading font-bold text-white mb-4">Our Core Services</h2>
                    <p className="text-brand-muted text-lg">
                        We provide end-to-end services to bring your most complex ideas to life, from concept to deployment.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="service-card p-8 rounded-2xl">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 text-brand-primary border border-blue-500/20">
                            <BarChart2Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-heading font-bold text-white mb-3">AI & Data Science</h3>
                        <p className="text-brand-muted leading-relaxed mb-6">
                            We turn your data into insights. Our team builds custom AI models to forecast trends, automate decisions, and guide your strategy.
                        </p>
                        <a href="#" className="text-brand-primary font-semibold text-sm flex items-center hover:text-white transition-colors">
                            Learn more <ChevronRightIcon className="w-4 h-4 ml-1" />
                        </a>
                    </div>

                    <div className="service-card p-8 rounded-2xl">
                        <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mb-6 text-brand-teal border border-teal-500/20">
                            <CpuIcon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-heading font-bold text-white mb-3">Intelligent Automation</h3>
                        <p className="text-brand-muted leading-relaxed mb-6">
                            Our team develops intelligent agents and RPA solutions to handle your repetitive workflows, reducing costs and increasing accuracy.
                        </p>
                        <a href="#" className="text-brand-teal font-semibold text-sm flex items-center hover:text-white transition-colors">
                            Learn more <ChevronRightIcon className="w-4 h-4 ml-1" />
                        </a>
                    </div>

                    <div className="service-card p-8 rounded-2xl">
                        <div className="w-12 h-12 bg-sky-500/10 rounded-lg flex items-center justify-center mb-6 text-brand-accent border border-sky-500/20">
                            <LayersIcon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-heading font-bold text-white mb-3">Custom Web Development</h3>
                        <p className="text-brand-muted leading-relaxed mb-6">
                            We design and build robust, scalable web applications and SaaS products tailored to your specific business logic.
                        </p>
                        <a href="#" className="text-brand-accent font-semibold text-sm flex items-center hover:text-white transition-colors">
                            Learn more <ChevronRightIcon className="w-4 h-4 ml-1" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
