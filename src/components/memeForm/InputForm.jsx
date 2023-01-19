import React, { useState, useEffect } from "react";
import "./inputText.css";

const InputForm = () => {
  const [memeText, setMemeText] = useState({
    top: "",
    bottom: "",
    randomUrl: "https://i.imgflip.com/28j0te.jpg",
  });

  const [memeImg, setMemeImg] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemeImg(data.data.memes));
  }, []);

  const handleURL = () => {
    const random = Math.floor(Math.random() * memeImg.length + 1);
    const url = memeImg[random].url;
    setMemeText((prev) => ({
      ...prev,
      randomUrl: url,
    }));

    memeText.bottom = "";
    memeText.top = "";
  };

  const handleMemeText = (e) => {
    const { name, value } = e.target;

    setMemeText((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="body-item">
      <div className="form">
        <form className="form">
          <input
            className="top text"
            type="text"
            name="top"
            onChange={handleMemeText}
            value={memeText.top}
            placeholder="top text"
          />
          <input
            className="bottom text"
            type="text"
            name="bottom"
            onChange={handleMemeText}
            value={memeText.bottom}
            placeholder="bottom text"
          />
        </form>
      </div>
      <div className="btn">
        <button className="main-btn" onClick={handleURL}>
          Get New Meme Image{" "}
          {/* <span>
            <img src={btnMeme} />
          </span> */}
        </button>
      </div>
      <div className="img-rapper">
        <img
          src={memeText.randomUrl}
          alt="meme"
          className="img-meme-generated"
        />
        <h2 className="meme--text top-te">{memeText.top}</h2>
        <h2 className="meme--text bottom-te">{memeText.bottom}</h2>
      </div>
    </div>
  );
};

export default InputForm;
