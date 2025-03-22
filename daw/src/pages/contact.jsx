import React, { useState } from 'react';
import '../css/contact.css';
import '../css/Responsive.css'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFax } from 'react-icons/fa'; 


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
    const informations = [
    { id: 1, icon : FaMapMarkerAlt, text:'our main office' , link:'algeria,constantine,abdelhamid mehri' },
    { id: 2, icon : FaPhone, text:'phone number' , link:'213782268236' },
    { id: 3, icon : FaFax, text:'fax' , link:'123-456-7890' } ,
    { id: 4, icon : FaEnvelope, text:'email' , link:'siradjboulemaiz@gmail.com' },

    ];
  return (
    <div className="contact">
      <section className="informations">
        <div className="information-cards">
          {informations.map((information) => (
            <div key={information.id} className="information-card">
              <information.icon className='icon' />
              <h4>{information.text}</h4>
              <a href="#s">{information.link}</a>
            </div>
          ))}
        </div>

      </section>

      <h1>Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" id="name" value={formData.name} placeholder='ENTER YOUR NAME' onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label >Email</label>
          <input type="email" name="email" id="email" value={formData.email} placeholder='E-MAIL' onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label >Message</label>
          <textarea name="message" id="message" value={formData.message} placeholder='TYPE HERE' onChange={handleChange} required />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
