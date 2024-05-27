"use client" 

import './index.css';

import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import CallSharpIcon from '@mui/icons-material/CallSharp';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import InstagramIcon from '@mui/icons-material/Instagram';
function Footer() {

    
    return (   
        <>
        {/* <div className="css-12ji5ln css-1xo4n4x-separatorInView">
            <div className="css-109hxpk"></div>
            <div className="css-19fmy24"></div>
            <div className="css-1n0ydlz"></div>
            <div className="css-txxjky"></div>
        </div> */}
        
           <footer id='about-us' className="footer-section px-3 border-r">
            <div className="pt-5">
                <div className="footer-cta pt-3 pb-3">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 mt-1">
                            <div className="single-cta d-flex justify-content-start">
                            <a className="Icons" href="#">
                            <HomeSharpIcon style={{backgroundColor: "#F2AF07",color: "#FFFFFF",marginRight: "10px", width:"40px", height:"37px", padding:"6px",borderRadius:"50%", marginBottom:"188px"}} />
                                </a>
                                <div className="cta-text ms-5">
                                    <h2 className="text-start" style={{fontFamily:"lato",fontWeight:"400", color:"white"}}>Find us</h2>
                                    <a className="Icons" href="https://wa.link/pfwjp2"><p className="text-start" style={{color:"white", fontSize:"18px",fontFamily:"san-serif"}}>6A, Shivampuri Colony Bholaram,<br/> Ustad Marg, Bhawarkua, Madhya Pradesh Indore, 452001</p> </a>
                                   

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mt-1">
                            <div className="single-cta">
                            <a className="Icons" href="tel:+9009700155">
                            <CallSharpIcon style={{backgroundColor: "#F2AF07",color: "#FFFFFF",marginRight: "10px", width:"40px", height:"37px", padding:"6px",borderRadius:"50%", marginBottom:"56px"}} />
                            </a>
                                 <div className="cta-text ms-5">
                                 <h3 className="text-start" style={{fontFamily:"lato",fontWeight:"400", color:"white",marginTop:"1px"}}>Call us</h3>
                                    {/* <h4 className="text-start">Call us</h4> */}
                                    <a className="Icons" href="tel:+9009700155"><span style={{color:"white",fontSize:"19px",fontFamily:"san-serif"}} className="text-start">9009700155</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mt-xm-2 mt-xl-3">
                            <div className="single-cta">
                            <a className="Icons" href="mailto:kapil2601patel@gmail.com">
                            <SendSharpIcon style={{backgroundColor: "#F2AF07",color: "#FFFFFF",marginRight: "53px", width:"40px", height:"37px", padding:"6px",borderRadius:"50%",marginBottom:"46px"}} />
                            </a>
                                <div className="cta-text ms-2">
                                    <h4 className="text-start">Mail:</h4>
                                    <a className="Icons" href="mailto:royalhousemakers@gmail.com"><span style={{color:"white", fontSize:"18px", fontFamily:"san-serif"}} className="text-start">royalhousemakers@gmail.com</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mt-2">
                            <div className="footer-social-icon single-cta" style={{display:"flex", marginLeft:"10px"}}>
                            <AddCircleOutlineSharpIcon style={{backgroundColor: "#F2AF07",color: "#FFFFFF",marginRight: "30px", width:"40px", height:"37px", padding:"6px",borderRadius:"50%"}} />
                                <span>Follow: </span>
                                <a className="Icons" href="https://www.facebook.com/profile.php?id=61558097433903"><FacebookSharpIcon style={{backgroundColor: "#F2AF07",color: "#FFFFFF", width:"40px", height:"37px", padding:"6px",borderRadius:"50%"}} /></a>
                                {/* <a className="Icons" href="#">                    <CallSharpIcon style={{backgroundColor: "#F2AF07",color: "#FFFFFF", width:"40px", height:"37px", padding:"6px",borderRadius:"50%"}} /></a> */}
                                {/* <a className="Icons" href="#"><SendSharpIcon style={{backgroundColor: "#F2AF07",color: "#FFFFFF", width:"40px", height:"37px", padding:"6px",borderRadius:"50%"}} /></a> */}
                                <a className="Icons" href="https://www.instagram.com/royalhousemakers/"><MailOutlineSharpIcon style={{backgroundColor: "#F2AF07",color: "#FFFFFF", width:"40px", height:"37px", padding:"6px",borderRadius:"50%"}} /></a>
                                <a className="Icons" href="https://www.instagram.com/royalhousemakers/"><InstagramIcon style={{backgroundColor: "#F2AF07",color: "#FFFFFF", width:"40px", height:"37px", padding:"6px",borderRadius:"50%"}} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-content">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 col-sm-12 d-flex justify-content-center">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    
                                        <img src="./777.png" className="img-fluid" alt="logo" />
                                        <p className="text-start" style={{color:"white", fontSize:"17px", fontFamily:"sans-serif"}}>Crafting Your Dream Home: Personalized Solutions from Royal House Maker .</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-3 mb-md-0">
                            <div className="footer-widget">
                                <div className="footer-widget-heading mt-4">
                                <h2 className="text-center" style={{fontFamily:"lato",fontWeight:"400", color:"white"}}>Useful Links</h2>
                                    
                                    {/* <h3 className="text-center">Useful Links</h3> */}
                                </div>     
                                
                                <ul className="color_footer">
                                <li className=''><a href="#">Home</a></li>
                                    <li style={{color:"white",fontFamily:"lato"}}><a href="#">About</a></li>
                                    <li style={{color:"white"}}> <a href="#">Services</a></li>
                                    <li style={{color:"white"}}><a href="#">Whatsup</a></li>
                                    <li style={{color:"white"}}>  <a href="#">Contact</a></li>
                                    <li style={{color:"white"}}><a href="#">Expert Team </a></li>
                                </ul>
                               
                            </div> 
                        </div>
                        <div className= "col-md-6 col-lg-4 mt-4 ps-3">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                <h2 className="text-center" style={{fontFamily:"lato",fontWeight:"400", color:"white"}}>Subscribe</h2>

                                    {/* <h3 className="text-center">Subscribe</h3> */}
                                </div>
                                <div className="mb-3">
                                    <a className="Cursor" href="#"><p style={{color:"white"}}>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p></a>
                                </div>
                                <div className="subscribe-form">
                                    <form action="#">
                                        <input style={{color:"white"}} type="text" placeholder="Your Email Address" />
                                        <button className=''><i className="fab fa-email-plane"></i>Subscribe</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyrig ht-area">
                <div className="">
                    <div className="row" style={{ padding: '10px 0px' }}>
                        <div className="col-12 text-center">
                            <div className="copyright-text">
                                <p style={{fontSize:"18px"}}>Copyright &copy; 2024, All Right Reserved <a href="#">Royal House Makers</a></p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;