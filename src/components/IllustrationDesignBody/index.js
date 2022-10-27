import React from "react";
import "./IllustrationDesignBody.scss";
import {FaChevronCircleRight,FaPhoneAlt} from "react-icons/fa";
import {FiMail} from "react-icons/fi";
import {AiFillPlusSquare} from "react-icons/ai";
import {BiCopyright} from "react-icons/bi";
// import {HiOutlineGlobeAsiaAustralia} from "react-icons/hi";

function IllustrationDesignBody(){
    return(
        <div className="body">
            <div className="header-con">
                <div className="header-row-left">
                    <h1 className="header-heading">Illustration Design</h1>
                    <hr className="line"/>
                    <p className="header-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <button className="header-btn">Get started <FaChevronCircleRight/></button>
                </div>
                <div className="header-row-right">
                    <img id="tilt" className="header-image" alt="headerImage" src="https://mobirise.com/extensions/toolm5/illustration-design/assets/images/features3.jpg"/>
                </div>
            </div>
            <div className="cards-container">
                    <div className="cards-left-con">
                        <h1 className="cards-left-heading">Professional Illustration Design</h1>
                        <img className="cards-image" alt="cardsImage" src="https://mobirise.com/extensions/toolm5/illustration-design/assets/images/features2.jpg"/>
                        <hr className="line"/>
                        <div className="cards-left-bottom-con">
                            <div className="cards-left-bottom-left">
                                <button className="cards-left-bottom-left-btn1">Design</button>
                                <button className="cards-left-bottom-left-btn2">Photoshop</button>
                            </div>
                            {/* <div> */}
                            <button className="cards-left-bottom-right-btn">Get started</button>
                            {/* </div> */}
                        </div>    
                    </div>
                    <div className="cards-right-con">
                        <div className="cards-right-top-con">
                            <p className="cards-right-top-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button className="cards-left-bottom-left-btn2">Read more</button>
                        </div>
                        <div className="cards-right-bottom-con">
                            <p className="cards-right-top-para">Nullam consectetur dolor vel ex ullamcorper, non viverra neque aliquet. Vivamus sed nulla rhoncus.</p>
                        </div>
                    </div>
            </div>
            <div className="aboutus-container">
                <h1 className="aboutus-heading">About Us</h1>
                <hr/>
                <p className="aboutus-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus mi est, vel mattis enim malesuada at. Suspendisse potenti. Mauris eu leo nulla. Quisque eget dolor accumsan, blandit orci sit amet, pellentesque purus. Mauris a orci ante. Duis dictum aliquam commodo. Maecenas commodo dolor lorem.</p>
            </div>
            <div className="features-container">
                <h1 className="features-heading">Our features</h1>
                <div className="features-main-container">
                    <div id="tilt" className="features-card-container features-card-container1" >
                        <p className="features-card-para1">Professional Tools Kit</p>
                        <h2 className="features-card-heading">Illustration Design</h2>
                        <img className="features-card-image" alt="cardImage" src=	"https://mobirise.com/extensions/toolm5/illustration-design/assets/images/features1.jpg"/>
                        <div className="features-card-bottom-con">
                            <button className="features-card-btn">Get started<FaChevronCircleRight/></button>
                            <p className="features-card-para2">12$</p>
                        </div>
                    </div>
                    <div id="tilt" className="features-card-container features-card-container2" >
                        <p className="features-card-para1">Professional Tools Kit</p>
                        <h2 className="features-card-heading">Digital Art</h2>
                        <img className="features-card-image" alt="cardImage" src="https://mobirise.com/extensions/toolm5/illustration-design/assets/images/features2.jpg"/>
                        <div className="features-card-bottom-con">
                            <button className="features-card-btn">Get started<FaChevronCircleRight/></button>
                            <p className="features-card-para2">18$</p>
                        </div>
                    </div>
                    <div id="tilt" className="features-card-container features-card-container3" >
                        <p className="features-card-para1">Professional Tools Kit</p>
                        <h2 className="features-card-heading">Print Design</h2>
                        <img className="features-card-image" alt="cardImage" src="https://mobirise.com/extensions/toolm5/illustration-design/assets/images/features3.jpg"/>
                        <div className="features-card-bottom-con">
                            <button className="features-card-btn">Get started<FaChevronCircleRight/></button>
                            <p className="features-card-para2">14$</p>
                        </div>
                    </div>
                    </div>
            </div>
            <div class="our-skills-main-container">
                <div class="our-skills-container">
                    <h1 class="our-skills-caption">Our Skills</h1>
                    <p class="our-skills-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris felis, faucibus at tincidunt vel, ultrices vitae mauris. Pellentesque ante. Praesent posuere dignissim nibh in finibus. Nunc rutrum nibh pellentesque, viverra dolor quis, sollicitudin libero.
                    </p>
                </div>
                <div class="progress-container">
                            <div class="progress">
                                <div class="skills-progress-details-container">
                                    <h5 class="skills-progress-caption">Illustration Design</h5>
                                    <h5 class="skills-progress-caption">92%</h5>
                                </div>
                                <progress min="0" max="100" value="92" class="progress-bar" />
                            </div>
                            <div class="progress">
                                <div class="skills-progress-details-container">
                                    <h5 class="skills-progress-caption">Digital Art</h5>
                                    <h5 class="skills-progress-caption">71%</h5>
                                </div>
                                <progress min="0" max="100" value="71" class="progress-bar" />
                            </div>
                            <div class="progress">
                                <div class="skills-progress-details-container">
                                    <h5 class="skills-progress-caption">Print Design</h5>
                                    <h5 class="skills-progress-caption">53%</h5>
                                </div>
                                <progress min="0" max="100" value="53" class="progress-bar" />
                            </div>
                </div>
            </div>
            <div className="team-container">
                    <h1 className="team-heading">Our team</h1>
                    <p className="team-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="team-main-container">
                        <div id="tilt" className=" team-card-container">
                            <img className="team-card-image" alt="cardImage" src="https://mobirise.com/extensions/toolm5/illustration-design/assets/images/team1.jpg"/>
                            <div className="team-card-bottom-con">
                                <h1 className="team-card-heading">Jessica Swift</h1>
                                <p className="team-card-para">Manager</p>
                                <p className="team-card-para">Lorem ipsum dolor sit amet, consectet adipiscing elit.</p>
                                <button className="team-card-btn">View Profile<FaChevronCircleRight/></button>
                            </div>
                        </div>
                        <div id="tilt" className=" team-card-container">
                            <img className="team-card-image" alt="cardImage" src="https://mobirise.com/extensions/toolm5/illustration-design/assets/images/team2.jpg"/>
                            <div className="team-card-bottom-con">
                                <h1 className="team-card-heading">Ben Palmer</h1>
                                <p className="team-card-para">Designer</p>
                                <p className="team-card-para">Lorem ipsum dolor sit amet, consectet adipiscing elit.</p>
                                <button className="team-card-btn">View Profile<FaChevronCircleRight/></button>
                            </div>
                        </div>
                        <div id="tilt" className=" team-card-container">
                            <img className="team-card-image" alt="cardImage" src="https://mobirise.com/extensions/toolm5/illustration-design/assets/images/team3.jpg"/>
                            <div className="team-card-bottom-con">
                                <h1 className="team-card-heading">Adam Brown</h1>
                                <p className="team-card-para">Developer</p>
                                <p className="team-card-para">Lorem ipsum dolor sit amet, consectet adipiscing elit.</p>
                                <button className="team-card-btn">View Profile<FaChevronCircleRight/></button>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="image-container">
                <div className="image-inside-con">
                    <img className="image-card-image" alt="cardImage" src="https://mobirise.com/extensions/toolm5/illustration-design/assets/images/features4.jpg"/>
                    <hr className="line"/>
                    <div className="image-inside-bottom-con">
                        <div className="image-inside-bottom-btn-con">
                            <button className="image-card-btn">Photoshop</button>
                            <button className="image-card-btn">Illustrator</button>
                            <button className="image-card-btn">InDesign</button>
                        </div>
                        <div className="image-card-bottom-btn">
                            <button className="image-card-btn image-card-btn1">Get started<AiFillPlusSquare/></button>
                        </div>   
                    </div>    
                </div>
            </div>  
            <div className="partner-container">
                <div id="tilt" className="partner-card-container">
                    <img className="partner-card-image" alt="cardImage" src="https://mobirise.com/extensions/toolm5/illustration-design/assets/images/1.png"/>
                    <h1 className="partner-card-heading">Our Partner</h1>                
                    <p className="partner-card-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla suscipit.</p>
                    <button className="partner-card-btn">Learn more</button>
                </div>
                <div id="tilt" className="partner-card-container">
                    <img className="partner-card-image" alt="cardImage" src="https://mobirise.com/extensions/toolm5/illustration-design/assets/images/2.png"/>
                    <h1 className="partner-card-heading">Our Partner</h1>                   
                    <p className="partner-card-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla suscipit.</p>
                    <button className="partner-card-btn">Learn more</button>
                </div>
                <div id="tilt" className="partner-card-container">
                    <img className="partner-card-image" alt="cardImage" src="https://mobirise.com/extensions/toolm5/illustration-design/assets/images/3.png"/>
                    <h1 className="partner-card-heading">Our Partner</h1>
                    <p className="partner-card-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla suscipit.</p>
                    <button className="partner-card-btn">Learn more</button>
                </div>
            </div>   
            <div className="subscribe-main-con">
                <h1 className="subscribe-heading">Subscribe</h1>
                <form id="tilt" className="subscribe-container">
                    <input className="subscribe-input" type="text" placeholder="Name"/>
                    <input className="subscribe-input" type="text" placeholder="E-mail"/>
                    <button className="subscribe-btn" >Subscribe</button>
                </form>
            </div>
            <div className="contacts-container">
                <h1 className="contacts-heading">Contacts</h1>
                <p className="contacts-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="contacts-main-container">
                    <div id="tilt" className="contacts-card-container">          
                        {/* <p className="contacts-card-icon">{item.icon}</p> */}
                        <FaPhoneAlt className="contacts-icon"/>
                        <div className="contacts-card-side-con"> 
                            <h1 className="contacts-card-heading">Phone</h1>
                            <a href="/"  className="contacts-card-para">0 (800) 123 45 67</a>
                        </div>
                    </div>
                    <div id="tilt" className="contacts-card-container">          
                        {/* <p className="contacts-card-icon">{item.icon}</p> */}
                        <FiMail className="contacts-icon"/>
                        <div className="contacts-card-side-con"> 
                            <h1 className="contacts-card-heading">Email</h1>
                            <a href="/" className="contacts-card-para">info@site.com</a>
                        </div>
                    </div>
                    <div id="tilt" className="contacts-card-container">          
                        {/* <p className="contacts-card-icon">{item.icon}</p> */}
                        <FaPhoneAlt className="contacts-icon"/>
                        <div className="contacts-card-side-con"> 
                            <h1 className="contacts-card-heading">Address</h1>
                            <p className="contacts-card-para">4100 Ross Street, Okawville, IL</p>
                        </div>
                    </div>
                    <div id="tilt" className="contacts-card-container">          
                        {/* <p className="contacts-card-icon">{item.icon}</p> */}
                        <FaPhoneAlt className="contacts-icon"/>
                        <div className="contacts-card-side-con"> 
                            <h1 className="contacts-card-heading">Working Hours</h1>
                            <p className="contacts-card-para">9:00 - 18:00</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <iframe title="/" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d121807.94259956652!2d78.44003839999999!3d17.4358528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1666184877922!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="footer-container">
                <p className="footer-para"><BiCopyright/>Copyright 2025 Mobirise - All Rights Reserved</p>
            </div>
        </div>
    );     
}
export default IllustrationDesignBody;