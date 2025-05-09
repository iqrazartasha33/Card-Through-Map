import { useState } from 'react';
import './App.css';
import React from 'react';

function App() {
  var array = [
    { id: 1, imgSrc: '/burger.jpg', name: 'Burger', price: '$2.00' },
    { id: 2, imgSrc: '/pizza.jpg', name: 'Pizza', price: '$3.00' },
    { id: 3, imgSrc: '/roll.webp', name: 'Roll', price: '$1.50' },
    { id: 4, imgSrc: '/momos.jpg', name: 'Momos', price: '$2.50' },
    { id: 5, imgSrc: '/sandwich.jpg', name: 'Sandwich', price: '$1.75' },
    { id: 6, imgSrc: '/gol gappy.jfif', name: 'Gol Gappy', price: '$1.00' },
    { id: 7, imgSrc: '/chaat.webp', name: 'Chaat', price: '$2.20' },
    { id: 8, imgSrc: '/biryani.webp', name: 'Biryani', price: '$4.00' },
    { id: 9, imgSrc: '/malai tikka boti.avif', name: 'Malai Tikka Boti', price: '$3.00' },
    { id: 10, imgSrc: '/seekh kabab.jpg', name: 'Seekh Kabab', price: '$3.50' }
  ];

  console.log('Array Elements:', array);

  return (
    <>
      <h1 className="heading">Display Cards Through Map in React!</h1>

      <div className="grid gap-8 p-6 md:grid-cols-2 lg:grid-cols-3 
      xl:grid-cols-4 min-h-screen bg-black">
        {array.map(item => (
          <div 
            key={`card-${item.id}`} 
            className="bg-white w-62 h-68 rounded-tl-[3rem] rounded-br-[3rem]
             shadow-2xl p-8 border-2 border-white mx-auto transition-all transform
              hover:scale-105 hover:shadow-xl hover:border-yellow-500"
          >
            <img 
              src={item.imgSrc} 
              alt={`Card Image ${item.id}`} 
              className="w-full h-40 object-cover rounded-tl-[2rem] rounded-br-[2rem] mb-4"
            />
            <h2 className="text-2xl font-bold text-black mb-1">{item.name}</h2>
            <p className="text-xl font-semibold text-black mb-0">{item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

