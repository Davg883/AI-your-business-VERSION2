import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Building2, Truck, ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center mb-20">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-semibold mb-4 tracking-wide uppercase">AI-Powered Enterprise</span>
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                    Intelligent Solutions for <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Modern Businesses</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    We build autonomous systems that empower your workforce, optimize operations, and drive growth through advanced artificial intelligence.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-100 transition-colors">
                        <Utensils className="w-7 h-7 text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">ChefOS</h3>
                    <p className="text-gray-500 mb-6 leading-relaxed">Revolutionary AI management for professional kitchens. Optimize inventory, menu planning, and staff workflows with precision.</p>
                    <Link to="/chefos" className="inline-flex items-center font-semibold text-orange-600 hover:text-orange-700 transition-colors">
                        Explore ChefOS <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                        <Building2 className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">SiteOS</h3>
                    <p className="text-gray-500 mb-6 leading-relaxed">Intelligent site tracking and personnel management. Enhance safety and gain real-time operational oversight effortlessly.</p>
                    <Link to="/siteos" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                        Explore SiteOS <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors">
                        <Truck className="w-7 h-7 text-indigo-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Aegis</h3>
                    <p className="text-gray-500 mb-6 leading-relaxed">Advanced logistics and fleet management. Track assets, optimize routes, and ensure timely, efficient deliveries.</p>
                    <Link to="/logistics" className="inline-flex items-center font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
                        Explore Aegis <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
};
