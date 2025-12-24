import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid } from 'lucide-react';

export const Header: React.FC = () => {
    return (
        <header className="px-6 py-4 border-b border-white/10 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20 group-hover:bg-blue-500/20 transition-all duration-300">
                        <LayoutGrid className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                    </div>
                    <span className="font-mono font-bold text-lg tracking-wider text-slate-100">AI_BIZ<span className="text-blue-500 animate-pulse">_</span></span>
                </Link>
                <nav className="hidden md:flex gap-8">
                    {['ChefOS', 'SiteOS', 'Aegis'].map((item) => (
                        <Link
                            key={item}
                            to={item === 'Aegis' ? '/logistics' : `/${item.toLowerCase()}`}
                            className="relative text-sm font-mono text-slate-400 hover:text-white transition-colors py-2 uppercase tracking-widest group"
                        >
                            {item}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300 ease-out" />
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
};
