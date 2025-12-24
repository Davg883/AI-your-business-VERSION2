import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, AlertTriangle, Shield, Map } from 'lucide-react';
import { QuizModal } from '../components/QuizModal';

export const SiteOS: React.FC = () => {
    const [isQuizOpen, setIsQuizOpen] = useState(false);

    const siteQuestions = [
        { id: 1, text: "How do you currently log site attendance?", options: ["Biometric/App", "Paper Sign-in Sheet", "Verbal/Headcount"] },
        { id: 2, text: "Can you prove who was on site 3 months ago?", options: ["Instantly", "Maybe (Digging required)", "No"] },
        { id: 3, text: "How long does it take to generate a RAMS document?", options: ["< 5 Minutes", "30-60 Minutes", "Hours/Days"] },
        { id: 4, text: "Do you have real-time alerts for expired CSCS cards?", options: ["Yes, automated", "Manual spreadsheet", "No tracking"] },
        { id: 5, text: "If an accident happened today, is your audit trail ready?", options: ["100% Confident", "Nervous", "Exposed"] }
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
            <Header />

            {/* Hero Section - Dossier Header */}
            <section className="relative w-full py-32 flex flex-col items-center justify-center border-b border-white/5 bg-slate-900/20 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 bg-indigo-500/5 radial-gradient pointer-events-none" />

                <div className="max-w-5xl mx-auto px-6 text-center z-10">
                    <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-sm border border-indigo-500/30 bg-indigo-500/5">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
                        <span className="font-mono text-xs text-indigo-400 tracking-[0.2em] uppercase">System Online</span>
                    </div>

                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight leading-none">
                        THE DIGITAL <br />
                        <span className="italic text-slate-400">FOREMAN</span>
                    </h1>

                    <p className="font-mono text-indigo-500/80 text-sm md:text-base tracking-[0.15em] uppercase border-t border-b border-indigo-500/20 py-4 inline-block">
                        Lidar Scanning | Personnel Tracking | Safety Enforcement
                    </p>
                </div>
            </section>

            {/* The Evidence Grid (Bento Box) */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

                    {/* Card 1: The Problem (Site Blindness) */}
                    <div className="col-span-1 md:col-span-4 group relative glass-panel overflow-hidden hover:border-indigo-500/30 transition-all duration-500">
                        {/* Background Image & Scan Effect */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src="https://res.cloudinary.com/dptqxjhb8/image/upload/v1766614157/building_project_kjl23u.png"
                                alt="Construction Site Chaos"
                                className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700 mix-blend-luminosity"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
                            {/* Scanning Line */}
                            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent animate-scan pointer-events-none opacity-50" />
                        </div>

                        <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity z-10">
                            <AlertTriangle className="w-24 h-24 text-orange-500" />
                        </div>
                        <div className="p-8 h-full flex flex-col relative z-10">
                            <div className="mb-auto">
                                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-4">Hazard Detected</span>
                                <h3 className="text-3xl font-serif text-white leading-tight mb-4">
                                    You can't manage <br />
                                    what you don't <span className="text-orange-400">see</span>.
                                </h3>
                            </div>
                            <p className="text-slate-400 leading-relaxed text-sm mt-8 border-l-2 border-orange-500/30 pl-4">
                                85% of site accidents are preventable. SiteOS removes the visibility gap with real-time biometric and location telemetry for every worker.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: The Solution (Digital Twin) */}
                    <div className="col-span-1 md:col-span-5 relative group glass-panel h-96 md:h-auto flex items-center justify-center overflow-hidden">
                        {/* Background Image & Scan Effect */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src="https://res.cloudinary.com/dptqxjhb8/image/upload/v1764585735/New_build_site_image_i2kldo.png"
                                alt="Real-Time Site Twin"
                                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-700 mix-blend-luminosity"
                            />
                            <div className="absolute inset-0 bg-indigo-900/20 mix-blend-overlay" />
                            {/* Scanning Line */}
                            <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-transparent via-indigo-400/30 to-transparent animate-scan pointer-events-none" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 border-2 border-dashed border-white/20 rounded-2xl p-8 flex flex-col items-center justify-center bg-slate-950/60 backdrop-blur-sm">
                            <div className="w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-indigo-500/40">
                                <Map className="w-6 h-6 text-indigo-400 fill-current" />
                            </div>
                            <span className="font-mono text-indigo-300 text-xs uppercase tracking-widest text-center">
                                Real-Time Site Twin <br />
                                <span className="text-slate-500">Lidar Feed Online</span>
                            </span>
                        </div>
                    </div>

                    {/* Card 3: The Metric */}
                    <div className="col-span-1 md:col-span-3 glass-panel p-8 flex flex-col justify-center items-center text-center hover:border-indigo-500/30 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-6">
                            <Shield className="w-6 h-6 text-indigo-500" />
                        </div>
                        <span className="text-6xl md:text-7xl font-mono font-bold text-white tracking-tighter mb-2">
                            100<span className="text-3xl text-indigo-500">%</span>
                        </span>
                        <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Compliance Rate</span>
                    </div>

                </div>
            </section>

            {/* Pilot Call to Action */}
            <section className="px-6 pb-32">
                <div className="max-w-4xl mx-auto">
                    <div className="relative rounded-3xl overflow-hidden p-[1px] bg-gradient-to-r from-indigo-500/30 via-slate-500/10 to-indigo-500/30">
                        <div className="bg-slate-950/90 backdrop-blur-2xl rounded-[23px] p-12 text-center relative overflow-hidden">
                            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

                            <h2 className="text-3xl font-serif text-white mb-6">Deploy Sovereign Intelligence</h2>
                            <p className="text-slate-400 mb-10 max-w-lg mx-auto">
                                Initiate a site scan today. Secure your perimeter and optimize your workforce with military-grade precision.
                            </p>

                            <button
                                onClick={() => setIsQuizOpen(true)}
                                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-indigo-900/30 border border-indigo-500/50 rounded-lg text-indigo-400 font-mono text-sm uppercase tracking-widest hover:bg-indigo-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.15)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]"
                            >
                                <span>Initialize Site Scan</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <QuizModal
                isOpen={isQuizOpen}
                onClose={() => setIsQuizOpen(false)}
                title="SITE SAFETY DIAGNOSTIC"
                questions={siteQuestions}
                accentColor="blue"
            />

            <Footer />
        </div>
    );
};
