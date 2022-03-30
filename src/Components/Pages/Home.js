import React, {useState, useEffect } from 'react';

export default function Home() {  
    const [heroList, setHeroList] = useState([]);
    const [imgList, setImgList] = useState([]);
    const [imgBaseUrl, setImgBaseUrl] = useState("https://cdn.cloudflare.steamstatic.com");

    function handleGetHeros()
    {
        fetch("https://api.opendota.com/api/heroes")
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                setHeroList(result);
            },
            (error) => {
                console.log(error);
            }
        )
    }

    function handleGetHeroImages()
    {
        fetch("https://api.opendota.com/api/heroStats")
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result);
                setImgList(result);
            },
            (error) => {
                console.log(error);
            }
        )
    }

    return (
        <div className="home-page-wrapper">
            Home Page
            <button onClick={handleGetHeroImages}>Show Heros</button>
            <div className='hero-list-wrapper'>
                {imgList&&
                    imgList.map((hero) => ( 
                        <div key={hero.id}> 
                            <img src={imgBaseUrl + hero.img} title={hero.localized_name} alt={hero.localized_name} className="home-hero-icon"></img>
                        </div>    
                    ))        
                }
            </div>
        </div>
    )
}