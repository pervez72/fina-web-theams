
import React from 'react';
import { GaugeIcon, LineChartIcon, GitMergeIcon, DatabaseIcon, BrainCircuitIcon, ServerIcon, LayoutDashboardIcon } from './Icons';

const Performance = () => {
    return (
        <section id="performance" className="py-24 bg-brand-bg relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-heading font-bold text-white mb-4">
                        Proven Performance, <span className="text-gradient">Transparent Process</span>
                    </h2>
                    <p className="text-brand-muted text-lg">
                        We don't just build AI; we build measurable, high-impact solutions. Our process is built on technical depth and a clear focus on client outcomes.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">

                    <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border shadow-glow-card transition-all duration-300 hover:border-brand-primary/50">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center text-brand-primary border border-brand-primary/20">
                                <GaugeIcon className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-white">Model Performance</h3>
                        </div>
                        <p className="text-brand-muted text-sm leading-relaxed mb-6">
                            Real-time tracking of accuracy, latency, and cost-to-serve for our deployed models.
                        </p>
                        
                        <div className="flex gap-4 mb-6">
                            <div>
                                <div className="text-xs text-brand-muted uppercase">Accuracy</div>
                                <div className="text-lg font-bold text-brand-teal">99.4%</div>
                            </div>
                            <div>
                                <div className="text-xs text-brand-muted uppercase">Latency</div>
                                <div className="text-lg font-bold text-white">~45ms</div>
                            </div>
                            <div>
                                <div className="text-xs text-brand-muted uppercase">Inference</div>
                                <div className="text-lg font-bold text-white">2.1k/s</div>
                            </div>
                        </div>

                        <div className="h-32 w-full bg-[#0f172a] rounded-lg p-3 border border-brand-border flex items-end gap-1.5">
                            <div className="w-full bg-brand-primary/30 rounded-t-sm" style={{ height: '30%' }}></div>
                            <div className="w-full bg-brand-primary/30 rounded-t-sm" style={{ height: '50%' }}></div>
                            <div className="w-full bg-brand-primary/30 rounded-t-sm" style={{ height: '40%' }}></div>
                            <div className="w-full bg-brand-primary rounded-t-sm shadow-[0_0_8px_rgba(59,130,246,0.5)]" style={{ height: '75%' }}></div>
                            <div className="w-full bg-brand-primary rounded-t-sm shadow-[0_0_8px_rgba(59,130,246,0.5)]" style={{ height: '80%' }}></div>
                            <div className="w-full bg-brand-primary/30 rounded-t-sm" style={{ height: '60%' }}></div>
                            <div className="w-full bg-brand-primary/30 rounded-t-sm" style={{ height: '55%' }}></div>
                            <div className="w-full bg-brand-teal rounded-t-sm shadow-[0_0_8px_rgba(45,212,191,0.4)]" style={{ height: '90%' }}></div>
                            <div className="w-full bg-brand-teal/50 rounded-t-sm" style={{ height: '85%' }}></div>
                        </div>
                    </div>

                    <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border shadow-glow-card transition-all duration-300 hover:border-brand-teal/50">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-brand-teal/10 rounded-lg flex items-center justify-center text-brand-teal border border-brand-teal/20">
                                <LineChartIcon className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-white">Automation Impact</h3>
                        </div>
                        <p className="text-brand-muted text-sm leading-relaxed mb-6">
                            Measurable improvements in client KPIs, from error reduction to massive time savings.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-sm font-medium text-gray-300">Manual Error Rate</span>
                                    <span className="text-sm font-medium text-brand-muted">18.5%</span>
                                </div>
                                <div className="w-full h-3 bg-red-500/10 rounded-full overflow-hidden"><div className="h-full bg-red-500" style={{ width: '18.5%' }}></div></div>
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-sm font-medium text-white">AI-Assisted Error Rate</span>
                                    <span className="text-sm font-bold text-brand-teal">0.2%</span>
                                </div>
                                <div className="w-full h-3 bg-brand-teal/10 rounded-full overflow-hidden"><div className="h-full bg-brand-teal" style={{ width: '0.2%' }}></div></div>
                            </div>
                            <div className="pt-4">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-sm font-medium text-gray-300">Process Time (Hours)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="text-xs text-brand-muted w-10">Before</div>
                                    <div className="w-full h-5 bg-red-500/30 rounded" style={{ width: '100%' }}></div>
                                    <div className="text-xs font-bold text-white">40h</div>
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <div className="text-xs text-brand-muted w-10">After</div>
                                    <div className="w-full h-5 bg-brand-teal/30 rounded" style={{ width: '10%' }}></div>
                                    <div className="text-xs font-bold text-brand-teal">4h</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 rounded-2xl bg-brand-surface border border-brand-border shadow-glow-card transition-all duration-300 hover:border-brand-accent/50">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-brand-accent/10 rounded-lg flex items-center justify-center text-brand-accent border border-brand-accent/20">
                                <GitMergeIcon className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-heading font-bold text-white">Scalable AI Pipeline</h3>
                        </div>
                        <p className="text-brand-muted text-sm leading-relaxed mb-6">
                            Our AI pipelines are designed for scalability, from initial data ingestion to final API deployment.
                        </p>

                        <ul className="space-y-2">
                            <li className="flex items-center gap-3 p-3 bg-[#0f172a]/50 rounded-lg border border-brand-border">
                                <div className="w-8 h-8 rounded-full bg-brand-surface border border-brand-border flex-shrink-0 flex items-center justify-center text-brand-muted">
                                    <DatabaseIcon className="w-4 h-4" />
                                </div>
                                <span className="text-sm font-medium text-gray-300">Data Ingestion & ETL</span>
                            </li>
                            <li className="pl-4">
                                <div className="w-px h-5 bg-brand-border ml-[15px]"></div>
                            </li>
                            <li className="flex items-center gap-3 p-3 bg-[#0f172a]/50 rounded-lg border border-brand-border">
                                <div className="w-8 h-8 rounded-full bg-brand-surface border border-brand-border flex-shrink-0 flex items-center justify-center text-brand-muted">
                                    <BrainCircuitIcon className="w-4 h-4" />
                                </div>
                                <span className="text-sm font-medium text-gray-300">Model Training & Validation</span>
                            </li>
                            <li className="pl-4">
                                <div className="w-px h-5 bg-brand-border ml-[15px]"></div>
                            </li>
                            <li className="flex items-center gap-3 p-3 bg-brand-primary/10 rounded-lg border border-brand-primary/50">
                                <div className="w-8 h-8 rounded-full bg-brand-primary/20 border border-brand-primary flex-shrink-0 flex items-center justify-center text-brand-primary">
                                    <ServerIcon className="w-4 h-4" />
                                </div>
                                <span className="text-sm font-bold text-white">API Deployment (FastAPI)</span>
                            </li>
                            <li className="pl-4">
                                <div className="w-px h-5 bg-brand-border ml-[15px]"></div>
                            </li>
                            <li className="flex items-center gap-3 p-3 bg-brand-teal/10 rounded-lg border border-brand-teal/50">
                                <div className="w-8 h-8 rounded-full bg-brand-teal/20 border border-brand-teal flex-shrink-0 flex items-center justify-center text-brand-teal">
                                    <LayoutDashboardIcon className="w-4 h-4" />
                                </div>
                                <span className="text-sm font-bold text-white">Client Application & UI</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Performance;
