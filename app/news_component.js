"use client"

import React, { useState } from "react";
import DammyValue from "./dummyvalue";

const NewsComponent = () => {
    const [news, setNews] = useState(DammyValue);

    return (
        <div className="main_box">
            <div className="line">
                <p>Top News From India</p>
            </div>
            <div className="braking">
                {news.map((item, index) => (
                    <div className="news2" key={index}>
                        <div className="news3">
                            <div className="details_of_news">
                                <h2 className="news-title">{item.title}</h2>
                                <p className="news_of_discrip">{item.description}</p>
                                <p className="news_article">{item.article}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsComponent;


