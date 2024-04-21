"use client"

import React, { useState } from 'react';
import VideoPlayer from './vid';

  export default function Home() {
  const [inputText, setInputText] = useState('');
  const [prediction, setPrediction] = useState('');

  const sendText = async (e) => {
    e.preventDefault();

    // Check if inputText is empty
    if (!inputText.trim()) {
      return; // Do nothing if inputText is empty or contains only whitespace
    }

    try {
      const response = await fetch('http://localhost:5000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: inputText })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error('Error:', error);
    }
  
    }; 
 
  return (
    <main className="flex justify-center items-center flex-col">
      <VideoPlayer />
     <div className=" max-w-300 absolute pt-51 flex justify-center items-center flex-col top-230">
        <p className="font-font text-green-400 text-5xl">MEDI_.ai</p>
        <div className='pb-30'></div>
        <form onSubmit={sendText}>
          <input
          
            placeholder="Enter atleast 2/3 symptoms"
            className=" text-wrap rounded-lg placeholder:bold placeholder:text-slate-100  bg-black bg-opacity-0"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <div></div>
          <button
            
            type="submit"
            className=" mt-18 ml-12 bg-opacity-0 py-1 transition duration-70 ease-out md:ease-in bg-white px-7 text-green-400  rounded-lg border-2 border-gray-800 hover:border-gray-400 scale-20"
          >
            Predict
          </button>
        </form>
        {prediction && (
          <p className="text-slate-600">{prediction}</p>
        )}
      </div>
      
    </main>
  );
}
