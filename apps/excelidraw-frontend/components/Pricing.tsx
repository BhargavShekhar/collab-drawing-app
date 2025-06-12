import React from 'react';
import { Check } from 'lucide-react';

interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
}

const PricingTier: React.FC<PricingTierProps> = ({ 
  name, 
  price, 
  description, 
  features, 
  highlighted = false,
  ctaText
}) => {
  return (
    <div 
      className={`rounded-2xl p-8 h-full flex flex-col ${
        highlighted 
          ? 'bg-gradient-to-b from-indigo-600 to-indigo-800 text-white shadow-xl border-2 border-indigo-300 scale-105 z-10' 
          : 'bg-white shadow-md border border-gray-200'
      }`}
    >
      <div className="mb-6">
        <h3 className={`text-xl font-bold mb-2 ${highlighted ? 'text-white' : 'text-gray-800'}`}>
          {name}
        </h3>
        <div className="mb-2">
          <span className="text-3xl font-bold">{price}</span>
          {price !== 'Free' && <span className={highlighted ? 'text-indigo-200' : 'text-gray-500'}>/month</span>}
        </div>
        <p className={highlighted ? 'text-indigo-100' : 'text-gray-600'}>
          {description}
        </p>
      </div>
      
      <ul className="mb-8 space-y-3 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className={`flex-shrink-0 ${highlighted ? 'bg-indigo-500' : 'bg-indigo-100'} p-1 rounded-full mr-3`}>
              <Check className={`h-3 w-3 ${highlighted ? 'text-white' : 'text-indigo-600'}`} />
            </span>
            <span className={highlighted ? 'text-indigo-100' : 'text-gray-600'}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      
      <button 
        className={`w-full py-3 rounded-lg font-medium transition-colors ${
          highlighted 
            ? 'bg-white text-indigo-600 hover:bg-gray-100' 
            : 'bg-indigo-600 text-white hover:bg-indigo-700'
        }`}
      >
        {ctaText}
      </button>
    </div>
  );
};

const Pricing: React.FC = () => {
  const pricingTiers = [
    {
      name: 'Free',
      price: 'Free',
      description: 'Perfect for individuals and small projects.',
      features: [
        'Unlimited canvases',
        'Basic shapes and tools',
        'PNG export',
        'Limited templates',
        '1 collaborator'
      ],
      ctaText: 'Get Started'
    },
    {
      name: 'Pro',
      price: '$12',
      description: 'Everything you need for professional diagrams.',
      features: [
        'Unlimited canvases',
        'Advanced shapes and tools',
        'All export options',
        'Full template library',
        'Up to 5 collaborators',
        'Version history (30 days)'
      ],
      highlighted: true,
      ctaText: 'Try Free for 14 Days'
    },
    {
      name: 'Team',
      price: '$29',
      description: 'For teams that need to collaborate extensively.',
      features: [
        'Everything in Pro',
        'Unlimited collaborators',
        'Team workspaces',
        'Admin controls',
        'Version history (90 days)',
        'Priority support'
      ],
      ctaText: 'Try Free for 14 Days'
    }
  ];

  return (
    <section id="pricing" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works for you or your team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <PricingTier 
              key={index}
              name={tier.name}
              price={tier.price}
              description={tier.description}
              features={tier.features}
              highlighted={tier.highlighted}
              ctaText={tier.ctaText}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Need a custom plan for your enterprise?</p>
          <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;