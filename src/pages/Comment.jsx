import React, { useState, useEffect } from 'react';
import '../styles/Comment.css';
const Comment = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const clients = [
    {
      name: 'Adam jan',
      comment: 'We just wanted to say a massive thank you for the incredible job you did on our wedding flowers! Everyone was talking about how stunning they were—they made our photos absolutely spectacular! Your attention to detail and creativity truly made our day unforgettable.',
      photo: 'images/client1.jpeg',
   
    },
    {
      name: 'Sarah Smith',
      comment: 'The flowers were beyond our wildest dreams! They added so much beauty and elegance to our special day. Thank you for your amazing work and for making everything so seamless. We couldn’t have asked for a better experience!',
      photo: 'images/client2.jpeg',
    
    },
    {
      name: 'Manal Brown',
      comment: 'Absolutely breathtaking arrangements! Your team went above and beyond to make our wedding day perfect. The flowers were the highlight of the decor, and we’re still getting compliments weeks later. Thank you for your incredible talent and dedication!',
      photo: 'images/client3.jpg',
      
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % clients.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, [clients.length]);
  return (
    <div className="container happy-clients-container">
      <div className="comments-container">
        <img className='icon-heart' src="images/icon heart.png" alt="" />
        <h1 className='display-5 fw-bold' style={{color: '#8d5f6a', fontSize: 30}}>Our Happy Clients</h1>
        
        <div className="testimonial-wrapper">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`testimonial ${
                index === activeIndex ? 'active' : ''
              }`}
            >
              <em><h2>testimonials</h2></em>
              <p>{client.comment}</p>
              <div className="client-name">{client.name}</div>
            </div>
          ))}
        </div>
        <br />
        <div className="client-photos">
          {clients.map((client, index) => (
            <img
              key={index}
              src={client.photo}
              alt={client.name}
              className={`client-photo ${
                index === activeIndex ? 'zoom-out' : ''
              }`}
            />
          ))}
        </div>
      </div>
      <div className="image-container">
        <img src="images/f8.jpeg" alt="Wedding Flowers" />
      </div>
      <br />
    </div>
  );
};
export default Comment;






















