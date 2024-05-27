


import React from 'react';
import './First.css';

const Showcasing = () => {
  const sliderImageUrl = [
    {
      url: "./asset/Images/code-1.webp",
      name: "Noida",
      project: "68"
    },
    {
      url: "./asset/Images/code-2.webp",
      name: "Jaipur",
      project: "78"
    },
    {
      url: "./asset/Images/code-3.webp",
      name: "Ahmedabad",
      project: "47"
    },
    {
      url: "./asset/Images/code-4.webp",
      name: "Karnataka",
      project: "64"
    },
    {
      url: "./asset/Images/code-5.webp",
      name: "Surat",
      project: "103"
    },
    {
      url: "./asset/Images/code-6.webp",
      name: "Pune",
      project: "56"
    },
    {
      url: "./asset/Images/code-7.webp",
      name: "Chennai",
      project: "81"
    },
    
    {
      url: "./asset/Images/code-8.webp",
      name: "Kolhapur",
      project: "66"
    },
    {
      url: "./asset/Images/code-1.webp",
      name: "Mumbai",
      project: "59"
    },
    {
      url: "./asset/Images/code-2.webp",
      name: "Nagpur",
      project: "86"
    },
    {
      url: "./asset/Images/code-3.webp",
      name: "Delhi",
      project: "92"
    },
    {
      url: "./asset/Images/code-4.webp",
      name: "Gurugram",
      project: "43"
    }
  ];

  return (
    <div className="SectionArea pb-5">
            <center className='pt-5 '>
                <b className='text-white' style={{ fontSize: "30px",color:"#D77427",fontWeight:"900", fontFamily:"roboto" }}>Showcasing Our Pan-India Home Design Projects</b>
                <div className="create_div mb-5">
                    <div className="inner-create_div"></div>
                </div>
            </center>
            <div className='tab-content customPadding'>
                <div className="row">
                    {sliderImageUrl.map((image, index) => (
                        <div className="col-md-2 mx-0" key={index}>
                            <div className="tab-content mt-3 mb-3 p-3 " style={{ border: "1px solid rgb(242, 175, 7)", borderRadius:"30px" }}>
                                <div className=" d-flex justify-content-center">
                                    <center className='mt-3 m col-sm-12'>
                                        <div className='p-3 '>
                                            <img src={image.url} alt="project" width={"100px"} />
                                            <br />
                                            <h4 className="pDesign text-white"><b>{image.project}</b> Projects</h4>
                                            <span className="pDesign text-white">Completed In</span>
                                            <br />
                                            <b className='mt-2 pDesign text-white'>{image.name}</b>
                                        </div>
                                    </center>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
  );
};

export default Showcasing;

