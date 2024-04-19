import React, { useState, useEffect } from 'react';
import ChromeDinoGame from 'react-chrome-dino';
import './Dino.css';
import { useNavigate } from 'react-router-dom';
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { FaCircleCheck } from "react-icons/fa6";
import { IoStarOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";





function Dino() {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const[highestScore,sethighestScore]=useState(0)
  const[show,setShow]=useState(false)




  const redirectTwitter = () => {
    if (gameOver) {
      window.location.href = 'https://twitter.com';
    }
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setGameOver(true);
  //   }, 15000);

  //   return () => clearTimeout(timer);
  // }, []);

  // useEffect(() => {
  //   redirectTwitter();
  // }, [gameOver]);

  // useEffect(()=>{
  //   sethighestScore(highestScore)
  // },[highestScore])



  useEffect(()=>{
    const intervel=setInterval(()=>{
      setShow((prev)=>{
        return(!prev)
      })
    },1000)
  },[])

  function handleReload(e) {
    e.preventDefault()
    window.location.href = 'https://twitter.com';
  }

  return (
    <div className='dino' >

      <div className='game'>
        {!gameOver && <ChromeDinoGame />}
   
        
      </div>

      <div className='details'>
        <h1 style={{ fontWeight: '500' }}>No internet</h1>
        <div>
          <p className='p'>Try:</p>
        </div>
        <ul>
          <li>Checking the network cables, modem, and router</li>
          <li>Reconnecting to Wi-Fi</li>
          <li style={{ color: 'blue' }}><a>Running Windows Network Diagnostics</a></li>
        </ul>
        <div style={{ display: 'flex', gap: '20px' }}>
          <p className='err'>ERR_INTERNET_DISCONNECTED</p>
          <button className='btn1' onClick={handleReload}>Reload</button>
        </div>
      </div>
      <div className='details-mobile'>
        <div className='upper'>
          <h2 style={{ fontWeight: '500' }}>No internet</h2>
          <HiOutlineQuestionMarkCircle size={24} />

        </div>
        <div className='upper'>
          <p>Chrome will let you know when this page is <a className='link' href='https://twitter.com'>Reload</a></p>
          <FaCircleCheck size={44} />
        </div>
      </div>
      <div className='star' >
        {show && <GoDotFill size={24}/>}

      </div>
    </div>
  );
}

export default Dino;