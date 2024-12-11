import React, {useEffect, useState} from "react";
import './news.scss';
import { fetchNews } from "../../service/api";

type TItem = {
    title: string;
    urlToImage: string;
    url: string;
    description: string;
}

function News(){
    const [items, setItems] = useState<TItem[]>([]);
    
    useEffect(() => {
        let ignore = false;

        const apiNews = async () => {
            const news = await fetchNews();
            if (!ignore) {
                setItems(news);
            }
        };
        apiNews();
        const timeOut = window.setInterval(()=>{
           apiNews();
        }, 900000);

        return () => {
            ignore = true;
            window.clearInterval(timeOut);
        };

        }, []);
        const [currentIndex, setCurrentIndex] = useState(0);
      
        const goToPrevious = () => {
          setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        };
      
        const goToNext = () => {
          setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, items.length - 13));
        };
      
        const isNextButtonDisabled = currentIndex + 13 >= items.length;
        const isPrevButtonDisabled = currentIndex === 0;

        const filterItem = items.slice(currentIndex).filter((items)=> items.url !== "https://removed.com");

    return(
        <div className="container">
            <div className="news">
                <div className="news__title">Current news from the world of finance</div>
                <div className="news__subtitle">We update the news feed every 15 minutes. You can learn more by clicking on the news you are interested in.</div>
           <div className="carousel">
                <div className="carousel__slides">
                    {filterItem.map((items, id) => (
                        <a 
                        key={id} 
                        className="slide" 
                        href={items.url} 
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        target="_blank"
                        rel="noreferrer">
                            <div>
                                <div className="slide__img">
                                    <img  src={items.urlToImage} alt="" />
                                </div>
                                <div className="slide__title"> {items.title} </div>
                                <div className="slide__desc"> {items.description} </div>
                            </div>
                    </a> 
                    ))}
                </div>
            </div>
            <div className="buttonGroup">
                    <button className="btn" onClick={goToPrevious} disabled={isPrevButtonDisabled}>
                        <svg className="btn__left" width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 9H15.1579V1.60858C15.1579 1.41552 15.4044 1.33452 15.5189 1.48994L24 13L15.5189 24.5101C15.4044 24.6655 15.1579 24.5845 15.1579 24.3914V17H0"/>
                        </svg>
                    </button>
                    <button className="btn" onClick={goToNext} disabled={isNextButtonDisabled}>
                        <svg className="btn__right" width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 9H15.1579V1.60858C15.1579 1.41552 15.4044 1.33452 15.5189 1.48994L24 13L15.5189 24.5101C15.4044 24.6655 15.1579 24.5845 15.1579 24.3914V17H0"/>
                        </svg>
                    </button>    
                </div>
            </div>
        </div>
    )
}

export default News;