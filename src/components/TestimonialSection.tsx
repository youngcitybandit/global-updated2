
import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Dallas, TX",
      quote: "American Global provided excellent service when I needed it most. Their team helped me find affordable coverage that perfectly suits my needs.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Thompson",
      location: "Chicago, IL",
      quote: "I've been with American Global for over 10 years now. Their customer service is outstanding and they've always been there when I needed to file a claim.",
      rating: 5
    },
    {
      id: 3,
      name: "Patricia Garcia",
      location: "Miami, FL",
      quote: "The process of getting a policy was quick and easy. The representative I spoke with was knowledgeable and helped me choose the right coverage.",
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-agr-gray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-agr-navy mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about American Global.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden"
            >
              <div className="absolute -top-4 -left-4 w-16 h-16 opacity-10">
                <Quote size={64} className="text-agr-navy" />
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 relative z-10">{testimonial.quote}</p>
              
              <div>
                <p className="font-semibold text-agr-navy">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
