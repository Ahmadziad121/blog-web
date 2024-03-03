import React from 'react';
import './home.css'; 
import './about.css'

const About = () => {
    return (
        <div>
            <header>
                <nav>
                    <a href="#" className="logo"><span>MEMO</span> DASH</a>
                    <ul className="links">
                        <li><a href="/home">Home</a></li>
                        <li className="active"><a href="/about">About-us</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                    <div className="social-links">
                        {/* Add proper Font Awesome icons or use React Icons */}
                        <a href="#"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                    </div>
                </nav>
            </header>
         <div className="about-content">
                <h1> Memo Dash</h1>
                <p>Memo Dash is a platform for organizing your notes and tasks efficiently. It provides features for creating, editing, and deleting notes, as well as managing your tasks and to-do lists.</p>
                <p>With Memo Dash, you can stay organized and focused on your goals, whether it's for personal use or team collaboration.</p>
            </div>
        </div>
    );
}

export default About;
