import "./App.css";
import InputForm from "./components/InputForm";
import meme from "./imgages/meme.png";

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
      </div>
    </div>
  );
}

export default App;
