// src/components/ClientTestimonials.jsx
import React from 'react';

const testimonials = [
  { id: 1, name: "Client 1", statement: "This is a great product!" },
  { id: 2, name: "Client 2", statement: "I love this!" },
  { id: 3, name: "Client 3", statement: "Highly recommend!" },
];

const ClientTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  React.useEffect(() => {
    const testimonialInterval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(testimonialInterval);
  }, []);

  return (
    <div className="client-testimonials py-8">
      <h2 className="text-2xl font-bold mb-4">What Our Clients Say</h2>
      <div className="relative w-full h-48 overflow-hidden">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`absolute w-full h-full transition-opacity duration-1000 ${index === currentTestimonial ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="bg-cover bg-center w-full h-full flex items-center justify-center bg-gray-300">
              <p className="text-white text-xl">{testimonial.statement}</p>
              <p className="text-white mt-2">- {testimonial.name}</p>
            </div>
          </div>
        ))}
        <button onClick={prevTestimonial} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-2 bg-black bg-opacity-50">Prev</button>
        <button onClick={nextTestimonial} className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-2 bg-black bg-opacity-50">Next</button>
      </div>
    </div>
  );
};

export default ClientTestimonials;
