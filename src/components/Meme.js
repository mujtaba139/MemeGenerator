import React, { useState } from "react";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("");

  async function getMemeimage() {
    const response = await fetch("https://api.imgflip.com/get_memes");
    const meme = await response.json();
    const memesArray = meme.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    let url = memesArray[randomNumber].url;
    setMemeImage(url);
    console.log(memesArray[5])
  }

  return (
    <div className="main">
      <div className="form">
        <input type="text" className="form-input" placeholder="Top Text" />
        <input
          type="text"
          className="form-input"
          placeholder="Bottom Text"
        />
        <button onClick={getMemeimage} className="form-button">
          Generate a new image
        </button>
      </div>
      <img className="generate-image" src={memeImage} alt="text"></img>
    </div>
  );
}
