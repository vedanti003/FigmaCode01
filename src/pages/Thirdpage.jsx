import React from 'react';
import './thirdpage.css';
import PremiumCard from '../components/PremiumCard';

const Thirdpage = () => {
    const premiumCards = [
      {
        title: 'Basic Plan',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni delectus aperiam dolores odit esse, voluptates',
        price: '$54',
        bullets: ['Free access to video class', 'Free access to video class', 'Free access to video class'],
      },
      {
        title: 'Standard Plan',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni delectus aperiam dolores odit esse, voluptates',
        price: '$99',
        bullets: ['Free access to video class', 'Free access to video class', 'Free access to video class'],
      },
      {
        title: 'Premium Plan',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni delectus aperiam dolores odit esse, voluptates',
        price: '$149',
        bullets: ['Free access to video class', 'Free access to video class', 'Free access to video class'],
      },
    ];
  
    return (
      <div className="container">
        <div className="top-part">
          <h2>Choose your plan</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni delectus aperiam dolores odit esse, voluptates iure facere voluptatum molestias id, sunt veritatis voluptatem quos atque nisi dolorem repellat dolorum eum!</p>
        </div>
        <div className="bottom-part">
          {premiumCards.map((card, index) => (
            <PremiumCard
              key={index}
              title={card.title}
              content={card.content}
              price={card.price}
              bullets={card.bullets}
            />
          ))}
        </div>
      </div>
    );
  };
  

export default Thirdpage;
