import React from 'react';
import './home.css';
import './about.css'
const Contact = () => {
    return (
        <div>
            <header>
                <nav>
                    <a href="#" className="logo"><span>MEMO</span> DASH</a>
                    <ul className="links">
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About-us</a></li>
                        <li className="active"><a href="/contact">Contact</a></li>
                    </ul>
                    <div className="social-links">
                        {/* Add proper Font Awesome icons or use React Icons */}
                        <a href="#"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                </nav>
            </header>
            <div className="contact-details">
                <h1>Contact Us</h1>
                <p>If you have any questions or inquiries, feel free to reach out to us at:</p>
                <ul>
                    <li>Email: info@memodash.com</li>
                    <li>Phone: +1 (123) 456-7890</li>
                    <li>Address: 123 Main Street, City, Country</li>
                </ul>
            </div>
        </div>
    );
}

export default Contact;
