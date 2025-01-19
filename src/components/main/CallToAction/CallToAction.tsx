import React from 'react';
import './calltoaction.scss'
import NewsletterSubscription from './form/form';

function CallToAction() {
    return (
        <div className="call-to-action">
            <div className="container">
                <div className="call-to-action__title title_small">Support</div>
                <div className="call-to-action__title title_big">Subscribe Newsletter & get</div>
                <div className="call-to-action__subtitle">Bank News</div>
                <NewsletterSubscription />
            </div>
        </div>
    );
}

export default CallToAction;