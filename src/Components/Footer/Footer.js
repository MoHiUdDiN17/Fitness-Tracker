import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
        <div>
            <div id="Footer" className="bottom">
                <div className="footer flex flex-col lg:flex-row pt-28 mt-10">
                    <div className="footer_each">Contact Us</div>
                    <div className="footer_each">Terms of Service</div>
                    <div className="footer_each">Privacy Policy</div>
                    <div className="footer_each">Privacy Settings</div>
                    <div className="footer_each">Fitness App</div>
                    <div className="footer_each">Fitness Live</div>
                </div>
                <div className="footer flex">
                    <div className="footer_each">
                        <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a>
                    </div>
                    <div className="footer_each">
                        <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>
                    </div>
                    <div className="footer_each">
                        <a href="https://www.linkedin.com/"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;