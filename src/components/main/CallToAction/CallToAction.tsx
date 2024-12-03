import React from 'react';
import './calltoaction.scss'

function CallToAction() {
    return (
        <div className="call-to-action">
            <div className="container">
                <div className="call-to-action__title__small">Support</div>
                <div className="call-to-action__title__big">Subscribe Newsletter & get</div>
                <div className="call-to-action__subtitle">Bank News</div>
                <form action="" className="call-to-action__form">
                    <div className="call-to-action__form__input">
                        <i className="bi bi-envelope-fill"></i>
                        <input type="text" placeholder="Your email"/>
                    </div>
                    <button className="call-to-action__form__button"><i className="bi bi-send-fill"></i> Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
}

export default CallToAction;