import React, {useEffect, useState} from "react";
import './news.scss';
import { fetchNews } from "../../service/api";

type tItem = {
    title: string;
    urlToImage: string;
    url: string;
}

function News(){
    const [items, setItems] = useState<tItem[]>([]);
    
    useEffect(() => {
        const apiNews = async () => {
            const news = await fetchNews();
            setItems(news);
        };
        apiNews();
       // const timeoutId = window.setInterval(()=>{
       //     apiExchange();
       // }, 15000);

       // return () => {
       //     window.clearInterval(timeoutId);
       // };

        }, []);
        const [currentIndex, setCurrentIndex] = useState(0);
        const itemsPerPage = 4;
      
        const goToPrevious = () => {
          setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
        };
      
        const goToNext = () => {
          setCurrentIndex((prevIndex) => Math.min(prevIndex + itemsPerPage, items.length - itemsPerPage));
        };
      
        const isNextButtonDisabled = currentIndex + itemsPerPage >= items.length;
        const isPrevButtonDisabled = currentIndex === 0;
    return(
        <div className="container">
           <div className="carousel">
                <button onClick={goToPrevious} disabled={isPrevButtonDisabled}>
                    Previous
                </button>
                <div className="carousel__slides">
                    {items.slice(currentIndex, currentIndex + itemsPerPage).map((items, id) => (
                    <div key={id} className="carousel__slide">
                        <img
                        style={{
                            width: 250,
                            height: 250,
                        }}
                        src={items.urlToImage} alt="" />
                        <div> {items.title} </div>
                        <a href={items.url}>ссылка</a>
                    </div>
                    ))}
                </div>

                <button onClick={goToNext} disabled={isNextButtonDisabled}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default News;