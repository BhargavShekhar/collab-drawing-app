"use client"

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Templates: React.FC = () => {
    const categories = ['All', 'Flowcharts', 'Wireframes', 'Mindmaps', 'UML Diagrams', 'Architecture'];
    const [activeCategory, setActiveCategory] = useState('All');

    const templates = [
        {
            title: 'User Flow Template',
            category: 'Flowcharts',
            image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            popular: true
        },
        {
            title: 'Website Wireframe Kit',
            category: 'Wireframes',
            image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            popular: false
        },
        {
            title: 'Project Mindmap',
            category: 'Mindmaps',
            image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            popular: true
        },
        {
            title: 'Class Diagram Template',
            category: 'UML Diagrams',
            image: 'https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            popular: false
        },
        {
            title: 'Network Architecture',
            category: 'Architecture',
            image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            popular: false
        },
        {
            title: 'Decision Tree',
            category: 'Flowcharts',
            image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            popular: true
        }
    ];

    const filteredTemplates = activeCategory === 'All'
        ? templates
        : templates.filter(template => template.category === activeCategory);

    return (
        <section id="templates" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Start with a Template</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Choose from our library of professionally designed templates to jumpstart your project.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center mb-12 gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category
                                    ? 'bg-indigo-600 text-white'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTemplates.map((template, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            {template.popular && (
                                <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold py-1 px-2 rounded-full z-10">
                                    Popular
                                </div>
                            )}
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={template.image}
                                    alt={template.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">{template.title}</h3>
                                        <p className="text-sm text-gray-500">{template.category}</p>
                                    </div>
                                    <button className="bg-gray-100 p-2 rounded-full text-indigo-600 hover:bg-indigo-100 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                                        <ArrowRight className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                        View all templates <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Templates;