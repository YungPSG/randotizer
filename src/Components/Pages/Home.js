import React, { useState, useEffect } from 'react';

import { OPENDOTA_BASE_URL, API_HERO_PATH } from '../API/Constants';

import HeroThumb from '../Heros/HeroThumb';

export default function Home() {
  const [filteredHeroType, setFilteredHeroType] = useState('');

  const [imgList, setImgList] = useState([]);
  const [randomHeroId, setRandomHeroId] = useState(Math.floor(Math.random() * 137));
  const [isInactive, setIsInactive] = useState('home-hero-icon');

  useEffect(() => {
    handleGetHeroImages();
  }, []);

  function handleGetHeroImages() {
    console.log('handleGetHeroImages()');
    fetch(OPENDOTA_BASE_URL + API_HERO_PATH)
      .then((res) => res.json())
      .then(
        (result) => {
          setImgList(result);
        },
        (error) => {
          console.log(error);
        },
      );
  }

  function randomHero() {
    setRandomHeroId(Math.floor(Math.random() * 137));

    for (let i = 1; i < 137; i += 1) {
      if (i !== randomHeroId) {
        setIsInactive('home-hero-icon-inactive');
      }
    }
  }

  function clearState() {
    setIsInactive('home-hero-icon');
    setFilteredHeroType('');
  }

  function handleSetHeroFilter(attributeFilter) {
    // unsetting the filter if this gets called with the active filter
    // allows the button to function like a toggle
    if (attributeFilter === filteredHeroType) {
      setFilteredHeroType('');
    } else {
      setFilteredHeroType(attributeFilter);
    }
  }

  return (
    <div className="home-page-wrapper">
      <h1 className="nav-text-solar home-page-header">Home Page</h1>
      <div className="home-page-buttons">
        {/* <button className="randotizer-button" onClick={handleGetHeroImages}>Show Heros</button> */}
        <button className="randotizer-button" onClick={randomHero}>Random</button>
        <button className="randotizer-button" onClick={clearState}>Clear</button>
      </div>
      <br />
      { imgList.length
                    && (
                    <div className="hero-filter-buttons">
                      <button className={`${filteredHeroType === 'str' ? 'active' : ''} filter-button`} onClick={() => handleSetHeroFilter('str')}>Strength</button>
                      <button className={`${filteredHeroType === 'agi' ? 'active' : ''} filter-button`} onClick={() => handleSetHeroFilter('agi')}>Agility</button>
                      <button className={`${filteredHeroType === 'int' ? 'active' : ''} filter-button`} onClick={() => handleSetHeroFilter('int')}>Intelligence</button>
                    </div>
                    )}
      <div className="hero-list-wrapper">
        {imgList
                    && imgList.map((hero) => {
                      if (filteredHeroType === '' || hero.primary_attr === filteredHeroType) {
                        return (
                          <HeroThumb hero={hero} isInactive={isInactive} />
                        );
                      }
                      return <></>;
                    })}
      </div>
    </div>
  );
}
