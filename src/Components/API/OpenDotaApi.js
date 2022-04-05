import React, { useState } from 'react';

export default function GetHeros() {
  /* eslint-disable no-unused-vars */
  const [heroList, setHeroList] = useState('');

  fetch('https://api.opendota.com/api/heroes')
    .then((res) => res.json())
    .then(
      (result) => {
        // setHeroList(Array.from(result));
        console.log(result);
        const test = Array.from(result);
        console.log(`testing: ${test}`);
        setHeroList(test);
      },
      (error) => {
        console.log(error);
      },
    );

  return (
    <div>We're in the Dota API</div>
  );
}
