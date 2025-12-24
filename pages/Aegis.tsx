import React from 'react';
import { Truck, Activity, Lock, ArrowRight, Map, Zap, Database } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Aegis: React.FC = () => {
    const missionControlImage = "https://res.cloudinary.com/dptqxjhb8/image/upload/v1765368361/DepotOS_nimktj.png";

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans relative overflow-x-hidden selection:bg-indigo-500/30">
            <Header />

            {/* Background Ambience (The Fog of War) */}
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[128px] opacity-30 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-sky-900/10 rounded-full blur-[128px] opacity-30 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 pt-32">

                {/* 1. HERO SECTION: The Dossier Header */}
                <div className="mb-20">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="h-px w-12 bg-indigo-500/50"></div>
                        <span className="font-mono text-indigo-400 text-sm tracking-widest uppercase">System ID: AEGIS_OS_V1</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold font-display tracking-tight text-glow mb-6">
                        Mission Control <br />
                        <span className="text-white/40">For Logistics.</span>
                    </h1>

                    <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
                        The Truth Gap is expensive. Paperwork says the truck is safe. Reality says the MOT expired yesterday.
                        Aegis is the <span className="text-white font-medium">Golden Thread</span> of audit-ready truth.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <a
                            href="https://www.aegislogistics.co.uk"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-lg font-mono text-sm tracking-wide shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all flex items-center gap-2"
                        >
                            LAUNCH LIVE SYSTEM <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* 2. THE EVIDENCE GRID */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">

                    {/* Card 1: The Problem (Grounded Assets) */}
                    <div className="md:col-span-4 glass-panel glass-panel-hover p-10 flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-20 bg-red-500/5 blur-[60px] rounded-full pointer-events-none"></div>
                        <div>
                            <Lock className="w-10 h-10 text-indigo-400 mb-6" />
                            <h3 className="text-2xl font-bold mb-4">The Compliance Lock</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Traditional software lets you assign a job to a truck with an expired MOT.
                                Aegis <span className="text-red-400">grounds the asset</span>. The engine won't start if the paperwork isn't green.
                            </p>
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                            <span className="text-indigo-300 font-mono text-sm">ASSET STATUS: GROUNDED</span>
                        </div>
                    </div>

                    {/* Card 2: THE SOLUTION (Your Cloudinary Image) */}
                    <div className="md:col-span-8 glass-panel glass-panel-hover p-1 relative overflow-hidden group">

                        {/* The "Screen Glow" Effect behind the image */}
                        <div className="absolute inset-0 bg-indigo-500/10 blur-xl group-hover:bg-indigo-500/20 transition-all duration-700"></div>

                        <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden bg-slate-950/50">
                            {/* 
                   THE TRANSLUCENT EFFECT:
                   1. opacity-90 makes it slightly see-through (blending with the dark background).
                   2. mix-blend-screen helps highlights pop.
                   3. group-hover:opacity-100 brings it to full focus when user interacts.
                */}
                            <img
                                src={missionControlImage}
                                alt="Aegis Mission Control Dashboard"
                                className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                            />

                            {/* Reflection Overlay (The Glass Shine) */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                            {/* UI Badge */}
                            <div className="absolute bottom-6 right-6 px-4 py-2 bg-slate-950/80 backdrop-blur-md border border-indigo-500/30 rounded-lg text-xs font-mono text-indigo-300 flex items-center gap-2">
                                <Activity className="w-3 h-3" /> LIVE TELEMETRY
                            </div>
                        </div>
                    </div>

                    {/* Card 3: The Metric */}
                    <div className="md:col-span-5 glass-panel glass-panel-hover p-10 flex items-center justify-center text-center relative overflow-hidden">
                        <div className="absolute bottom-0 left-0 p-32 bg-indigo-500/10 blur-[80px] rounded-full"></div>
                        <div>
                            <div className="text-7xl font-bold text-white mb-2">+35%</div>
                            <div className="font-mono text-indigo-400 tracking-widest text-sm">VEHICLE UTILISATION</div>
                        </div>
                    </div>

                    {/* Card 4: Architecture */}
                    <div className="md:col-span-7 glass-panel glass-panel-hover p-10">
                        <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                            <Database className="w-5 h-5 text-indigo-400" />
                            Sovereign Architecture
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {['Real-Time WebSockets', 'RAG Document Analysis', 'Automated Trip Allocation', 'Predictive Maintenance'].map((tech) => (
                                <div key={tech} className="flex items-center gap-2 text-slate-400 text-sm p-3 bg-white/5 rounded-lg border border-white/5">
                                    <Zap className="w-4 h-4 text-indigo-500" />
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
};
