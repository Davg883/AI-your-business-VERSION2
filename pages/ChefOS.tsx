import React, { useState, useRef, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Play, ArrowRight, FileWarning, Clock, Volume2, VolumeX } from 'lucide-react';
import { QuizModal } from '../components/QuizModal';

export const ChefOS: React.FC = () => {
    const [isQuizOpen, setIsQuizOpen] = useState(false);

    // Video State
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);
    const [volume, setVolume] = useState(1);
    const [showControls, setShowControls] = useState(false);

    const chefQuestions = [
        { id: 1, text: "Do you rely on paper logbooks for hygiene checks?", options: ["Yes", "No"] },
        { id: 2, text: "How many hours per week does management spend on rosters?", options: ["Under 5 hours", "5 - 10 hours", "Over 10 hours"] },
        { id: 3, text: "Have you had a stock discrepancy in the last month?", options: ["Yes", "No"] },
        { id: 4, text: "Is your staff turnover higher than 20%?", options: ["Yes", "No"] },
        { id: 5, text: "Do you have real-time visibility into kitchen prep levels?", options: ["Yes", "No"] }
    ];

    // Handle initial volume set
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = volume;
        }
    }, []);

    const toggleMute = () => {
        if (videoRef.current) {
            const newMutedState = !isMuted;
            videoRef.current.muted = newMutedState;
            setIsMuted(newMutedState);

            // If unmuting and volume is 0, set to 0.5
            if (!newMutedState && volume === 0) {
                setVolume(0.5);
                videoRef.current.volume = 0.5;
            }
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
            if (newVolume > 0 && isMuted) {
                videoRef.current.muted = false;
                setIsMuted(false);
            } else if (newVolume === 0 && !isMuted) {
                videoRef.current.muted = true;
                setIsMuted(true);
            }
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30">
            <Header />

            {/* Hero Section - Dossier Header */}
            <section className="relative w-full py-32 flex flex-col items-center justify-center border-b border-white/5 bg-slate-900/20 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 bg-emerald-500/5 radial-gradient pointer-events-none" />

                <div className="max-w-5xl mx-auto px-6 text-center z-10">
                    <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-sm border border-emerald-500/30 bg-emerald-500/5">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="font-mono text-xs text-emerald-400 tracking-[0.2em] uppercase">System Online</span>
                    </div>

                    <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight leading-none">
                        THE DIGITAL <br />
                        <span className="italic text-slate-400">SOUS CHEF</span>
                    </h1>

                    <p className="font-mono text-emerald-500/80 text-sm md:text-base tracking-[0.15em] uppercase border-t border-b border-emerald-500/20 py-4 inline-block">
                        Computer Vision | Hygiene Protocol | Real-Time Log
                    </p>
                </div>
            </section>

            {/* The Evidence Grid (Bento Box) */}
            <section className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

                    {/* Card 1: The Problem (Truth Gap) */}
                    <div className="col-span-1 md:col-span-4 group relative glass-panel overflow-hidden hover:border-emerald-500/30 transition-all duration-500">
                        <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                            <FileWarning className="w-24 h-24 text-red-500" />
                        </div>
                        <div className="p-8 h-full flex flex-col">
                            <div className="mb-auto">
                                <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block mb-4">Anomaly Detected</span>
                                <h3 className="text-3xl font-serif text-white leading-tight mb-4">
                                    Paperwork <span className="text-red-400">lies</span>.<br />
                                    Cameras <span className="text-emerald-400">don't</span>.
                                </h3>
                            </div>
                            <p className="text-slate-400 leading-relaxed text-sm mt-8 border-l-2 border-red-500/30 pl-4">
                                Traditional logs are fabricated 40% of the time. ChefOS eliminates the human error vector completely through passive surveillance.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: The Solution (Video Feed) */}
                    <div
                        className="col-span-1 md:col-span-5 relative group glass-panel h-96 md:h-auto flex flex-col items-center justify-center overflow-hidden"
                        onMouseEnter={() => setShowControls(true)}
                        onMouseLeave={() => setShowControls(false)}
                    >
                        {/* Video Background */}
                        <div className="absolute inset-0 z-0">
                            <video
                                ref={videoRef}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src="https://res.cloudinary.com/dptqxjhb8/video/upload/v1764178466/ChefOS_Sizzle_Short_LowRes_wralnf.mp4" type="video/mp4" />
                            </video>
                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90" />
                        </div>

                        {/* Controls Overlay */}
                        <div className={`absolute top-4 right-4 z-20 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0 md:opacity-0 md:group-hover:opacity-100'}`}>
                            <div className="flex items-center gap-2 bg-slate-900/60 backdrop-blur-md rounded-full px-3 py-1.5 border border-white/10">
                                <button
                                    onClick={toggleMute}
                                    className="text-white hover:text-emerald-400 transition-colors"
                                >
                                    {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                                </button>

                                <input
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.01"
                                    value={isMuted ? 0 : volume}
                                    onChange={handleVolumeChange}
                                    className="w-20 h-1 bg-slate-600 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                                />
                            </div>
                        </div>

                        {/* Content Overlay */}
                        <div className="relative z-10 p-6 flex flex-col items-center justify-center h-full mt-32">
                            {/* Floating Pill */}
                            <div className="bg-slate-900/80 backdrop-blur border border-emerald-500/30 px-4 py-2 rounded-full flex items-center gap-2 mb-2 shadow-lg">
                                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                <span className="font-mono text-emerald-400 text-xs uppercase tracking-widest">Live Feed // Kitchen Tablet</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: The Metric */}
                    <div className="col-span-1 md:col-span-3 glass-panel p-8 flex flex-col justify-center items-center text-center hover:border-emerald-500/30 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
                            <Clock className="w-6 h-6 text-emerald-500" />
                        </div>
                        <span className="text-6xl md:text-7xl font-mono font-bold text-white tracking-tighter mb-2">
                            -98<span className="text-3xl text-emerald-500">%</span>
                        </span>
                        <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Admin Time Reduced</span>
                    </div>

                </div>
            </section>

            {/* Pilot Call to Action */}
            <section className="px-6 pb-32">
                <div className="max-w-4xl mx-auto">
                    <div className="relative rounded-3xl overflow-hidden p-[1px] bg-gradient-to-r from-emerald-500/30 via-slate-500/10 to-emerald-500/30">
                        <div className="bg-slate-950/90 backdrop-blur-2xl rounded-[23px] p-12 text-center relative overflow-hidden">
                            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

                            <h2 className="text-3xl font-serif text-white mb-6">Deploy Sovereign Intelligence</h2>
                            <p className="text-slate-400 mb-10 max-w-lg mx-auto">
                                Secure your spot in the Isle of Wight pilot program. Hardware installation and neural network calibration included.
                            </p>

                            <button
                                onClick={() => setIsQuizOpen(true)}
                                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-emerald-900/30 border border-emerald-500/50 rounded-lg text-emerald-400 font-mono text-sm uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
                            >
                                <span>Join the Isle of Wight Pilot</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <QuizModal
                isOpen={isQuizOpen}
                onClose={() => setIsQuizOpen(false)}
                title="ChefOS: Operational Risk Assessment"
                questions={chefQuestions}
                accentColor="emerald"
            />

            <Footer />
        </div>
    );
};
