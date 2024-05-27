import React, { useState, useEffect } from 'react';
import "./index.css";

const FrontPage = () => {
  const [contentIndex, setContentIndex] = useState(0);
  const contents = [
    {
      text: ' Custom Home Design: Your Vision, Our Expertise! .',
      subText: 'Welcome to ROYAL HOUSE MAKERS, where your dream home becomes a reality! Royal House Maker specializes in crafting bespoke homes tailored to your unique needs and preferences. Whether you are envisioning a cozy cottage nestled in the countryside or a sleek, modern penthouse in the heart of the city, we are here to bring your vision to life.',
      duration: 5000 
      },
      {
        text: ' Innovative Architectural Solutions: Where Creativity Meets Functionality! .',
      subText: " Where creativity meets functionality. We specialize in innovative architectural solutions for residential and commercial properties, combining aesthetics with practicality to transform visions into reality.",
        duration: 9000
      },
      {
        text: ' Crafting Your Dream Home: Personalized Solutions from Royal House Maker! .',
        subText: 'At Royal House Maker, we believe that your home should be a reflection of who you are. That is why we take the time to listen to your needs and preferences, ensuring that every detail is tailored to your specifications. With Royal House Maker, your dream home is within reach.',
        duration: 9000
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % contents.length);
    }, contents[contentIndex].duration);

    return () => clearInterval(interval);
  }, [contentIndex, contents]);

 
 
  return (
    <div id='/' className='' style={{ position: 'relative', width: '100%', height: '100vh' }}>
        <video autoPlay loop muted playsInline webkit-playsinline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src="./99.mp4" type="video/mp4" />
         
        </video>
        <div className='layoutContent  contentArea' >
          <h1 className='VideoHeader headerTextEffect' >{contents[contentIndex].text}</h1>
          <p className='ms-3 g-4 paraTextEffect' >{contents[contentIndex].subText}</p>
        </div>
    </div>
  );
};

export default FrontPage;
