import React, { useState } from 'react';
import "./Contact.css";
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import CallSharpIcon from '@mui/icons-material/CallSharp';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import emailjs from '@emailjs/browser';
function Contact() { 
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });

    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: 'pending', message: 'Sending message...' });

        try {
            await emailjs.send(
                'service_wkgg10j',
                'template_w8sm5iw',
                {
                    from_name: `${formState.firstName} ${formState.lastName}`,
                    from_email: formState.email,
                    phone: formState.phone,
                    message: formState.message,
                },
                'xBZRTmbCbg6CdZdvW'
            );
            setStatus({ type: 'success', message: 'Message sent! We will get back to you soon.' });
            setFormState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
        } catch (error) {
            console.error('Email send error', error);
            setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
        }
    };
  return (
    <>
    
  <div id='contact-us' className='row bg-opacity-100'>
      <section className='col-12 sectionColor' id="section-wrapper">
        <div className="box-hint px-1">
            <div className="info-wrap">
                <h1 className="info-title text-white">Contact Information</h1>
                <h3 className="info-sub-title">Fill up the form and our Team will<br/> get back to you within 24 hours</h3>
                <ul className="info-details">
                    <li>
                    <CallSharpIcon style={{backgroundColor: "#F2AF07",color: "#FFFFFF",marginRight: "10px", width:"40px", height:"37px", padding:"6px",borderRadius:"50%"}} />
                        <span className='ms-1' style={{fontWeight:"400", fontFamily:"san-serif", color:"white"}}>Mobile:</span> <a className='ms-5' href="tel:+ 1235 2355 98">+919009700155</a>
                    </li>
                    <li >
                    <MailOutlineSharpIcon style={{backgroundColor: "#F2AF07",color: "#FFFFFF",marginRight: "14px", width:"40px", height:"37px", padding:"6px",borderRadius:"50%"}} />

                        <span className='' style={{fontWeight:"400", fontFamily:"san-serif", color:"white"}} >Email:</span> <a style={{marginLeft:"55px"}} className='mar' href="mailto:info@yoursite.com">royalhousemakers@gmail.com</a>
                    </li>
                    <li>
                    <LanguageSharpIcon style={{backgroundColor: "#F2AF07",color: "#FFFFFF",marginRight: "8px", width:"40px", height:"37px", padding:"6px",borderRadius:"50%"}} />

                        <span className='ms-1' style={{fontWeight:"400", fontFamily:"san-serif", color:"white"}}>Website:</span> <a style={{marginLeft:"50px"}} className='mar' href="#">https://royalhousemakers.com/</a>
                    </li>
                </ul>
                <ul className="social-icons d-flex justify-content-center ">
                    <li className='List_1'><a href="#"><FacebookSharpIcon style={{backgroundColor: "#F2AF07",color: "#FFFFFF",marginRight: "5px", width:"40px", height:"37px", padding:"6px",borderRadius:"50%"}} /></a></li>
                    <li className='List_2'><a href="#"><SendSharpIcon style={{backgroundColor: "#F2AF07",color: "#FFFFFF",marginRight: "5px", width:"40px", height:"37px", padding:"6px",borderRadius:"50%"}} /></a></li>
                    <li className='List_2'><a href="#"><CallSharpIcon style={{backgroundColor: "#F2AF07",color: "#FFFFFF",marginRight: "5px", width:"40px", height:"37px", padding:"6px",borderRadius:"50%"}} /></a></li>
                </ul>
            </div>
            <div className="form-wrap">
                
                                <form onSubmit={handleSubmit}>
                    <h1 className="form-title">Send us a message</h1>
                    <div className="form-fields">
                        <div className="form-group">
                                                        <input
                                                            type="text"
                                                            name="firstName"
                                                            value={formState.firstName}
                                                            onChange={handleChange}
                                                            className="fname input-field"
                                                            placeholder="First Name"
                                                            required
                                                        />
                        </div>
                        <div className="form-group">
                                                        <input
                                                            type="text"
                                                            name="lastName"
                                                            value={formState.lastName}
                                                            onChange={handleChange}
                                                            className="lname input-field"
                                                            placeholder="Last Name"
                                                            required
                                                        />
                        </div>
                        <div className="form-group">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            value={formState.email}
                                                            onChange={handleChange}
                                                            className="email input-field"
                                                            placeholder="Email"
                                                            required
                                                        />
                        </div>
                        <div className="form-group">
                                                        <input
                                                            type="tel"
                                                            name="phone"
                                                            value={formState.phone}
                                                            onChange={handleChange}
                                                            className="phone input-field"
                                                            placeholder="Mobile"
                                                            required
                                                        />
                        </div>
                        <div className="form-group">
                                                        <textarea
                                                            name="message"
                                                            value={formState.message}
                                                            onChange={handleChange}
                                                            placeholder="Message"
                                                            className=""
                                                            required
                                                        />
                        </div>
                    </div>
                    <input type="submit" value="Send Message" className="submit-button"/>
                                        {status.message && (
                                            <p className={`contact-status ${status.type}`}>{status.message}</p>
                                        )}
                </form>
            </div>
        </div>
    </section>
    </div>
    <div id='hii' className='map-design pt-5 px-xl-5 px-sm-2'>
        
        <iframe  
            title="Google Map" 
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3681.2033647703797!2d75.8641111!3d22.6834722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQxJzAwLjUiTiA3NcKwNTEnNTAuOCJF!5e0!3m2!1sen!2sin!4v1720087040914!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{borderRadius:"6px", fontSize:"20px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
         </div>
    </>
  );
}

export default Contact;
