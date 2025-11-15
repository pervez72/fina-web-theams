
import React from 'react';
import { CheckCircle2Icon } from './Icons';

const Trust = () => {
    return (
        <section className="py-20 bg-brand-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-white mb-6">Built on Partnership & Trust</h2>
                        <p className="text-brand-muted mb-8 leading-relaxed">
                            At AsuX AI, we prioritize partnership. Our development process is built on transparency and expertise, ensuring your project succeeds and delivers real business value.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center text-gray-300">
                                <CheckCircle2Icon className="w-5 h-5 text-brand-primary mr-3" />
                                <span>Agile & Transparent Process</span>
                            </li>
                            <li className="flex items-center text-gray-300">
                                <CheckCircle2Icon className="w-5 h-5 text-brand-primary mr-3" />
                                <span>Dedicated Project Management</span>
                            </li>
                            <li className="flex items-center text-gray-300">
                                <CheckCircle2Icon className="w-5 h-5 text-brand-primary mr-3" />
                                <span>Post-Launch Support & Maintenance</span>
                            </li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-brand-surface border border-white/5 p-6 rounded-xl text-center hover:border-brand-primary/50 transition-colors">
                            <h4 className="text-4xl font-bold text-brand-primary mb-2">98%</h4>
                            <p className="text-xs text-gray-500 uppercase font-semibold tracking-widest">Client Retention</p>
                        </div>
                        <div className="bg-brand-surface border border-white/5 p-6 rounded-xl text-center hover:border-brand-teal/50 transition-colors">
                            <h4 className="text-4xl font-bold text-brand-teal mb-2">50+</h4>
                            <p className="text-xs text-gray-500 uppercase font-semibold tracking-widest">Happy Clients</p>
                        </div>
                        <div className="bg-brand-surface border border-white/5 p-6 rounded-xl text-center hover:border-brand-accent/50 transition-colors">
                            <h4 className="text-4xl font-bold text-brand-accent mb-2">100k+</h4>
                            <p className="text-xs text-gray-500 uppercase font-semibold tracking-widest">Users Impacted</p>
                        </div>
                        <div className="bg-brand-surface border border-white/5 p-6 rounded-xl text-center hover:border-white/20 transition-colors">
                            <h4 className="text-4xl font-bold text-white mb-2">24/7</h4>
                            <p className="text-xs text-gray-500 uppercase font-semibold tracking-widest">Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trust;
