import React, {useEffect} from 'react'
import './customizeyourcart.scss'
import PrescoringForm from '../form/Form';
import CrediOffers, {OfferT} from "../CreditOffers/CrediOffers";
import {offerStore} from "../../../store/offerStore";

function CustomizeYourCard() {
    const {offers, setOffers} = offerStore();

    useEffect(() => {
        const items = localStorage.getItem("offers");
        if (items){
            const parsedOffers: OfferT[] = JSON.parse(items);
            setOffers(parsedOffers);
        }
    }, []);

  if(offers.length > 0){
      return  <CrediOffers/>;
  }

  return (
    <div className='container'>
        <div className='customizeyourcard shadow'>
            <PrescoringForm />
        </div>
    </div>
  )
}

export default CustomizeYourCard;
