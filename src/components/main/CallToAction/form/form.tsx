import React, {useEffect, useState} from 'react';
import axios from 'axios';

function NewsletterSubscription() {
    const [email, setEmail] = useState<string>('');
    const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const subscriptionStatus = localStorage.getItem('isSubscribed');
        if (subscriptionStatus === 'true') {
            setIsSubscribed(true);
        }
    }, []);

    const handleSubscribe = async () => {
        try {
            await axios.post('http://localhost:8080/email', {
                email: email,
            });
            setIsSubscribed(true);
            localStorage.setItem('isSubscribed', 'true');
        } catch (err) {
            setError('There was an error subscribing. Please submit the form again.');
        }
    };

    return (
        <div>
            {isSubscribed ? (
                <p className='call-to-action__result'>You are already subscribed to the bank's newsletter.</p>
            ) : (
                <div className="call-to-action__form">
                    <div className="form__input">
                        <i className="bi bi-envelope-fill"></i>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Your email"
                               required/>
                    </div>
                    <button className="form__button" onClick={handleSubscribe}><i
                        className="bi bi-send-fill"></i> Subscribe
                    </button>
                </div>
            )}
            {error && <p>{error}</p>}
        </div>
    );
};

export default NewsletterSubscription;