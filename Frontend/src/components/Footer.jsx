import React from "react";

export default function Footer() {
    return (
        <footer className="footer">
            {/* top part */}
            <div className="footer-top">
                {/* Brand */}
                <div className="footer-section">
                    <div className="footersectionbrand">
                    <img
                        src="header-logo-symbol.png"
                        alt="Brand logo"
                        className="footer-logo"
                    />
                    <h2>Brand</h2>
                    </div>
                   
                    <p className="brand-text">
                        Best information about the company<br />
                        goes here but now lorem ipsum is
                    </p>
                    <div className="social-icons">
                        <img src="social icons.png" alt="" />
                    </div>
                </div>
                {/* Link columns */}
                <div className="footer-section links">
                    <h4>About</h4>
                    <a href="#">About Us</a>
                    <a href="#">Find store</a>
                    <a href="#">Categories</a>
                    <a href="#">Blogs</a>
                </div>
                <div className="footer-section links">
                    <h4>Partnership</h4>
                    <a href="#">About Us</a>
                    <a href="#">Find store</a>
                    <a href="#">Categories</a>
                    <a href="#">Blogs</a>
                </div>
                <div className="footer-section links">
                    <h4>Information</h4>
                    <a href="#">Help Center</a>
                    <a href="#">Money Refund</a>
                    <a href="#">Shipping</a>
                    <a href="#">Contact us</a>
                </div>
                <div className="footer-section links">
                    <h4>For users</h4>
                    <a href="#">Login</a>
                    <a href="#">Register</a>
                    <a href="#">Settings</a>
                    <a href="#">My Orders</a>
                </div>
                {/* Get app */}
                <div className="footer-section get-app">
                    <h4>Get app</h4>
                    <img
                        src="app store.png"
                        alt="Download on the App Store"
                    />
                    <img
                        src="Google play.png"
                        alt="Get it on Google Play"
                    />
                </div>
            </div>
            {/* bottom bar */}
            <div className="footer-bottom">
                <span>© 2023 Ecommerce.</span>
                <span className="language">
                    <img
                        src="https://flagcdn.com/w20/us.png"
                        alt="US flag"
                        className="flag"
                    />
                    English ⌄
                </span>
            </div>
        </footer>
    );
}
