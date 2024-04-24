// import React, { useState, useRef } from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import  './First.css';

// const Showcasing= () => {
//     const responsive = {
//         desktop: {
//           breakpoint: { max: 3000, min: 800 },
//           items: 5,
//           slidesToSlide: 1// optional, default to 1.
//         },
//         tablet: {
//           breakpoint: { max: 1024, min: 768 },
//           items: 4,
//           slidesToSlide: 4 // optional, default to 1.
//         },
//         mobile: {
//           breakpoint: { max: 767, min: 464 },
//           items: 2,
//           slidesToSlide: 2  // optional, default to 1.  
//         }
//       };
//       const sliderImageUrl = [
//         //First image url
//         {
//           url:
//             "https://www.makemyhouse.com/assets/themelibv2assets/webview/images/cp-10.webp?version=210",
//             name:"Tamil Nadu",
//             project:"68"
//         },
//         {
//           url:
//             "https://www.makemyhouse.com/assets/themelibv2assets/webview/images/cp-13.webp?version=210",
//             name:"Telangan",
//             project:"78"
//         },
//         {
//           url:
//             "https://www.makemyhouse.com/assets/themelibv2assets/webview/images/cp-16.webp?version=210",
//             name:"Uttrakhand",
//             project:"199"
//         },
//         {
//           url:
//             "https://www.makemyhouse.com/assets/themelibv2assets/webview/images/cp-2.webp?version=210",
//             name:"Karnataka",
//             project:"120"
//         },
//         {
//           url:
//             "https://www.makemyhouse.com/assets/themelibv2assets/webview/images/cp-3.webp?version=210",
//             name:"Rajisthan",
//             project:"133"
//         },
//         {
//           url:
//             "	https://www.makemyhouse.com/assets/themelibv2assets/webview/images/cp-15.webp?version=210",
//             name:"Haryana",
//             project:"36"
//         },
       
    
//       ];

//       const carouselRef = useRef(null);
//       const CustomLeftButton = () => (
//         <button
//           className="custom-button left-button"
//           onClick={() => carouselRef.current.previous()}
//         >
//                   <img src="https://www.makemyhouse.com//assets/themelibv3assets/images/left-errow.png" alt="" />

//         </button>
//       );
    
//       const CustomRightButton = () => (
//         <button
//           className="custom-button right-button"
//           onClick={() => carouselRef.current.next()}
//         >
//          <img src="	https://www.makemyhouse.com//assets/themelibv3assets/images/right-errow.png" alt="" />

//         </button>
//       );
//       const CustomButtonGroup = (props) => {
//         return (
//           <div className="custom-button-group">
          
//               <>
//                 <CustomLeftButton {...props} />
//                 <CustomRightButton {...props} />
//               </>
       
//           </div>
//         );
//       };
//   return (
//     <div className="m-5"> 
//         <center> 
//             <b style={{fontSize:"25px"}}>Showcasing Our Pan-India Home Design Projects</b>
//             <div className="create_div mb-5">
//               <div className="inner-create_div"></div>
//             </div>
//         </center>
//         <div className='tab-content' style={{padding:"20px 40px"}}>
//         {/* <Carousel
//                 responsive={responsive}
//               autoPlay={true}
//               arrows={false}
//               swipeable={true}
//               draggable={true}
//               showDots={false}
//               infinite={true}
//               pauseOnHover
//               partialVisible={false}
//               rtl={false}
//               autoPlaySpeed={2000} 
//               dotListClass="custom-dot-list-style"
//                 // customButtonGroup={<CustomButtonGroup />}
//             ref={carouselRef}
//             > */}
//         {sliderImageUrl.map((imageUrl, index) => {
//           return (<>
//             <div className='row ms-2'>
//               <div className="tab-content mt-3 mb-3" style={{border:"1px solid #BFBFBF"}}>
//                 <div className="slider  justify-content-center " key={index} >
//                       <center  className=' mt-3 col-sm-12'>
//                           <div className=''>
//                           <img src="https://www.makemyhouse.com/assets/themelibv2assets/webview/images/cp-10.webp?version=210" alt="movie" width={"100px"}/>
//                           <br></br>
//                           <h4><b>68 </b>Projects</h4>
//                           <span>Completed In</span>
//                           <br></br>
//                           <b className='mt-2'>Tamil Nadu</b>
//                           </div>
//                       </center>
//                 </div>
//               </div>
//              </div>
//           </>
//           );
//         })}
//       {/* </Carousel> */}
//         </div>
     
//   </div>
//   );
// };

// export default Showcasing;


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
    <div className="m-3">
            <center>
                <b style={{ fontSize: "25px",color:"#D77427",fontWeight:"900" }}>Showcasing Our Pan-India Home Design Projects</b>
                <div className="create_div mb-5">
                    <div className="inner-create_div"></div>
                </div>
            </center>
            <div className='tab-content' style={{ padding: "20px 40px" }}>
                <div className="row">
                    {sliderImageUrl.map((image, index) => (
                        <div className="col-md-2" key={index}>
                            <div className="tab-content mt-3 mb-3" style={{ border: "1px solid #BFBFBF" }}>
                                <div className="slider justify-content-center">
                                    <center className='mt-3 col-sm-12'>
                                        <div className='p-2'>
                                            <img src={image.url} alt="project" width={"100px"} />
                                            <br />
                                            <h4 className="pDesign"><b>{image.project}</b> Projects</h4>
                                            <span className="pDesign">Completed In</span>
                                            <br />
                                            <b className='mt-2 pDesign'>{image.name}</b>
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

