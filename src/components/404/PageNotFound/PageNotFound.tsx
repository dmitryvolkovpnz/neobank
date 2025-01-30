import React from 'react';
import './pagenotfount.scss'
import {useNavigate} from "react-router-dom";

function PageNotFound() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/");
    }

    return (
        <div className="page-not-found">
            <div className='container'>
                <div className='page-not-found__main'>
                    <div className='page-not-found__content'>
                        <div className='page-not-found__title'>Oops....</div>
                        <div className='page-not-found__bottomtitle'>Page not found</div>
                        <div className='page-not-found__subtitle'>This Page doesn`t exist or was removed! We suggest you
                            go back.
                        </div>
                        <button className="page-not-found__button" onClick={() => goToHome()}>Go back</button>
                    </div>
                    <div className='page-not-found__img'>
                        <img src='./img/404picture.svg' alt='404' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageNotFound;