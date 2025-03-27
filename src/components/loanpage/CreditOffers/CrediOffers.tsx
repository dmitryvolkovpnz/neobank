import React, {useEffect} from 'react';
import './creditoffers.scss';
import {offerStore} from "../../../store/offerStore";
import axios from "axios";
import OfferEnabled from "../OfferEnabled/OfferEnabled";
import { BASE_URL } from '../../../utils/const/const';
import { OfferT } from '../../../utils/types';


function CreditOffers() {
    const {offers, setOffers, selectOffer, applyOffer, isOfferEnabled} = offerStore();

    useEffect(() => {
        const items = localStorage.getItem("offers");
        const isOfferEnabled = localStorage.getItem("isOfferEnabled");
        if (items) {
            const parsedOffers: OfferT[] = JSON.parse(items);
            const sortedOffers = parsedOffers.sort((a, b) => a.rate - b.rate);
            setOffers(sortedOffers);
        }
        if (isOfferEnabled) {
            applyOffer();
        }
    }, [setOffers]);

    const handleSelectOffer = async (offer: OfferT) => {
        selectOffer(offer);
        try {
            const response = await axios.post(`${BASE_URL}/application/apply`, offer,);
            if (response.status === 200) {
                applyOffer();
                localStorage.setItem("isOfferEnabled", "true");
            }
        } catch (err) {
            console.error(err);
        }
    }

    if (isOfferEnabled) {
        return <OfferEnabled/>;
    }

    return (
        <div className='creditoffers' id="creditOffers">
            <div className='container'>
                <div className='creditoffers__items'>
                    {offers.map((offer, i) => (
                        <div className='creditoffers__item shadow' key={i}>
                            <div className='creditoffers__img'>
                                <img src="img/CreditOffers.svg" alt=""/>
                            </div>
                            <div className='creditoffers__amount'>Requested amount: {offer.requestedAmount} ₽</div>
                            <div className='creditoffers__total'>Total amount: {offer.totalAmount} ₽</div>
                            <div className='creditoffers__months'>For {offer.term} months</div>
                            <div className='creditoffers__payment'>Monthly payment: {offer.monthlyPayment} ₽</div>
                            <div className='creditoffers__rate'>Your rate: {offer.rate}%</div>
                            <div className='creditoffers__insurance'>Insurance included:
                                {offer.isInsuranceEnabled ?
                                    <img src='img/Check_fill_new.svg'/> :
                                    <img src='img/Close_round_fill.svg'/>
                                }
                            </div>
                            <div className='creditoffers__salary'>Salary client:
                                {offer.isSalaryClient ?
                                    <img src='img/Check_fill_new.svg'/> :
                                    <img src='img/Close_round_fill.svg'/>
                                }
                            </div>
                            <div className='creditoffers__btn'>
                                <button onClick={() => handleSelectOffer(offer)}>
                                    Select
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CreditOffers;