import React from 'react';
import './ratesandcondition.scss'



function RatesAndCondition() {
    return (
        <div className='ratesandcondition'> 
            <table className='ratesandcondition__table'>
                <tbody>
                    <tr>
                        <td className='ratesandcondition__title'>Card currency</td>
                        <td className='ratesandcondition__content'>Rubles, dollars, euro</td>
                    </tr>
                    <tr>
                        <td className='ratesandcondition__title'>Interest free period</td>
                        <td className='ratesandcondition__content'>0% up to 160 days</td>
                    </tr>
                    <tr>
                        <td className='ratesandcondition__title'>Payment system</td>
                        <td className='ratesandcondition__content'>Mastercard, Visa</td>
                    </tr>
                    <tr>
                        <td className='ratesandcondition__title'>Maximum credit limit on the card</td>
                        <td className='ratesandcondition__content'>600 000 ₽</td>
                    </tr>
                    <tr>
                        <td className='ratesandcondition__title'>Replenishment and withdrawal</td>
                        <td className='ratesandcondition__content'>At any ATM. Top up your credit card for free with cash or transfer from other cards</td>
                    </tr>
                    <tr>
                        <td className='ratesandcondition__title'>Max cashback per month</td>
                        <td className='ratesandcondition__content'>15 000 ₽</td>
                    </tr>
                    <tr>
                        <td className='ratesandcondition__title'>Transaction Alert</td>
                        <td className='ratesandcondition__content'>60 ₽ — SMS or push notifications 
                                                                   <br />0 ₽ — card statement, information about transactions in the online bank</td>
                    </tr>
                </tbody>
                </table>
        </div>
    )
  }
  
  export default RatesAndCondition;