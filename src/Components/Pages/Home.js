import React, {useState, useEffect } from 'react';

import { OPENDOTA_BASE_URL, API_HERO_PATH } from '../API/Constants'

import HeroThumb from '../Heros/HeroThumb';

export default function Home() {  
    const [heroList, setHeroList] = useState([]);
    const [imgList, setImgList] = useState([]);
    const [imgBaseUrl, setImgBaseUrl] = useState("https://cdn.cloudflare.steamstatic.com");
    const [randomHeroId, setRandomHeroId] = useState(Math.floor(Math.random() * 137));
    const [isInactive, setIsInactive] = useState('home-hero-icon');

    // useEffect(() => {
    //     handleGetHeroImages();
    // }, [])

    function handleGetHeroImages()
    {
        fetch(OPENDOTA_BASE_URL + API_HERO_PATH)
        .then(res => res.json())
        .then(
            (result) => {
                setImgList(result);
                console.log(result)
            },
            (error) => {
                console.log(error);
            }
        )
    }

    function randomHero()
    {
        setRandomHeroId(Math.floor(Math.random() * 137));

        for(let i = 1; i < 137; i++) {
            if(i != randomHeroId)
            {
                setIsInactive('home-hero-icon-inactive');              
            }
        }
    }

    function clearRandom()
    {
        setIsInactive('home-hero-icon');  
    }

    return (
        <div className="home-page-wrapper">
            <h1 className="nav-text-solar home-page-header">Home Page</h1>
            <div className='home-page-buttons'>
                <button className="randotizer-button" onClick={handleGetHeroImages}>Show Heros</button>
                <button className="randotizer-button" onClick={randomHero}>Random</button>
                <button className="randotizer-button" onClick={clearRandom}>Clear</button>
            </div>
            <div className='hero-list-wrapper'>
                {imgList&&
                    imgList.map((hero) => ( 
                        <HeroThumb hero={hero} isInactive={isInactive} />
                    ))        
                }
            </div>
        </div>
    )
}