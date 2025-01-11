import React from 'react'
import './aboutcart.scss'
import Accordion from './Accordion/Accordion';
import AboutCardItem from './AboutCardItem/AboutCardItem';
import Cashback from './CashBack/Cashback';
import RatesAndCondition from './RatesAndCondition/RatesAndCondition';

function AboutCart() {
  return (
    <div className='about-cart'>
      <div className='container'>
            <div className='match-outcome'>
                <ul className='tabs'>
                  <li className='tab'>
                    <input className='switcher' type="radio" id="tab-1" name="tabs" defaultChecked />
                    <label htmlFor="tab-1">About card</label>
                    <div className="tab-content">
                      <AboutCardItem />
                    </div>
                  </li>

                  <li className='tab'>
                    <input className='switcher' type="radio" id="tab-2" name="tabs" />
                    <label htmlFor="tab-2">Rates and conditions</label>
                    <div className="tab-content">
                      <RatesAndCondition />
                    </div>
                  </li>

                  <li className='tab'>
                    <input className='switcher' type="radio" id="tab-3" name="tabs" />
                    <label htmlFor="tab-3">Cashback</label>
                    <div className="tab-content">
                      <Cashback />
                    </div>
                  </li>

                  <li className='tab'>
                    <input className='switcher' type="radio" id="tab-4" name="tabs" />
                    <label htmlFor="tab-4">FAQ</label>
                    <div className="tab-content">
                      <Accordion />
                    </div>
                  </li>
                </ul>
              </div>
      </div>
    </div>
  )
}

export default AboutCart;