import React from 'react'
import './customizeyourcart.scss'
import PrescoringForm from '../form/Form';

function CustomizeYourCard() {
  return (
    <div className='container'>
        <div className='customizeyourcard shadow'>
            <div className='customizeyourcard__content'>
              <div className='customizeyourcard__firstcontent'>
                <div className='customizeyourcard__header'>
                  <div className='customizeyourcard__title'>Customize your card</div>
                  <div className='customizeyourcard__step'>Step 1 of 5</div>
                </div>
                <div className='customizeyourcard__select'> 
                  <div className='customizeyourcard__step'>Select amount</div>
                </div>
              </div>
              <hr className='customizeyourcard__mainline' />
              <div className='customizeyourcard__subheader'>
                <div className='customizeyourcard__subtitle'>You have chosen the amount</div>
                <div className='customizeyourcard__step'>150 000 ₽</div>
                <hr className='customizeyourcard__line' />
              </div>
            </div>
            <div className='customizeyourcard__formcontent'>
                <PrescoringForm />
            </div>
        </div>
    </div>
  )
}

export default CustomizeYourCard;
