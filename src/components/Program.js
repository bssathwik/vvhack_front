import React from 'react';
// import './Program.css'; // Import any specific CSS for Program

const programs = [
    {
        title: 'Program 1: Mindfulness for Athletes',
        description: 'Our Mindfulness for Athletes program teaches techniques to improve focus, reduce anxiety, and promote overall mental well-being through mindful practices.',
        videoUrl: 'https://www.youtube.com/embed/Z2dK_m2LfrY?si=UGr6HTHEpepFLGk0&controls=0'
    },
    // Add more programs as needed
];

const Program = () => {
    return (
        <section id="programs">
            <h2>Our Programs</h2>
            {programs.map((program, index) => (
                <div className="program" key={index}>
                    <iframe width="560" height="315" src={program.videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <div className="program-inner">
                        <h3>{program.title}</h3>
                        <p>{program.description}</p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Program;
