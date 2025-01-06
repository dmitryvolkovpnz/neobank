import React from 'react'
import './howtogetcart.scss'

function HowToGetCart() {
  return (
    <div className="howtogetcart">
      <div className="container">
        <div className="howtogetcart__title">How to get a card</div>
        <div className="howtogetcart__items">
          <div className="howitem">
            <div className="howitem__header">
              <div className="howitem__number"><span>1</span></div>
              <div className="howitem__line"></div>
            </div>
            <div className="howitem__content">
              Fill out an online application - you do not need to visit the bank
            </div>
          </div>
          <div className="howitem">
            <div className="howitem__header">
              <div className="howitem__number"><span>2</span></div>
              <div className="howitem__line"></div>
            </div>
            <div className="howitem__content">
              Find out the bank's decision immediately after filling out the application
            </div>
          </div>
          <div className="howitem">
            <div className="howitem__header">
              <div className="howitem__number"><span>3</span></div>
              <div className="howitem__line"></div>
            </div>
            <div className="howitem__content">
              The bank will deliver the card free of charge, wherever convenient, to your city
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowToGetCart;
