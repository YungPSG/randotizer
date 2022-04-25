import React, {useState, useEffect } from 'react';

import { OPENDOTA_BASE_URL, API_HERO_PATH } from '../API/Constants'

import HeroThumb from '../Heros/HeroThumb';

export default function Home() {  
    const [heroList, setHeroList] = useState([]);
    
    const [filteredHeroType, setFilteredHeroType] = useState('');

    const [imgList, setImgList] = useState([]);

    // shows the selected hero
    const [activeHeroId, setActiveHeroId] = useState(-1)

    useEffect(() => {
        handleGetHeroImages();
    }, [])


    function handleGetHeroImages()
    {
        console.log('handleGetHeroImages()')
        fetch(OPENDOTA_BASE_URL + API_HERO_PATH)
        .then(res => res.json())
        .then(
            (result) => {
                // the hero IDs provided by this fetch aren't sequential
                const ourHeroes = result.map((hero, index) => {
                    return { randotizerId: index + 1, ...hero }
                })
                setImgList(ourHeroes);
                console.log(ourHeroes)
            },
            (error) => {
                console.log(error);
            }
        )
    }

    function randomHero()
    {
        const max = imgList.length || 123 // 123 heroes in DOTA as of 04/24/22
        const min = 1 // our indexes start at 1

        const multiplier = max - min

        // add one in case Math.random() returns 0
        const id = Math.floor(Math.random() * multiplier + min );
        console.log(id)

        setActiveHeroId(id)
    }

    function clearState()
    {
        setActiveHeroId(-1)
        setFilteredHeroType('')
    }

    function handleSetHeroFilter(attributeFilter) {
        // unsetting the filter if this gets called with the active filter
        // allows the button to function like a toggle
        if(attributeFilter === filteredHeroType) {
            setFilteredHeroType('')
        } else {
            setFilteredHeroType(attributeFilter)
        }
    }

    return (
        <div className="home-page-wrapper">
            <h1 className="nav-text-solar home-page-header">Home Page</h1>
            <div className='home-page-buttons'>
                {/* <button className="randotizer-button" onClick={handleGetHeroImages}>Show Heros</button> */}
                <button className="randotizer-button" onClick={randomHero}>Random</button>
                <button className="randotizer-button" onClick={clearState}>Clear</button>
            </div>
            <br/>
                { imgList.length &&
                    (
                    <div className='hero-filter-buttons'>
                        <button className={(filteredHeroType == 'str' ? "active" : "") + " filter-button"} onClick={()=>handleSetHeroFilter('str')}>Strength</button>
                        <button className={(filteredHeroType == 'agi' ? "active" : "") + " filter-button"} onClick={()=>handleSetHeroFilter('agi')}>Agility</button>
                        <button className={(filteredHeroType == 'int' ? "active" : "") + " filter-button"} onClick={()=>handleSetHeroFilter('int')}>Intelligence</button>
                    </div>
                )}
            <div className='hero-list-wrapper'>
                {imgList&&
                    imgList.map((hero) => {
                        const isInactive = activeHeroId > 0 && hero.randotizerId != activeHeroId
                        if(filteredHeroType === '' || hero.primary_attr === filteredHeroType)
                            return (
                                <HeroThumb hero={hero} isInactive={isInactive} />
                            )
                        })        
                }
            </div>
        </div>
    )
}