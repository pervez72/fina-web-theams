
import React from 'react';

const ContactCTA = () => {
    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-primary/10"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-primary opacity-20 rounded-full blur-[120px]"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Ready to start your AI project?</h2>
                <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                    Partner with AsuX AI to build a custom solution that drives real business value, not just hype. Let's discuss your idea.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="btn-primary px-8 py-4 rounded-xl font-bold text-base shadow-lg">
                        Start Your Project
                    </button>
                    <button className="bg-[#0f172a] border border-white/10 text-white hover:bg-white/5 px-8 py-4 rounded-xl font-bold text-base transition-colors">
                        Contact Sales
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
