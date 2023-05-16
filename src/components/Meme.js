import React, { useState } from "react";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("");
  const[topText , setToptext] = useState('');
  const[bottomText , setBottomtext] = useState('');
  
  async function getMemeimage() {
    const response = await fetch("https://api.imgflip.com/get_memes");
    const meme = await response.json();
    const memesArray = meme.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    let url = memesArray[randomNumber].url;
    setMemeImage(url);
    console.log(memesArray[5])
  }
  function handleToptext(event){
    setToptext(event.target.value);
  }
  function handleBottomtext(event){
    setBottomtext(event.target.value);
  }

  return (
    <div className="main">
      <div className="form">
        <input
        type="text" 
        className="form-input"
         placeholder="Top Text"
          onChange={handleToptext}
           />
        <input
        onChange={handleBottomtext}
          type="text"
          className="form-input"
          placeholder="Bottom Text"
        />
        <button onClick={getMemeimage} className="form-button">
          Generate a new image :D
        </button>
      </div>
      <div className="meme">
      <img className="generate-image" src={memeImage} alt="text"></img>
      <h2 className="meme-text top">{topText}</h2>
      <h2 className="meme-text bottom">{bottomText}</h2>
      </div>
    </div>
  );
}
