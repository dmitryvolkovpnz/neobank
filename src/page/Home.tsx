import React from 'react';
import ChooseTheCard from "../components/main/ChooseTheCard/ChooseTheCard";
import Features from "../components/main/Features/Features";
import Exchange from "../components/main/Exchange/Exchange";
import Word from "../components/main/Word/Word";
import CallToAction from "../components/main/CallToAction/CallToAction";

function Home() {
    return (
        <div>
            <ChooseTheCard/>
            <Features/>
            <Exchange/>
            <Word/>
            <CallToAction/>
        </div>
    );
}

export default Home;