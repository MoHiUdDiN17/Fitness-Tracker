import React, { useState } from 'react';
import './HighestScore.css';

const HighestScore = props => {
    const { persons } = props;
    let maxScore = 0;
    let highestMan;
    persons?.forEach(element => {
        if (element.score > maxScore) {
            maxScore = element.score;
            highestMan = element;
        }
    });
    console.log(highestMan);
    return (
        <div id="highest-score" className="py-24 flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold my-8">Highest Scored Person</h1>
            <div id='Highest-score'
                className="flex back w-2/3 lg:w-1/2 bg-cyan-200 flex-col gap-5 lg:gap-20 lg:flex-row items-center justify-center">
                <img src={highestMan?.photo} className="p-2 sizing" />
                <div className='text-1xl lg:text-2xl text-orange-700'>
                    <h1>Name    : {highestMan?.name}</h1>
                    <h1>Country : {highestMan?.country}</h1>
                    <h1>Score : {highestMan?.score}</h1>
                </div>
            </div>
        </div>
    );
};

export default HighestScore;