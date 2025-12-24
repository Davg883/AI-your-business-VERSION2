import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Building2, Truck, ArrowRight, Activity, Cpu, ShieldCheck, BookOpen, FileText, Image as ImageIcon, Terminal } from 'lucide-react';

export const Home: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-950 overflow-hidden relative selection:bg-blue-500/30">
            {/* Ambient Glows */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">

                {/* Hero Section */}
                <div className="mb-24 relative">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-white/10 backdrop-blur-md mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">Architecting Intelligence</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 tracking-tight leading-tight">
                        <span className="text-glow">Sovereign</span> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Intelligence</span>
                    </h1>

                    <p className="text-lg text-slate-400 max-w-2xl border-l-2 border-blue-500/30 pl-6">
                        We don't just build software. We write the manual for the next industrial revolution.
                    </p>
                </div>

                {/* Section Header: DEPLOYABLE SYSTEMS */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent w-24" />
                    <span className="text-sm font-mono text-blue-400 tracking-[0.2em] uppercase">Deployable Systems</span>
                    <div className="h-px bg-gradient-to-r from-blue-500/50 via-transparent to-transparent flex-1" />
                </div>

                {/* Cards Container - Horizontal Scroll on Tablet/Mobile */}
                <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">

                    {/* ChefOS Card */}
                    <Link to="/chefos" className="group relative flex-shrink-0 w-[85vw] md:w-auto snap-center">
                        <div className="absolute inset-0 bg-blue-500/5 rounded-2xl blur-xl group-hover:bg-blue-500/10 transition-all duration-500" />
                        <div className="relative h-full glass-panel glass-panel-hover p-8 flex flex-col overflow-hidden">
                            {/* Hover Reveal Image */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src="https://res.cloudinary.com/dptqxjhb8/video/upload/v1764090414/App_from_kitchen_to_socials_wmw3ob.jpg"
                                    alt="ChefOS Interface"
                                    className="w-full h-full object-cover opacity-0 group-hover:opacity-30 transition-opacity duration-700 mix-blend-luminosity"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                            </div>

                            <div className="relative z-10">
                                <div className="absolute top-0 right-0 p-4 opacity-50">
                                    <Activity className="w-16 h-16 text-slate-800" />
                                </div>

                                <div className="flex items-center justify-between mb-8">
                                    <div className="p-3 bg-slate-800/50 rounded-lg border border-white/5 group-hover:border-blue-500/30 transition-colors">
                                        <Utensils className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-2 py-1 rounded uppercase tracking-wider">Sys_ID: 01</span>
                                </div>

                                <div className="mt-auto">
                                    <h3 className="text-2xl font-bold font-display text-white mb-2 group-hover:text-blue-400 transition-colors">ChefOS</h3>
                                    <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                                        Culinary operational intelligence. Neural inventory tracking and workflow optimization protocols.
                                    </p>
                                    <div className="flex items-center text-xs font-mono text-blue-400 uppercase tracking-widest gap-2">
                                        <span>Access Terminal</span>
                                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* SiteOS Card */}
                    <Link to="/siteos" className="group relative flex-shrink-0 w-[85vw] md:w-auto snap-center">
                        <div className="absolute inset-0 bg-indigo-500/5 rounded-2xl blur-xl group-hover:bg-indigo-500/10 transition-all duration-500" />
                        <div className="relative h-full glass-panel glass-panel-hover p-8 flex flex-col overflow-hidden">
                            {/* Hover Reveal Image */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src="https://res.cloudinary.com/dptqxjhb8/image/upload/v1764195318/SiteOS_dashboard_wmgr3v.png"
                                    alt="SiteOS Interface"
                                    className="w-full h-full object-cover opacity-0 group-hover:opacity-30 transition-opacity duration-700 mix-blend-luminosity"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                            </div>

                            <div className="relative z-10">
                                <div className="absolute top-0 right-0 p-4 opacity-50">
                                    <Cpu className="w-16 h-16 text-slate-800" />
                                </div>

                                <div className="flex items-center justify-between mb-8">
                                    <div className="p-3 bg-slate-800/50 rounded-lg border border-white/5 group-hover:border-indigo-500/30 transition-colors">
                                        <Building2 className="w-6 h-6 text-indigo-400" />
                                    </div>
                                    <span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-2 py-1 rounded uppercase tracking-wider">Sys_ID: 02</span>
                                </div>

                                <div className="mt-auto">
                                    <h3 className="text-2xl font-bold font-display text-white mb-2 group-hover:text-indigo-400 transition-colors">SiteOS</h3>
                                    <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                                        Personnel tracking and site safety enforcement. Real-time telemetry and hazard detection.
                                    </p>
                                    <div className="flex items-center text-xs font-mono text-indigo-400 uppercase tracking-widest gap-2">
                                        <span>Access Terminal</span>
                                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Aegis Card */}
                    <Link to="/logistics" className="group relative flex-shrink-0 w-[85vw] md:w-auto snap-center">
                        <div className="absolute inset-0 bg-emerald-500/5 rounded-2xl blur-xl group-hover:bg-emerald-500/10 transition-all duration-500" />
                        <div className="relative h-full glass-panel glass-panel-hover p-8 flex flex-col overflow-hidden">
                            {/* Hover Reveal Image */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src="https://res.cloudinary.com/dptqxjhb8/image/upload/v1765368361/DepotOS_nimktj.png"
                                    alt="Aegis Interface"
                                    className="w-full h-full object-cover opacity-0 group-hover:opacity-30 transition-opacity duration-700 mix-blend-luminosity"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                            </div>

                            <div className="relative z-10">
                                <div className="absolute top-0 right-0 p-4 opacity-50">
                                    <ShieldCheck className="w-16 h-16 text-slate-800" />
                                </div>

                                <div className="flex items-center justify-between mb-8">
                                    <div className="p-3 bg-slate-800/50 rounded-lg border border-white/5 group-hover:border-emerald-500/30 transition-colors">
                                        <Truck className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-2 py-1 rounded uppercase tracking-wider">Sys_ID: 03</span>
                                </div>

                                <div className="mt-auto">
                                    <h3 className="text-2xl font-bold font-display text-white mb-2 group-hover:text-emerald-400 transition-colors">Aegis</h3>
                                    <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                                        Global logistics defense grid. Fleet optimization and asset protection protocols.
                                    </p>
                                    <div className="flex items-center text-xs font-mono text-emerald-400 uppercase tracking-widest gap-2">
                                        <span>Access Terminal</span>
                                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>

                </div>

                {/* THE CONNECTOR - Data Line */}
                <div className="relative h-32 flex justify-center items-center pointer-events-none">
                    {/* Vertical Line */}
                    <div className="absolute h-full w-px bg-gradient-to-b from-indigo-500/0 via-indigo-500/50 to-indigo-500/0" />

                    {/* Pulsing Data Packets */}
                    <div className="absolute h-full w-px flex flex-col items-center justify-evenly">
                        <span className="w-1 h-3 bg-indigo-400 rounded-full animate-bounce delay-75 shadow-[0_0_10px_rgba(129,140,248,0.8)]" />
                        <span className="w-1 h-3 bg-indigo-400 rounded-full animate-bounce delay-150 shadow-[0_0_10px_rgba(129,140,248,0.8)]" />
                    </div>
                </div>

                {/* KNOWLEDGE BASE SECTION */}
                <div className="mt-32 mb-12">
                    {/* Section Header: OPERATIONAL DOCTRINE */}
                    <div className="flex items-center gap-4">
                        <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent w-24" />
                        <span className="text-sm font-mono text-indigo-400 tracking-[0.2em] uppercase">Operational Doctrine</span>
                        <div className="h-px bg-gradient-to-r from-indigo-500/50 via-transparent to-transparent flex-1" />
                    </div>
                </div>

                <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">

                    {/* Book 1: AI for Text */}
                    <div className="group relative flex-shrink-0 w-[85vw] md:w-auto snap-center">
                        <div className="absolute inset-0 bg-slate-800/5 rounded-[2rem] blur-xl group-hover:bg-slate-700/10 transition-all duration-500" />
                        <div className="relative h-full glass-panel glass-panel-hover p-8 flex flex-col overflow-hidden border border-white/5 shadow-2xl">
                            {/* Hover Reveal Cover */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src="https://res.cloudinary.com/dptqxjhb8/image/upload/v1764194633/AI_for_Text_Cover_l9fle5.png"
                                    alt="AI for Text Cover"
                                    className="w-full h-full object-cover opacity-0 group-hover:opacity-60 transition-opacity duration-700 mix-blend-overlay"
                                />
                                {/* Scanning Line Effect */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-400/10 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-[2s] ease-in-out" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
                            </div>

                            <div className="relative z-10">
                                <div className="absolute top-0 right-0 p-4 opacity-50">
                                    <FileText className="w-16 h-16 text-slate-800" />
                                </div>

                                <div className="flex items-center justify-between mb-8">
                                    <div className="p-3 bg-slate-800/50 rounded-lg border border-white/5 group-hover:border-indigo-500/30 transition-colors">
                                        <FileText className="w-6 h-6 text-indigo-400" />
                                    </div>
                                    <span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-2 py-1 rounded uppercase tracking-wider">REF: TXT-01</span>
                                </div>

                                <div className="mt-auto">
                                    <h3 className="text-2xl font-bold font-display text-white mb-2 group-hover:text-indigo-400 transition-colors">AI for Text</h3>
                                    <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                                        Advanced prompt engineering and LLM integration strategies for enterprise workflows.
                                    </p>
                                    <div className="flex items-center text-xs font-mono text-indigo-400 uppercase tracking-widest gap-2">
                                        <span>Access Knowledge Base</span>
                                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Book 2: AI for Media */}
                    <div className="group relative flex-shrink-0 w-[85vw] md:w-auto snap-center">
                        <div className="absolute inset-0 bg-slate-800/5 rounded-[2rem] blur-xl group-hover:bg-slate-700/10 transition-all duration-500" />
                        <div className="relative h-full glass-panel glass-panel-hover p-8 flex flex-col overflow-hidden border border-white/5 shadow-2xl">
                            {/* Hover Reveal Cover */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src="https://res.cloudinary.com/dptqxjhb8/image/upload/v1764194608/AI_for_Media_Level_1_Cover_rcc3r9.png"
                                    alt="AI for Media Cover"
                                    className="w-full h-full object-cover opacity-0 group-hover:opacity-60 transition-opacity duration-700 mix-blend-overlay"
                                />
                                {/* Scanning Line Effect */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/10 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-[2s] ease-in-out" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
                            </div>

                            <div className="relative z-10">
                                <div className="absolute top-0 right-0 p-4 opacity-50">
                                    <ImageIcon className="w-16 h-16 text-slate-800" />
                                </div>

                                <div className="flex items-center justify-between mb-8">
                                    <div className="p-3 bg-slate-800/50 rounded-lg border border-white/5 group-hover:border-purple-500/30 transition-colors">
                                        <ImageIcon className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-2 py-1 rounded uppercase tracking-wider">REF: MED-01</span>
                                </div>

                                <div className="mt-auto">
                                    <h3 className="text-2xl font-bold font-display text-white mb-2 group-hover:text-purple-400 transition-colors">AI for Media</h3>
                                    <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                                        Generative imagery and video synthesis techniques for modern brand storytelling.
                                    </p>
                                    <div className="flex items-center text-xs font-mono text-purple-400 uppercase tracking-widest gap-2">
                                        <span>Access Knowledge Base</span>
                                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Book 3: AI for Code */}
                    <div className="group relative flex-shrink-0 w-[85vw] md:w-auto snap-center">
                        <div className="absolute inset-0 bg-slate-800/5 rounded-[2rem] blur-xl group-hover:bg-slate-700/10 transition-all duration-500" />
                        <div className="relative h-full glass-panel glass-panel-hover p-8 flex flex-col overflow-hidden border border-white/5 shadow-2xl">
                            {/* Hover Reveal Cover */}
                            <div className="absolute inset-0 z-0">
                                <img
                                    src="https://res.cloudinary.com/dptqxjhb8/image/upload/v1764194585/AI_for_Code_Level_1_Cover_ufokuj.png"
                                    alt="AI for Code Cover"
                                    className="w-full h-full object-cover opacity-0 group-hover:opacity-60 transition-opacity duration-700 mix-blend-overlay"
                                />
                                {/* Scanning Line Effect */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-400/10 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-[2s] ease-in-out" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
                            </div>

                            <div className="relative z-10">
                                <div className="absolute top-0 right-0 p-4 opacity-50">
                                    <Terminal className="w-16 h-16 text-slate-800" />
                                </div>

                                <div className="flex items-center justify-between mb-8">
                                    <div className="p-3 bg-slate-800/50 rounded-lg border border-white/5 group-hover:border-emerald-500/30 transition-colors">
                                        <Terminal className="w-6 h-6 text-emerald-400" />
                                    </div>
                                    <span className="text-[10px] font-mono text-slate-500 border border-slate-800 px-2 py-1 rounded uppercase tracking-wider">REF: COD-01</span>
                                </div>

                                <div className="mt-auto">
                                    <h3 className="text-2xl font-bold font-display text-white mb-2 group-hover:text-emerald-400 transition-colors">AI for Code</h3>
                                    <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                                        Automating development pipelines and architectural reasoning with large language models.
                                    </p>
                                    <div className="flex items-center text-xs font-mono text-emerald-400 uppercase tracking-widest gap-2">
                                        <span>Access Knowledge Base</span>
                                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
