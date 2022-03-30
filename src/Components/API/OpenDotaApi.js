import React, {useState, useEffect } from 'react';

export default function GetHeros()
{
    const [heroList, setHeroList] = useState('');

    fetch("https://api.opendota.com/api/heroes")
    .then(res => res.json())
    .then(
        (result) => {
            //setHeroList(Array.from(result));
            console.log(result);
            let test = Array.from(result);
            console.log("testing: " + test);
            setHeroList(test);
        },
        (error) => {
            console.log(error);
        }
    )

    return(
        <div>We're in the Dota API</div>
    )
}