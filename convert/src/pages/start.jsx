import React from 'react';
import './start.css';
const Start = () => {
    return (
        <div>
            <div className="main">
                <p className="welcom"><span>WELCOME TO    </span>   MEMODASH</p>
                <p className="par">Discover Memo Dash: where brevity meets brilliance. Dive into a world of concise yet compelling content.</p>
                <p>Join us on a journey of discovery, one short post at a time. Welcome to a place where every word matters</p>
                <a href="Login">
                    <button className="start">Get Start</button>
                </a>
            </div>
        </div>
    );
}

export default Start;
