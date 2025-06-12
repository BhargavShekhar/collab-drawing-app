import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-indigo-700 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start creating beautiful diagrams?</h2>
          <p className="text-lg text-indigo-100 mb-8">
            Join thousands of users who are already bringing their ideas to life with Drawify.
            No credit card required to get started.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-md flex items-center justify-center">
              Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;