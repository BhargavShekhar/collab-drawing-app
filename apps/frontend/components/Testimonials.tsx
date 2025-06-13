import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar: string;
    rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({
    quote,
    author,
    role,
    company,
    avatar,
    rating
}) => {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                ))}
            </div>
            <p className="text-gray-700 mb-6 italic">"{quote}"</p>
            <div className="flex items-center">
                <img src={avatar} alt={author} className="w-12 h-12 rounded-full mr-4 object-cover" />
                <div>
                    <p className="font-medium text-gray-900">{author}</p>
                    <p className="text-gray-500 text-sm">{role}, {company}</p>
                </div>
            </div>
        </div>
    );
};

const Testimonials: React.FC = () => {
    const testimonials = [
        {
            quote: "Drawify has completely transformed how our team communicates ideas. The intuitive interface makes it so easy to create beautiful diagrams.",
            author: "Sarah Johnson",
            role: "Product Manager",
            company: "TechCorp",
            avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            rating: 5
        },
        {
            quote: "I've tried many diagramming tools, but none come close to the simplicity and beauty of Drawify. It's now an essential part of our workflow.",
            author: "Michael Chen",
            role: "UX Designer",
            company: "DesignHub",
            avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            rating: 5
        },
        {
            quote: "The collaboration features are game-changing. Our remote team can now brainstorm together as if we were in the same room.",
            author: "Alex Rodriguez",
            role: "Engineering Lead",
            company: "Innovate Inc",
            avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            rating: 4
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Join thousands of satisfied users who've discovered the easiest way to create diagrams.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <Testimonial
                            key={index}
                            quote={testimonial.quote}
                            author={testimonial.author}
                            role={testimonial.role}
                            company={testimonial.company}
                            avatar={testimonial.avatar}
                            rating={testimonial.rating}
                        />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-700 mb-2 text-lg font-medium">Trusted by 10,000+ users worldwide</p>
                    <div className="flex justify-center items-center flex-wrap gap-8 mt-6 opacity-70">
                        <img src="https://images.pexels.com/photos/5063095/pexels-photo-5063095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Company logo" className="h-8" />
                        <img src="https://images.pexels.com/photos/5063095/pexels-photo-5063095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Company logo" className="h-8" />
                        <img src="https://images.pexels.com/photos/5063095/pexels-photo-5063095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Company logo" className="h-8" />
                        <img src="https://images.pexels.com/photos/5063095/pexels-photo-5063095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Company logo" className="h-8" />
                        <img src="https://images.pexels.com/photos/5063095/pexels-photo-5063095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Company logo" className="h-8" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;