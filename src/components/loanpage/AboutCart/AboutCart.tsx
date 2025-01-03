import React from 'react'
import './aboutcart.scss'

function AboutCart() {
  return (
    <div className='about-cart'>
      <div className='container'>
        <div className='about-cart__items'> 
          <div className='about-item shadow'>
              <div className='about-item__img'>
                <img src="img/Money.svg" />
              </div>
              <div className='about-item__title'>Up to 50 000 ₽</div>
              <div className='about-item__subtitle'>Cash and transfers without commission and percent</div>
          </div>
          <div className='about-item shadow firstcolor'>
              <div className='about-item__img'>
                <img src="img/Calendar.svg" />
              </div>
              <div className='about-item__title'>Up to 160 days</div>
              <div className='about-item__subtitle'>Without percent on the loan</div>
          </div>
          <div className='about-item shadow'>
              <div className='about-item__img'>
                <img src="img/Clock.svg" />
              </div>
              <div className='about-item__title'>Free delivery</div>
              <div className='about-item__subtitle'>We will deliver your card by courier at a convenient place and time for you</div>
          </div>
          <div className='about-item shadow firstcolor'>
              <div className='about-item__img'>
                <img src="img/Bag.svg" />
              </div>
              <div className='about-item__title'>Up to 12 months</div>
              <div className='about-item__subtitle'>No percent. For equipment, clothes and other purchases in installments</div>
          </div>
          <div className='about-item shadow'>
              <div className='about-item__img'>
                <img src="img/Creditcard.svg" />
              </div>
              <div className='about-item__title'>Convenient deposit and withdrawal</div>
              <div className='about-item__subtitle'>At any ATM. Top up your credit card for free with cash or transfer from other cards</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCart;