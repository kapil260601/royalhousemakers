"use client" 

import './index.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import CallSharpIcon from '@mui/icons-material/CallSharp';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
function Footer() {
    return (
        <>
           <footer className="footer-section px-3">
            <div className="pt-5">
                <div className="footer-cta pt-3 pb-3">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 mt-2">
                            <div className="single-cta d-flex justify-content-start">
                            <HomeSharpIcon style={{backgroundColor: "#F95911",color: "#FFFFFF",borderRadius:" 30%",marginRight: "10px", width:"40px", height:"37px", padding:"6px",borderRadius:"50%", marginBottom:"188px"}} />
                                <div className="cta-text ms-5">
                                    <h4 className="text-start">Find us</h4>
                                    <a className="Cursor" href="#"><p className="text-start" style={{color:"#AB8282", fontSize:"18px"}}>6 A Shivampuri colony,<br /> Bholaram Ustadmarg,<br /> Indore, 452001</p> </a>
                                   

                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mt-2">
                            <div className="single-cta">
                            <CallSharpIcon style={{backgroundColor: "#F95911",color: "#FFFFFF",borderRadius:" 30%",marginRight: "10px", width:"40px", height:"37px", padding:"6px",borderRadius:"50%", marginBottom:"46px"}} />
                                 <div className="cta-text ms-5">
                                    <h4 className="text-start">Call us</h4>
                                    <a className="Cursor" href="#"><span style={{color:"#AB8282",fontSize:"18px"}} className="text-start">9009700155</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mt-2">
                            <div className="single-cta">
                            <MailOutlineSharpIcon style={{backgroundColor: "#F95911",color: "#FFFFFF",borderRadius:" 30%",marginRight: "53px", width:"40px", height:"37px", padding:"6px",borderRadius:"50%",marginBottom:"46px"}} />
                                <div className="cta-text ">
                                    <h4 className="text-start">Mail us</h4>
                                    <a className="Cursor" href="#"><span style={{color:"#AB8282", fontSize:"18px"}} className="text-start">royalhousemakers@gmail.com</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mt-2">
                            <div className="footer-social-icon single-cta" style={{display:"flex"}}>
                            <AddCircleOutlineSharpIcon style={{backgroundColor: "#F95911",color: "#FFFFFF",borderRadius:" 30%",marginRight: "0px", width:"40px", height:"37px", padding:"6px",borderRadius:"50%"}} />
                                <span>Follow: </span>
                                <a className="Icons" href="#"><FacebookSharpIcon style={{backgroundColor: "#F95911",color: "#FFFFFF",borderRadius:" 30%",marginRight: "10px", width:"40px", height:"37px", padding:"6px",borderRadius:"50%"}} /></a>
                                <a className="Icons" href="#">                    <CallSharpIcon style={{backgroundColor: "#F95911",color: "#FFFFFF",borderRadius:" 30%",marginRight: "10px", width:"40px", height:"37px", padding:"6px",borderRadius:"50%"}} /></a>
                                <a className="Icons" href="#"><SendSharpIcon style={{backgroundColor: "#F95911",color: "#FFFFFF",borderRadius:" 30%",marginRight: "10px", width:"40px", height:"37px", padding:"6px",borderRadius:"50%"}} /></a>
                                <a className="Icons" href="#">                    <MailOutlineSharpIcon style={{backgroundColor: "#F95911",color: "#FFFFFF",borderRadius:" 30%",marginRight: "10px", width:"40px", height:"37px", padding:"6px",borderRadius:"50%"}} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-content">
                    <div className="row">
                        <div className="col-md-6 col-lg-4 col-sm-12 d-flex justify-content-center">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    {/* <Link to="/"> */}
                                        <img src="./777.png" className="img-fluid" alt="logo" />
                                    {/* </Link> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-3 mb-md-0">
                            <div className="footer-widget">
                                <div className="footer-widget-heading mt-4">
                                    <h3 className="text-center">Useful Links</h3>
                                </div>
                                
                                <ul className="color_footer" style={{marginLeft:"65px"}}>
                                <li style={{color:"#AB8282"}}><a href="#">Home</a></li>
                                    <li style={{color:"#AB8282",}}><a href="#">About</a></li>
                                    <li style={{color:"#AB8282"}}> <a href="#">Services</a></li>
                                    <li style={{color:"#AB8282"}}><a href="#">Portfolio</a></li>
                                    <li style={{color:"#AB8282"}}>  <a href="#">Contact</a></li>
                                    <li style={{color:"#AB8282"}}><a href="#">Expert Team</a></li>
                                </ul>
                               
                            </div>
                        </div>
                        <div className= "col-md-6 col-lg-4">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3 className="text-center">Subscribe</h3>
                                </div>
                                <div className="mb-3">
                                    <a className="Cursor" href="#"><p style={{color:"#AB8282"}}>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p></a>
                                </div>
                                <div className="subscribe-form">
                                    <form action="#">
                                        <input style={{color:"white"}} type="text" placeholder="Email Address" />
                                        <button><i className="fab fa-email-plane"></i>Subscribe</button>
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