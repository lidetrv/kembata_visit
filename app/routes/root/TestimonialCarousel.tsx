import React, { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";

interface Testimonial {
  text: string;
  avatar: string;
  name: string;
  rating: number;
}

// Mock testimonial data
const testimonials: Testimonial[] = [
  {
    text: "Intuitive interface. Lightning-fast performance. Reliable security. Perfect for any business.",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=160&h=160&auto=format&fit=crop",
    name: "Michael Thompson",
    rating: 5,
  },
  {
    text: "Amazing experience! Everything was smooth and professional.",
    avatar:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=160&h=160&auto=format&fit=crop",
    name: "Sarah Williams",
    rating: 4,
  },
  {
    text: "Great support and easy to use. Highly recommended!",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=160&h=160&auto=format&fit=crop",
    name: "John Doe",
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          What Our Visitors Say
        </h2>
        <p className="text-lg text-gray-600">
          Discover experiences from travelers like you
        </p>
      </div>

      <div className="relative">
        {/* Carousel wrapper */}
        <div className="relative h-80 overflow-hidden rounded-lg">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out ${
                index === currentSlide
                  ? "translate-x-0"
                  : index < currentSlide
                    ? "-translate-x-full"
                    : "translate-x-full"
              }`}
            >
              <div className="flex justify-center items-center h-full">
                <TestimonialCard testimonial={testimonial} />
              </div>
            </div>
          ))}
        </div>

        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-4 left-1/2 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide
                  ? "bg-blue-600"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-current={index === currentSlide ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-1/2 left-4 z-30 flex items-center justify-center w-10 h-10 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors -translate-y-1/2"
          onClick={prevSlide}
        >
          <svg
            className="w-5 h-5 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m15 19-7-7 7-7"
            />
          </svg>
        </button>
        <button
          type="button"
          className="absolute top-1/2 right-4 z-30 flex items-center justify-center w-10 h-10 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors -translate-y-1/2"
          onClick={nextSlide}
        >
          <svg
            className="w-5 h-5 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m9 5 7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
