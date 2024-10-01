import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Whether you're cheering in the stands or strolling through the city, this Bomber Jacket keeps
                    your vibe light and positive. Matte rubber-print graphics inspired by field-of-play lines add sporty details,
                    while the cool-touch cotton fabric feels soothing against your skin. Ready for warm weather, this Jacket reduces
                    exposure to harmful UV rays thanks to an Ultraviolet Protect Factor (UPF) design.
                </p>
                <p>
                    E-Commerce website typically display products or services along with detailed descriptions, images, prices and 
                    any avaiable variations (e.g, sizes, colors). Each product usually has its own dedicated page with relavant information.
                </p>
            </div>
        </div>
    )
}

export default DescriptionBox
