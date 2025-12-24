import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const SiteOS: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow bg-white">
                <div className="max-w-7xl mx-auto px-6 py-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">SiteOS</h1>
                    <p className="text-xl text-gray-600">Intelligent site management solutions.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
};
