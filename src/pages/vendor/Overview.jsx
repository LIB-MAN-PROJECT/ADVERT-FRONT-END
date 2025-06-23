import React from 'react'

const Overview = () => {
  return (
    
    
    <div>
      <div>
        <video 
        autoPlay
        muted
        loop
        playsInline
        className=' top-0 left-0 w-full h-full object-cover z-0'
        src='https://cdn.pixabay.com/video/2020/03/05/33256-396487978_large.mp4'/>
       
      </div>
      <p>people that have viewed</p>
      <p>number of ads he has created(link to all recipes)</p>
      <p>sales so far</p>
      <p>number of approved ads</p>
      <p>number of rejected ads</p>
    </div>
  
  );
};

export default Overview