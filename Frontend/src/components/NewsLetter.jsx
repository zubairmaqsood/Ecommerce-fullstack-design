import React from 'react'

function NewsLetter() {
    return (
        <>
            <div className="newsletter-container">
                <h2>Subscribe on our newsletter</h2>
                <p>Get daily news on upcoming offers from many suppliers all over the world</p>
                <form className="newsletter-form">
                    <input type="email" placeholder="✉ Email" required/>
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </>
    )
}

export default NewsLetter
