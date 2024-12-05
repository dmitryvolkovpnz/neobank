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

        const timeOut = window.setInterval(()=>{
            apiNews();
        }, 900000);

        return () => {
            window.clearInterval(timeOut);
        };

        }, []);
        const [currentIndex, setCurrentIndex] = useState(0);
        const [itemsPerPage, setItemsPerPage] = useState(0);
        useEffect(() => {
            const updateItemsPerPage = () => {
              const width = window.innerWidth;
              if (width < 1300) {
                setItemsPerPage(3);
              } else if (width > 1300) {
                setItemsPerPage(4);
              } else if (width < 920) {
                setItemsPerPage(2);
              } else if (width < 500) {
                setItemsPerPage(1);
              } else {
                setItemsPerPage(1);  // В случае, если разрешение меньше 500px
              }
            };
        
            updateItemsPerPage();
            window.addEventListener('resize', updateItemsPerPage);
        
            return () => {
              window.removeEventListener('resize', updateItemsPerPage);
            };
          }, []);
      
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
                        <a href={items.url}>
                            <img
                            style={{
                                width: 250,
                            }}
                            src={items.urlToImage} alt="" />
                            <div> {items.title} </div>
                        </a>
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