import React, { useState, useEffect } from 'react';
import "./index.css";

const FrontPage = () => {
  const [contentIndex, setContentIndex] = useState(0);
  const contents = [
    {
      text: '➡️1 Welcome to ROYAL HOUSE MAKERS .COM',
      subText: "Where creativity meets functionality. We specialize in innovative architectural solutions for residential and commercial properties, combining aesthetics with practicality to transform visions into reality.",
      duration: 5000 
      },
      {
        text: '➡️2 Second content with the longest text to demonstrate the increased length of the text on the front page.',
        subText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        duration: 5000
      },
      {
        text: '➡️3 Welcome to ROYAL HOUSE MAKERS .COM',
        subText: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
        duration: 5000
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % contents.length);
    }, contents[contentIndex].duration);

    return () => clearInterval(interval);
  }, [contentIndex, contents]);

  const textColor = '#ffff'; 
 
  return (
    <div className='' style={{ position: 'relative', width: '100%', height: '100vh' }}>
        <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src="./99.mp4" type="video/mp4" />
        </video>
        <div className='w-100  VideoContent' style={{ position: 'absolute', top: '50%', left: '52%', transform: 'translate(-50%, -50%)' }}>
          <h1 className='VideoHeader' style={{ color: textColor, maxWidth: '100vw' }}>{contents[contentIndex].text}</h1>
          <p className='VideoPara g-4' style={{ color: '#EEEDEB', fontSize: '1rem', maxWidth: '90vw' }}>{contents[contentIndex].subText}</p>
        </div>
    </div>
  );
};

export default FrontPage;
