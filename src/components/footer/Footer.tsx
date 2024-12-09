import React from 'react';
import './footer.scss';

function Footer () {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="footer__content1">
                        <img src="img/logomain.svg" alt=""/>
                        <div className="contact">
                            <div className="contact__phone">+7 (495) 984 25 13</div>
                            <div className="contact__email">info@neoflex.ru</div>
                        </div>
                    </div>
                    <div className="footer__content2">
                        <div className="content2__item">About bank</div>
                        <div className="content2__item">Ask a Question</div>
                        <div className="content2__item">Quality of service</div>
                        <div className="content2__item">Requisites</div>
                        <div className="content2__item">Press center</div>
                        <div className="content2__item">Bank career</div>
                        <div className="content2__item">Investors</div>
                        <div className="content2__item">Analytics</div>
                        <div className="content2__item">Business and processes</div>
                    </div>
                    <div className="content2__item">Compliance and business ethics</div>
                    <hr/>
                    <div className="footer__content3">
                        We use cookies to personalize our services and improve the user experience of our website.
                        Cookies are small files containing information about previous visits to a website. If you do not
                        want to use cookies, please change your browser settings
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;