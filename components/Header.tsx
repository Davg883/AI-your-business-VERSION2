import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid } from 'lucide-react';

export const Header: React.FC = () => {
    return (
        <header className="px-6 py-4 border-b border-gray-200 bg-white flex justify-between items-center sticky top-0 z-50">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl text-solent hover:text-slate-700 transition-colors">
                <LayoutGrid className="w-6 h-6 text-blue-600" />
                <span>AI Your Business</span>
            </Link>
            <nav className="flex gap-6">
                <Link to="/" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Home</Link>
                <Link to="/chefos" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">ChefOS</Link>
                <Link to="/siteos" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">SiteOS</Link>
                <Link to="/logistics" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Aegis</Link>
            </nav>
        </header>
    );
};
