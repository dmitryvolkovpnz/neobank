import React from 'react';

function Second() {
    return (
        <div className="second">
            <div className="container">
                <div className="second__content rubik">
                    <img className="second__content__img" src="img/img.png" alt=""/>
                    <div className="second-section">
                        <div className="second-section__title">We Provide Many Features You Can Use</div>
                        <div className="second-section__subtitle">You can explore the features that we provide with fun
                            and have their own functions each feature
                        </div>
                        <ul>
                            <li><i className="bi bi-check-circle-fill"></i> Powerfull online protection.</li>
                            <li><i className="bi bi-check-circle-fill"></i> Cashback without borders.</li>
                            <li><i className="bi bi-check-circle-fill"></i> Personal design</li>
                            <li><i className="bi bi-check-circle-fill"></i> Work anywhere in the world</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Second;