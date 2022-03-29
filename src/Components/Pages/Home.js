import React, {useState, useEffect } from 'react';

export default function Home() {  
    const [heroList, setHeroList] = useState('');

    useEffect(() => {
        handleGetHeros();
    });

    function handleGetHeros()
    {
        fetch("https://api.opendota.com/api/heroes")
        .then(res => res.json())
        .then(
          (result) => {
                //setHeroList(Array.from(result));
                console.log(result);
                let test = Array.from(result);
                console.log("testing: " + test);
                test.map((hero) => {
                    <div Key={hero.id}>
                        <span>{hero.name}</span>
                    </div>
                });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }

    return (
        <div className="home-page-wrapper">
            Home Page
        </div>
    )
}