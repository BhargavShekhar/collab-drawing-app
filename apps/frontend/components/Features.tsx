import React from 'react';
import { PenTool, Share2, Download, Users, Layers, Palette } from 'lucide-react';
import FeatureCard from '@repo/ui/FeatureCard';

const Features: React.FC = () => {
  const features = [
    {
      icon: <PenTool className="h-8 w-8 text-indigo-600" />,
      title: 'Intuitive Drawing Tools',
      description: 'Create diagrams with a natural hand-drawn feel using our simple and powerful drawing tools.'
    },
    {
      icon: <Share2 className="h-8 w-8 text-indigo-600" />,
      title: 'Real-time Collaboration',
      description: 'Work together with your team in real-time, seeing changes instantly as they happen.'
    },
    {
      icon: <Download className="h-8 w-8 text-indigo-600" />,
      title: 'Export & Share',
      description: 'Export your diagrams as PNG, SVG, or PDF and easily share them with anyone.'
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: 'Team Workspaces',
      description: 'Organize projects and collaborate with your team in dedicated workspaces.'
    },
    {
      icon: <Layers className="h-8 w-8 text-indigo-600" />,
      title: 'Extensive Library',
      description: 'Access a growing library of shapes, templates, and diagrams to kickstart your creativity.'
    },
    {
      icon: <Palette className="h-8 w-8 text-indigo-600" />,
      title: 'Customization',
      description: 'Personalize colors, line styles, and more to match your brand or preferences.'
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features, Simple Interface</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to create beautiful diagrams without the complexity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;