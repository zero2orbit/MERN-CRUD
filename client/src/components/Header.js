import React from 'react'
import '../assets/css/style.css'
import logo from '../assets/img/logo-white.png'


export default function Header() {
    return (
        <header className="headerStyle">
            <div className="logo-box">
            <img src={logo} alt="LOGO" className="logo" />
            </div>

            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Outdoors</span>
                    <span className="heading-primary--sub"> is where life happens</span>
                </h1>

                <a href="#section-tours" className="btn btn--white btn--animated">Discover our tours</a>
            </div>
        </header>
    )
}


