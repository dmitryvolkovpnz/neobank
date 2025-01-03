import React from 'react'
import DigitalCart from '../components/loanpage/DigitalCart/DigitalCart';
import AboutCart from '../components/loanpage/AboutCart/AboutCart';
import HowToGetCart from '../components/loanpage/HowToGetCart/HowToGetCart';
import CustomizeYourCard from '../components/loanpage/CustomizeYourCard/CustomizeYourCard';

function Loanpage() {
  return (
    <>
      <DigitalCart />
      <AboutCart />
      <HowToGetCart />
      <CustomizeYourCard/>
    </>
  )
}


export default Loanpage;