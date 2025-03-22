import React from 'react';
import '../css/about-us.css';
import '../css/keyFrames.css';
import '../css/Responsive.css'

import siradj from '../photo/homePhoto/blackClover.jpg'
import louai from '../photo/homePhoto/selvie.jpg'

const AboutUs = () => {
    const teamMembers = [
        { id: 1, name: 'Siradj Eddine Boulemaiz', role: 'CEO', image: siradj },
        { id: 2, name: 'Louai Chouai', role: 'CFO', image: louai },
    ];
    return (
        <div className="about-us">
            <section className="text">
                <div>
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, deserunt.</p>
                </div>
               
            </section>
            <section className="team">
                <div className="story">
                    <h1>Behind the success</h1>
                    <p className='animation'>Established just a few years ago, we are a young and motivated company full of new ideas and energy. During the past years, we have accomplished a wide range of projects for various companies. We aim to supply tip-top services and products to all our customers and contribute to having a marketplace where every business has equal opportunities to grow</p>
                </div>
                <div> 
                <h1>Our Team</h1>
                <div className="team-members">
                    {teamMembers.map((teamMember) => (
                        <div key={teamMember.id} className="team-member">
                            
                            <h3>{teamMember.name}</h3>
                            <p>{teamMember.role}</p>
                            <img src={teamMember.image} alt="Team Member" />
                        </div>
                    ))}
                </div>
                </div>
               
            </section>
        </div>
    );
};

export default AboutUs;