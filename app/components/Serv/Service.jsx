import React, { useEffect, useState } from 'react';
import "./Service.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'pure-react-carousel/dist/react-carousel.es.css';
// import { Link } from 'react-router-dom';

function Service() {

  { /* Floor Plan */ }
  const images = ['./Floor/A.jpg', './Floor/B.jpg', './Floor/C.jpg', './Floor/D.jpg', './Floor/E.jpg', './Floor/F.jpg'];



  { /*  3D ELEVATION DESIGN */ }
  const images1 = ['./3D ELEVATION/A.jpg', './3D ELEVATION/B.jpg', './3D ELEVATION/C.jpg', './3D ELEVATION/D.jpg', './3D ELEVATION/E.jpg', './3D ELEVATION/F.jpg'];

  { /*  2D Elevation */ }
  const images2 = ['./Floor/A.jpg', './Floor/B.jpg', './Floor/C.jpg', './Floor/D.jpg', './Floor/E.jpg', './Floor/F.jpg'];

  { /*  STRUCTURE DRAWING */ }
  const images3 = ['./Structure/J.png', './Structure/B.png', './Structure/C.png', './Structure/D.png', './Structure/E.png', './Structure/F.png', './Structure/G.png', './Structure/H.png', './Structure/I.png', './Structure/A.png', './Structure/K.png'];

  { /*  Interior Design */ }
  const images4 = ['./Interior/A.jpg', './Interior/B.jpg', './Interior/C.jpg', './Interior/D.jpg', './Interior/E.jpg', './Interior/F.jpg'];

  { /*  Landscape */ }
  const images5 = ['./Landscape/A.jpg', './Landscape/B.jpg', './Landscape/C.jpg', './Landscape/D.jpg', './Landscape/E.jpg', './Landscape/F.jpg'];


  { /*  3D FLOORPLAN */ }
  const images6 = ['./3D FLOORPLAN/A.jpg', './3D FLOORPLAN/B.jpg', './3D FLOORPLAN/C.jpg', './3D FLOORPLAN/D.jpg', './3D FLOORPLAN/E.jpg', './3D FLOORPLAN/F.jpg', './3D FLOORPLAN/G.jpg', './3D FLOORPLAN/H.jpg', './3D FLOORPLAN/I.jpg', './3D FLOORPLAN/J.jpg', './3D FLOORPLAN/K.jpg', './3D FLOORPLAN/L.jpg', './3D FLOORPLAN/M.jpg', './3D FLOORPLAN/N.jpg'];

  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle click on previous button
  const handlePrev = () => {
    const newIndex = (activeIndex === 0) ? images.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  // Function to handle click on next button
  const handleNext = () => {
    const newIndex = (activeIndex === images.length - 1) ? 0 : activeIndex + 1;
    setActiveIndex(newIndex);
  };

  return (
    <div className=''>
      <div className='sec-heading mt-5'>
        <h5>About Us</h5>
        
      </div>
      <div className='mt-4'>
        <div className='p-2'>
          <img className='design img-fluid' src="./1-1-1-1.jpg" alt="Project" />
        </div>
        { /* Floor Plan */}
        <div className="row mt-1 p-3">
          <div id='a' className="col-lg-6 col-sm-12 d-flex justify-content-center" >
            <div id="demo" className="slider carousel slide" data-bs-ride="false" data-interval="false" >
              <div className="carousel-inner primary">
                {images.map((image, index) => (
                  <div key={index} className={`images-slider carousel-item ${index === 0 ? 'active' : ''}`}>
                    <img src={image} alt={`Image ${index}`} className="cover  CoverImg border-nav" />
                  </div>
                ))}
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
          <div id='b' className='col-lg-6 col-sm-12'>
            <div className='p_1 img_set mt-2'>
              <div className='full-width-paragraph'>
                <div className='text-start'>
                  <p className='text-black pDesign' style={{ color: "black", fontWeight:"900" }}>
                    <h5 class='Header-1-1-1 pDesign' style={{fontWeight:"700"}}>FLOOR PLAN</h5><br />
                  </p>
                  <p className='text-black pDesign' >
                    <strong>Floor Plan</strong>: A floorplan is a detailed visual representation of a building's layout, typically viewed above-it provides essental information about the arrangment of rooms, walls, Doors, windows and other architectual features.
                  </p>

                  <strong className='Header-1-1-1 pDesign'>Here are the key components of a Floor Plan:</strong><br />
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong>  Room layout.
                  </p>
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong>  Dimensions and Scales.
                  </p>
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong>  Traffic flow and Circulation.
                  </p>
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong>  Vastu Oriented.(Depend on clients)
                  </p>
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong>  Windows and Doors!.
                  </p>
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong>  Furniture Placement.
                  </p>
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong>  Architectural features.
                  </p>
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong> light and Ventilation.
                  </p>
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong> Balance and proptional.
                  </p>
                </div>
              </div>
            </div>
          </div> 
          { /*  3D ELEVATION DESIGN */}   

          <div id='c' className='col-lg-6'>
            <div className='p_1 img_set mt-2'>
              <div className='full-width-paragraph'>
                <div className='text-start'>
                  <p className='text-black pDesign' >
                    <h5 className='Header-1-1-1 pDesign' style={{fontWeight:"700"}}>3D ELEVATION DESIGN</h5><br />

                  </p>
                  <p className='text-black pDesign' >
                    <strong>Elevation</strong>: Let's delve into intricacies of Elevation Design in architecture. An Elevation is a two-dimensional representation of one side of a building, typically viewed front side, or rear. It provides essential information about the building exterior apperance,including proportions, materials and architectural features.
                  </p>

                  <strong className='Header-1-1-1 pDesign'>Here's are detailed of 3D elevation:</strong><br />
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong>  Vertical Proportions.
                  </p>
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong>  Architectural Elements.
                  </p>
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong>  Realistic Visualization.
                  </p>
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong>  Symmetry and Asymmetry.
                  </p>
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong>  Context and Surrounding.
                  </p>
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong>  Budget friendly.
                  </p>
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong>  Lighting and shadow Effects.
                  </p>
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong> Roof Design.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id='d' className="col-lg-6 d-flex justify-content-center" >
            <div id="demo2" className="slider carousel slide" data-bs-ride="false" data-interval="false" >
             

              <div className="carousel-inner primary">
                {images1.map((image, index) => (
                  <div key={index} className={`images-slider carousel-item ${index === 0 ? 'active' : ''}`}>
                    <img src={image} alt={`Image ${index}`} className="cover  CoverImg border-nav" />
                  </div>
                ))}
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#demo2" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#demo2" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
          { /*  2D Elevation */}

          <div id='e' className="col-lg-6 d-flex justify-content-center" >
            <div id="demo3" className="slider carousel slide" data-bs-ride="false" data-interval="false" >
              <div className="carousel-inner primary">
                {images2.map((image, index) => (
                  <div key={index} className={`images-slider carousel-item ${index === 0 ? 'active' : ''}`}>
                    <img src={image} alt={`Image ${index}`} className="cover  CoverImg border-nav" />
                  </div>
                ))}
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#demo3" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#demo3" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
          <div id='f' className='col-lg-6'>
            <div className='p_1 img_set mt-2'>
              <div className='full-width-paragraph'>
                <div className='text-start'>
                  <p className='text-black pDesign' >
                    <h5 className='Header-1-1-1 pDesign' style={{fontWeight:"700"}}>2D Elevation</h5><br />

                  </p>
                  <p className='text-black pDesign' >
                    <strong>2D Elevation</strong>: 2D Elevation Design in Architecture in Elevation  is a cancial visual representation that provides in sights into a building's exterior appearance.
                  </p>

                  <strong className='Header-1-1-1 pDesign'>Here's comprehensive guide to Understanding and explaining 20 Elevation Design:</strong><br />
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong>  Detailed facade Visualization.
                  </p>
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong>  Heights and floor levels.
                  </p>
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong>  Materials Used (brick, stone, stucco , Racks etc).
                  </p>
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong>  Overall character and styler of the building.
                  </p>
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong>  Details of Decorative Elements.
                  </p>
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong>  Highlight material and patterns.
                  </p>
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong>  Reading Contractore notes.
                  </p>

                </div>
              </div>
            </div>
          </div>
          { /*  STRUCTURE DRAWING */}
          <div id='g' className='col-lg-6 mt-3'>
            <div className='p_1 img_set '>
              <div className='full-width-paragraph'>
                <div className='text-start'>
                  <p className='text-black pDesign' style={{ margin: "0px" }}>
                    <h5 className='Header-1-1-1 pDesign' style={{fontWeight:"700"}} >STRUCTURE DRAWING</h5><br />
                  </p>
                  <p className='text-black pDesign'>
                    <strong>Drawing</strong>:Structure drawing is a funcdamental component of the architectural design process, structure Drawings are critical components of Construction documents, detailing the engineeered aspects of a bulidings Projects.
                  </p>
                  <a className="Cursor" href="#"><span style={{color:"black",fontWeight:"700"}}>Purpose and Significance : </span></a><br></br>
                  <a className="Cursor" href="#"><span style={{color:"#505050",fontWeight:"600"}}>Representation : </span></a> <a className="Cursor" href="#"><strong style={{color:"black"}}>Structure drawings visually communicate how a building's structural components come together, they details the arrangements, sizes and connection of critical elements.</strong></a><br></br><br></br>
                  <a className="Cursor" href="#"><span style={{color:"#505050",fontWeight:"600"}}>Technical documentation : </span></a><a className="Cursor" href="#"><strong style={{color:"black"}}>These drawings provide essential information for construction ensuring the buildings stability, safety and assurance to engineering principles.</strong></a><br></br><br></br>
                  <a className="Cursor" href="#"><span style={{color:"black",fontWeight:"600"}}>Here's are detailed of Structure Drawing: </span></a>
                  <div className='row'>
                    <div className='col-sm-4'>
                      <p className='text-black pDesign' style={{ margin: "2px" }}>
                        <strong>*</strong>  Foundation plan.
                      </p>
                      <p className='text-black pDesign' style={{ margin: "2px" }}>
                        <strong>*</strong>  Roof framing plants.
                      </p>
                      <p className='text-black pDesign' style={{ margin: "2px" }}>
                        <strong>*</strong>  Construction joints.
                      </p>

                      <p className='text-black pDesign' style={{ margin: "2px" }}>
                        <strong>*</strong>  Floor Drawing.
                      </p>
                      <p className='text-black pDesign' style={{ margin: "2px" }}>
                        <strong>*</strong> Structural Grids.
                      </p>
                    </div>
                    <div className='col-sm-4'>

                      <p className='text-black pDesign' style={{ margin: "2px" }}>
                        <strong>*</strong>  Reinforcement Details.
                      </p>
                      <p className='text-black pDesign' style={{ margin: "2px" }}>
                        <strong>*</strong> Material specification.
                      </p>
                      <p className='text-black pDesign' style={{ margin: "2px" }}>
                        <strong>*</strong> Steal framing paln.
                      </p>

                      <p className='text-black pDesign' style={{ margin: "2px" }}>
                        <strong>*</strong>  Load - Bearing walls.
                      </p>
                      <p className='text-black pDesign' style={{ margin: "2px" }}>
                        <strong>*</strong>  Seismic & Staircase.
                      </p>
                    </div>
                    <div className='col-sm-4'>
                      <p className='text-black pDesign ' style={{ margin: "2px" }}>
                        <strong>*</strong> Elevation shafts.
                      </p>
                      <p className='text-black pDesign' style={{ margin: "2px" }}>
                        <strong>*</strong> Detailing & schedules.
                      </p>
                      <p className='text-black pDesign' style={{ margin: "2px" }}>
                        <strong>*</strong> wind Consideration.
                      </p>
                      <p className='text-black pDesign' style={{ margin: "2px" }}>
                        <strong>*</strong> Column & Beam details.
                      </p>
                      <p className='text-black pDesign' style={{ margin: "2px" }}>
                        <strong>*</strong> Pre-engineer Component.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id='h' className="col-lg-6 d-flex justify-content-center mt-5" >
            <div id="demo4" className="slider carousel slide" data-bs-ride="false" data-interval="false" >


              <div className="carousel-inner primary">
                {images3.map((image, index) => (
                  <div key={index} className={`images-slider carousel-item ${index === 0 ? 'active' : ''}`}>
                    <img src={image} alt={`Image ${index}`} className="cover  CoverImg border-nav" />
                  </div>
                ))}
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#demo4" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#demo4" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
          { /*  Interior Design */}

           <div id='i' className="col-lg-6 d-flex justify-content-center" >
            <div id="demo1" className="slider carousel slide" data-bs-ride="false" data-interval="false" >

              <div className="carousel-inner primary">
                {images4.map((image, index) => (
                  <div key={index} className={`images-slider carousel-item ${index === 0 ? 'active' : ''}`}>
                    <img src={image} alt={`Image ${index}`} className="cover  CoverImg border-nav" />
                  </div>
                ))}
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#demo1" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#demo1" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
          <div id="j" className='col-lg-6'>
            <div className='p_1 img_set mt-2'>
              <div className='full-width-paragraph'>
                <div className='text-start'>
                  <p className='text-black pDesign' style={{ margin: "0px" }}>
                    <h5 className='Header-1-1-1 pDesign' style={{fontWeight:"700"}}>INTERIOR Design:-</h5><br />
                    
                  </p>
                  <p className='text-black pDesign'>
                    <strong>Interior</strong>: House Interior Design is the art and science of enhancing the interior a residential structure to create spaces a more of aesthetically pleasing and fuctional environment.Interior design involves the thoughtfull and selection of furniture, colour  schemes, decorations, lighting, and other elements to achieve a cohesive and harmonious living space..
                  </p>

                  <p className='text-black pDesign text-start' style={{ margin: "2px" }}>
                    <strong></strong> Designers consider both the practical and aesthetic aspects of a home , aiming to optimize  the use of use while reflecting the homeowner's style and preferences. The goal is to create style and an interior that not only looks appealing but also meets the needs and enhances the quality of life for those living in the house..
                  </p>

                </div>
              </div>
            </div>
          </div> 

          {/* Video You TUbe */}
          
          <div id='k' className="col-lg-6 mt-3 d-flex justify-content-center border-nav p-1" >
            <iframe 
              title="You Tube Video"
              src="./Slider.mp4"
              width="100%"
              height="445"
              style={{ borderRadius: "5px" }}
              allowFullScreen=""
              loading="lazy"
              autoPlay
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          
          </div>
          <div id='l' className='col-lg-6 p-2'>
            <div className='p_1 img_set'>
              <div className='full-width-paragraph'>
                <div className='text-start'>
                  <p className='text-black pDesign' >
                    <h5 className='Header-1-1-1 pDesign' style={{fontWeight:"700"}}>WALK-THROUGH</h5><br />

                  </p>
                  <p className='text-black pDesign' >
                    <strong>Walk Through</strong>: An Interactive 3D walkthrough home tour allows  to virtually glide from room to room using technology. The walk-through video is usually the most
                    used to visualize the Exterior and  Interior of the House and other building projects.
                    We provide the realitic view you can explore every nook and cranny, measure dimensions, and experience the space as if you were there in pecans..
                  </p>

                  <strong className='Header-1-1-1 pDesign'>Here are the key components of a Floor Plan:</strong><br />
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong>  Room layout.
                  </p>
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong>  Dimensions and Scales.
                  </p>
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong>  Traffic flow and Circulation.
                  </p>
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong>  Vastu Oriented.(Depend on clients)
                  </p>
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong>  Windows and Doors!.
                  </p>
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong>  Furniture Placement.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>

          { /*  3D FLOOR PLAN */}
          
          <div id='m' className='col-lg-6 mt-3 py-4'>
            <div className='p_1 img_set mt-2'>
              <div className='full-width-paragraph'>
                <div className='text-start'>
                  <p className='text-black pDesign' >
                    <h5 className='Header-1-1-1 pDesign' style={{fontWeight:"700"}}>3D FLOORPLAN</h5><br />

                  </p>
                  <p className='text-black pDesign' >
                    <strong>3D Floor-plan</strong>: A 3D floorplan is an image that shows the structure (wall, doors, widows) and layout. (fixtures, fittings, furniture) of a building, Property, office, or home in the three dimensions.
                  </p>

                  <strong className='Header-1-1-1 pDesign'> Here are some key points in 3D floorplans:</strong><br />
                  <p  className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong>  Visual Representation.
                  </p>
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong>  Depth and Perspective.
                  </p>
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong>  Color and texture.
                  </p>
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong>  Design Decisions.
                  </p>
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong>  Client Presentations..
                  </p>
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong>  Realistic Renders.
                  </p>
                  <p className='text-black pDesign' style={{ margin: "2px" }}>
                    <strong>*</strong>  Suggestions for Interior Design.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id='n' className="col-lg-6 d-flex justify-content-center mt-5" >
            <div id="demo6" className="slider carousel slide" data-bs-ride="false" data-interval="false" >

              <div className="carousel-inner primary">
                {images6.map((image, index) => (
                  <div key={index} className={`images-slider carousel-item ${index === 0 ? 'active' : ''}`}>
                    <img src={image} alt={`Image ${index}`} className="cover  CoverImg border-nav" />
                  </div>
                ))}
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#demo6" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#demo6" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
          { /*  Landscape */}
          <div id='o' className="col-lg-6 d-flex justify-content-center mt-5" >
            <div id="demo5" className="slider carousel slide" data-bs-ride="false" data-interval="false" >


              <div className="carousel-inner primary">
                {images5.map((image, index) => (
                  <div key={index} className={`images-slider carousel-item ${index === 0 ? 'active' : ''}`}>
                    <img src={image} alt={`Image ${index}`} className="cover  CoverImg border-nav" />
                  </div>
                ))}
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#demo5" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#demo5" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
          <div id='p' className='col-lg-6  py-4'>
            <div className='p_1 img_set'>
              <div className='full-width-paragraph'>
                <div className='text-start'>
                  <p className='text-black pDesign' >
                    <h5 className='Header-1-1-1 pDesign' style={{fontWeight:"700"}}>LANDSCAPE</h5><br />
                  </p>
                  <p className='text-black pDesign' >
                    <strong>Landscape</strong>: A landscape encompasses the visible features of the land, including its landforms and how they integrate with natural or human-made elements.
                  </p>

                  <strong className='Header-1-1-1 pDesign'>Here's are detailed of Lnadscape:</strong><br />
                  <div className='row'>
                  <div className='col-sm-6'>
                    <p className='text-black pDesign' style={{ margin: "2px" }}>
                      <strong>*</strong>  Hardscape.
                    </p>
                    <p className='text-black pDesign' style={{ margin: "2px" }}>
                      <strong>*</strong>  Soft scape.
                    </p>
                    <p className='text-black pDesign' style={{ margin: "2px" }}>
                      <strong>*</strong>  Vertical Garden.
                    </p>

                    <p className='text-black pDesign' style={{ margin: "2px" }}>
                      <strong>*</strong>  Aquate Ponds.
                    </p>

                    <p className='text-black pDesign ' style={{ margin: "2px" }}>
                      <strong>*</strong> Landscape Maintenance.
                    </p>
                    <p className='text-black pDesign' style={{ margin: "2px" }}>
                      <strong>*</strong> Water Bodies.
                    </p>
                  </div>
                  <div className='col-sm-6'>
                    <p className='text-black pDesign' style={{ margin: "2px" }}>
                      <strong>*</strong> Terrace Garden.
                    </p>
                    <p className='text-black pDesign' style={{ margin: "2px" }}>
                      <strong>*</strong>  Balcony Garden.
                    </p>
                    <p className='text-black pDesign' style={{ margin: "2px" }}>
                      <strong>*</strong> Landscape for irrigation.
                    </p>
                    <p className='text-black pDesign' style={{ margin: "2px" }}>
                      <strong>*</strong> Landscape lighting.
                    </p>
                    <p className='text-black pDesign' style={{ margin: "2px" }}>
                      <strong>*</strong> Structures: (Building & bridges).
                    </p>

                    <p className='text-black pDesign' style={{ margin: "2px" }}>
                      <strong>*</strong> Climate and Weather.
                    </p>

                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Service; 
