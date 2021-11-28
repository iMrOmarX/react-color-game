import React from 'react'
import "./stripe.css"
function Stripe() {
    return (
        <div>
            <button id="reset">New Colors</button>
            <span id="message"></span>
            <button id="easyBtn">Easy</button>
            <button class="selected" id="hardBtn">Hard</button>
        </div>
    )
}

export default Stripe
