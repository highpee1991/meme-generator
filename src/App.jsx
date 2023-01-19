import "./App.css";
import InputForm from "./components/memeForm/InputForm";
import MemeImageGenerator from "./components/memeImageGenerator/MemeImageGenerator";
import meme from "./img/meme.png";

function App() {
  return (
    <div className="meme-app">
      <div className=".meme-generator">
        <header className="meme-hearder">
          <img src={meme} alt="meme-img" className="meme-logo" />
          <h1 className="meme-title">MEME GENERATOR</h1>
        </header>
      </div>
      <div className="meme-body">
        <InputForm />
        {/* <MemeImageGenerator /> */}
      </div>
    </div>
  );
}

export default App;
