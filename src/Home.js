import React, { useState } from 'react';
import { FaTelegram } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Dino from './Dino';
import './Home.css'; // Import Dino component directly

function Home() {
  const [showDino, setShowDino] = useState(false);

  const handleClick = () => {
    // const randomNumber = Math.floor(Math.random() * 2);

    const randomNumber = 2;
    if (randomNumber === 2) {
      setShowDino(true);
    } else {
      window.location.href = 'https://twitter.com';
    }
  };

  return (
    <div className={showDino ? 'hactive' : 'Home'} >
<h1 className={showDino ? 'active' : 'headline'}>COMING SOON</h1>
      <div className={showDino ? 'active' : 'logo'}>
        <img className='imgg' src={require('./logo.png')} alt="Logo" />
        <h1 className='verti'>vertigo.</h1>
      </div>
      <div className={showDino ? 'active' : 'links'}>
        <FaTelegram className='logo1' />
        <FaMediumM className='logo1' />
        <FaXTwitter onClick={handleClick} className='logo1' />
        <FaDiscord className='logo1' />
      </div>
      <input type="text" class="rotating-input" placeholder="Enter text..."/>

      {showDino && <Dino />}

    </div>
  );
}

export default Home;