import React, { useState, useEffect } from 'react';
import { X, ArrowRight, CheckCircle, AlertTriangle, Brain } from 'lucide-react';

export interface Question {
    id: number;
    text: string;
    options: string[];
}

interface QuizModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    questions: Question[];
    accentColor?: 'emerald' | 'indigo' | 'blue';
}

export const QuizModal: React.FC<QuizModalProps> = ({
    isOpen,
    onClose,
    title,
    questions,
    accentColor = 'emerald'
}) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [isCalculating, setIsCalculating] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [email, setEmail] = useState('');

    // Reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            setCurrentQuestionIndex(0);
            setAnswers({});
            setIsCalculating(false);
            setIsFinished(false);
            setEmail('');
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleAnswer = (answer: string) => {
        setAnswers(prev => ({ ...prev, [currentQuestionIndex]: answer }));

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            // Finish quiz
            setIsCalculating(true);
            setTimeout(() => {
                setIsCalculating(false);
                setIsFinished(true);
            }, 2000); // 2 second calculation simulation
        }
    };

    const handleRecalculate = () => {
        setCurrentQuestionIndex(0);
        setAnswers({});
        setIsFinished(false);
    };

    // Color definitions based on accentColor
    const colors = {
        emerald: {
            text: 'text-emerald-400',
            bg: 'bg-emerald-500',
            border: 'border-emerald-500',
            glow: 'shadow-[0_0_20px_rgba(16,185,129,0.3)]',
            gradient: 'from-emerald-500',
            buttonHover: 'hover:bg-emerald-500/20'
        },
        indigo: {
            text: 'text-indigo-400',
            bg: 'bg-indigo-500',
            border: 'border-indigo-500',
            glow: 'shadow-[0_0_20px_rgba(99,102,241,0.3)]',
            gradient: 'from-indigo-500',
            buttonHover: 'hover:bg-indigo-500/20'
        },
        blue: {
            text: 'text-blue-400',
            bg: 'bg-blue-500',
            border: 'border-blue-500',
            glow: 'shadow-[0_0_20px_rgba(59,130,246,0.3)]',
            gradient: 'from-blue-500',
            buttonHover: 'hover:bg-blue-500/20'
        }
    }[accentColor];

    const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className={`relative w-full max-w-2xl bg-slate-900/90 border ${colors.border}/30 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl flex flex-col min-h-[500px] animate-in fade-in zoom-in-95 duration-300`}>

                {/* Header / Progress Bar */}
                <div className="relative h-1 w-full bg-slate-800">
                    <div
                        className={`absolute top-0 left-0 h-full ${colors.bg} transition-all duration-500 ease-out ${colors.glow}`}
                        style={{ w: `${isFinished ? 100 : progressPercentage}%` }}
                    />
                </div>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors z-20"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* CONTENT AREA */}
                <div className="flex-1 flex flex-col p-8 md:p-12 relative">

                    {/* Background Grid/Glow */}
                    <div className={`absolute top-0 right-0 w-64 h-64 ${colors.bg}/5 rounded-full blur-[80px] pointer-events-none`} />

                    {!isFinished && !isCalculating && (
                        <div className="flex-1 flex flex-col animate-in slide-in-from-right-8 duration-500">
                            <div className="mb-8">
                                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border ${colors.border}/30 mb-6`}>
                                    <Brain className={`w-3 h-3 ${colors.text}`} />
                                    <span className={`text-xs font-mono ${colors.text} tracking-widest uppercase`}>
                                        Analyzing Sector... {Math.round(progressPercentage)}%
                                    </span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-display text-white leading-tight">
                                    {questions[currentQuestionIndex].text}
                                </h2>
                            </div>

                            <div className="grid gap-4 mt-auto">
                                {questions[currentQuestionIndex].options.map((option, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleAnswer(option)}
                                        className={`group relative flex items-center justify-between p-6 text-left border border-white/5 bg-white/5 rounded-xl hover:border-${accentColor}-500/50 transition-all duration-300 ${colors.buttonHover}`}
                                    >
                                        <span className="text-lg text-slate-200 group-hover:text-white font-medium">{option}</span>
                                        <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-${accentColor}-500 group-hover:bg-${accentColor}-500/20 transition-all`}>
                                            <ArrowRight className={`w-4 h-4 text-slate-400 group-hover:${colors.text}`} />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {isCalculating && (
                        <div className="flex-1 flex flex-col items-center justify-center text-center animate-in fade-in duration-500">
                            <div className="relative mb-8">
                                <div className={`w-24 h-24 rounded-full border-4 ${colors.border}/20 border-t-${accentColor}-500 animate-spin`} />
                                <div className={`absolute inset-0 flex items-center justify-center ${colors.text}`}>
                                    <Brain className="w-8 h-8 animate-pulse" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-mono text-white mb-2">Processing Telemetry...</h3>
                            <p className="text-slate-400">Comparing with Sovereign compliance standards.</p>
                        </div>
                    )}

                    {isFinished && (
                        <div className="flex-1 flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-500">
                            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-full animate-bounce">
                                <AlertTriangle className="w-12 h-12 text-red-500" />
                            </div>

                            <h2 className="text-4xl font-display text-white mb-2">RISK LEVEL: <span className="text-red-500 text-glow">CRITICAL</span></h2>
                            <p className="text-slate-400 max-w-md mx-auto mb-8 leading-relaxed">
                                Your operational patterns indicate a high probability of compliance failure within the next quarter.
                                <br /><br />
                                Sovereign Intelligence can neutralize this risk immediately.
                            </p>

                            <div className="w-full max-w-sm bg-slate-800/50 p-6 rounded-xl border border-white/5">
                                <label className="block text-left text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">
                                    Send Compliance Report To:
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="director@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="flex-1 bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                                    />
                                    <button
                                        className={`bg-${accentColor}-600 hover:bg-${accentColor}-500 text-white px-4 rounded-lg transition-colors flex items-center justify-center`}
                                        onClick={() => alert(`Report sent to ${email} (Simulation)`)}
                                    >
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                                <p className="mt-4 text-[10px] text-slate-600">
                                    Encrypted via Sovereign Secure Protocol. We do not spam.
                                </p>
                            </div>

                            <button
                                onClick={handleRecalculate}
                                className="mt-8 text-xs font-mono text-slate-500 hover:text-white underline decoration-slate-700 underline-offset-4 transition-colors"
                            >
                                RE-RUN DIAGNOSTIC
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};
