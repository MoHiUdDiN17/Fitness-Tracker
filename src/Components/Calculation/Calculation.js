import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './calculation.css';

const Calculation = props => {
    const { persons } = props;
    console.log(persons);
    const beatUsers = event => {
        let count = 0;
        const temp = [...persons];
        event.preventDefault();
        const form = event.target;
        const message = form.message.value;
        temp.forEach(element => element.score > message ? count += 1 : "");
        notify(count);
    }

    const notify = count => {
        toast(`You beat ${count} persons`);
    }

    return (
        <div id='Calculate' className='flex flex-col justify-center items-center'>
            <h1 className="text-4xl font-bold my-8">Check your fitness Score with Others!</h1>
            <div className='bg-cyan-200 area'>
                <form className='flex flex-col justify-center items-center' onSubmit={beatUsers}>
                    <input name="message" type="text" id="myInput" class="shadow my-5 mt-16 w-2/3 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your Score"></input>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">Submit</button>
                    <ToastContainer />
                </form>
            </div>
        </div>
    );
};

export default Calculation;