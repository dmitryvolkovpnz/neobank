import React, {useEffect} from "react";
import './news.scss';
import { fetchNews } from "../../service/api";

function News(){

    useEffect(() => {
        const apiNews = async () => {
            const news = await fetchNews();
            console.log(news);
        };
        apiNews();

       // const timeoutId = window.setInterval(()=>{
       //     apiExchange();
       // }, 15000);

       // return () => {
       //     window.clearInterval(timeoutId);
       // };

        }, []);
    return(
        <div className="container">

        </div>
    )
}

export default News;