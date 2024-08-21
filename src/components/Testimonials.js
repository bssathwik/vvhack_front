import React from 'react';
// import './Testimonials.css'; // Import any specific CSS for Testimonials

const testimonials = [
    {
        text: "The mindfulness program changed my approach to competition. I feel more focused and calm than ever!",
        author: "Alex, Professional Athlete"
    },
    // Add more testimonials as needed
];

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h2>What Our Clients Say</h2>
            {testimonials.map((testimonial, index) => (
                <blockquote key={index}>
                    <p>{testimonial.text}</p>
                    <cite>- {testimonial.author}</cite>
                </blockquote>
            ))}
        </section>
    );
};

export default Testimonials;
