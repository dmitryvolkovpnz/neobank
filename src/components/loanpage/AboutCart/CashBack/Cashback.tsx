import React from 'react';
import './cashback.scss';



function Cashback() {
    return (
          <div className='about-cart__items'> 
            <div className='cashback-item shadow'>
                <div className='cashback-item__title'>For food delivery, cafes and restaurants</div>
                <div className='cashback-item__number'>5%</div>
            </div>
            <div className='cashback-item shadow firstcolorcashback'>
                <div className='cashback-item__title'>In supermarkets with our subscription</div>
                <div className='cashback-item__number'>5%</div>
            </div>
            <div className='cashback-item shadow'>
                <div className='cashback-item__title'>In clothing stores and children's goods</div>
                <div className='cashback-item__number'>2%</div>
            </div>
            <div className='cashback-item shadow firstcolorcashback'>
                <div className='cashback-item__title'>Other purchases and payment of services and fines</div>
                <div className='cashback-item__number'>1%</div>
            </div>
            <div className='cashback-item shadow'>
                <div className='cashback-item__title'>Shopping in online stores</div>
                <div className='cashback-item__number'>up to 3%</div>
            </div>
            <div className='cashback-item shadow firstcolorcashback'>
                <div className='cashback-item__title'>Purchases from our partners </div>
                <div className='cashback-item__number'>30%</div>
            </div>
        </div>
    )
  }
  
  export default Cashback;