import React from 'react';
import Testimonial from './../components/Testimonials'
import './fourthpage.css'

const Fourthpage = () => {
  const testimonials = [
    {
      name: 'John Doe',
      company: 'Company A',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      profileImage: 'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Jane Smith',
      company: 'Company B',
      rating: 4,
      text: 'Nulla ut metus ut ante eleifend lacinia et et lorem.',
      profileImage: 'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      name: 'Mike Johnson',
      company: 'Company C',
      rating: 3,
      text: 'Pellentesque finibus ullamcorper leo, vel pulvinar ligula posuere non.',
      profileImage: 'https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
  ];

  return (
    <div className="container">
      <div className="top-part">
        <h2>Review from customers</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed perferendis earum ad fuga placeat recusandae distinctio tenetur exercitationem deleniti! Asperiores, voluptate. Dignissimos, ipsum maiores. At voluptatum numquam porro consectetur quae?</p>
      </div>
      <div className="bottom-part">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Fourthpage;
