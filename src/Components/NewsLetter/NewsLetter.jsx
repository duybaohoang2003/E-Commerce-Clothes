import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
    return (
        <div className='newsLetter'>
            <h1>Get Exclusive Ofeers On Your Email</h1>
            <p>Subscribe to our newletter andstay updated</p>
            <div>
                <input type="emal"  placeholder='Your Email '/>
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter
