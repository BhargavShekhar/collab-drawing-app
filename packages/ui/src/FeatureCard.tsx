import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100 hover:border-indigo-100 group"
      style={{
        backgroundColor: 'white',
        borderRadius: '0.75rem',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '1.5rem',
        border: '1px solid #f3f4f6',
        transition: 'box-shadow 0.3s, border-color 0.3s'
      }}
    >
      <div
        className="mb-4 transform group-hover:scale-110 transition-transform duration-300"
        style={{
          marginBottom: '1rem',
          transform: 'scale(1)',
          transition: 'transform 0.3s'
        }}
      >
        {icon}
      </div>
      <h3
        className="text-xl font-semibold mb-2 group-hover:text-indigo-600 transition-colors"
        style={{
          fontSize: '1.25rem',
          fontWeight: 600,
          marginBottom: '0.5rem',
          transition: 'color 0.3s'
        }}
      >
        {title}
      </h3>
      <p
        className="text-gray-600"
        style={{
          color: '#4B5563'
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;