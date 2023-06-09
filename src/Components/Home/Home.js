import React from 'react';
import Table from '../Table/Table';
import Calculation from '../Calculation/Calculation';
import img from "./image1.jpg"

const Home = () => {

    return (
        <div id='Home'>
            <div>
                <div className="py-24">
                    <div className=" flex flex-col gap-10 lg:flex-row items-center justify-center px-10">
                        <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                        <div className='lg:py-20'>
                            <h1 className="text-5xl font-bold">More About Fitness Tracker!</h1>
                            <p className="py-6">This website shows the fitness value of some persons.You can compare your fitness scores with others.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;