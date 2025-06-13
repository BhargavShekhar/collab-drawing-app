import React from 'react';
import { Check } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Create your canvas',
      description: 'Start with a blank canvas or choose from our template library to kickstart your diagram.',
      image: 'https://images.pexels.com/photos/6804604/pexels-photo-6804604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      number: '02',
      title: 'Draw and collaborate',
      description: 'Use our intuitive tools to sketch your ideas. Invite team members to collaborate in real-time.',
      image: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      number: '03',
      title: 'Export and share',
      description: 'Export your finished diagram in multiple formats or share it directly with a simple link.',
      image: 'https://images.pexels.com/photos/6804602/pexels-photo-6804602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <section id="how-it-works" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create beautiful diagrams in just three simple steps.
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8 md:gap-16`}
            >
              <div className="md:w-1/2">
                <div className="relative">
                  <span className="absolute -left-4 -top-4 bg-indigo-600 text-white text-xl font-bold w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                    {step.number}
                  </span>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-[1.02] duration-300">
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                <ul className="space-y-3">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="flex-shrink-0 bg-green-100 p-1 rounded-full mr-3">
                        <Check className="h-4 w-4 text-green-600" />
                      </span>
                      <span className="text-gray-600">
                        {index === 0 && item === 1 && 'Unlimited canvas size for any project scope'}
                        {index === 0 && item === 2 && 'Access to 100+ pre-designed templates'}
                        {index === 0 && item === 3 && 'Simple drag-and-drop interface'}
                        
                        {index === 1 && item === 1 && 'Real-time cursor tracking for team awareness'}
                        {index === 1 && item === 2 && 'Comments and feedback directly on diagrams'}
                        {index === 1 && item === 3 && 'Version history to track changes'}
                        
                        {index === 2 && item === 1 && 'Export in PNG, SVG, and PDF formats'}
                        {index === 2 && item === 2 && 'One-click sharing with view or edit permissions'}
                        {index === 2 && item === 3 && 'Embed diagrams in websites or documents'}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;