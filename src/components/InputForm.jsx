import React, { useEffect, useState } from "react";
import "./inputText.css";

const InputForm = () => {
  const [memeText, setMemeText] = useState({
    top: "",
    bottom: "",
    randomUrl: "https://i.imgflip.com/28j0te.jpg",
  });

  const [memeImg, setMemeImg] = useState([]);

  const [screenSize, setCreenSize] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });

  const handleScreenSize = () => {
    setCreenSize({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleScreenSize);

    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, [screenSize]);

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
          {screenSize.dynamicWidth < 350
            ? "Get Meme Image ????"
            : " Get New Meme Image ????"}
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
