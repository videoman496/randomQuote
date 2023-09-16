import { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const url = "https://api.quotable.io/random";
  const [generatedQuote, setGeneratedQuote] = useState("");
  const fetchQuote = () => {
    return Axios.get(url).then((res) => setGeneratedQuote(res.data));
  };
  useEffect(() => {
    fetchQuote();
  }, []);
  return (
    <>
      <div>
        <div className='header'>
          <h1>randomQuote.io</h1>
        </div>
        <div className='body'>
          <h2>{generatedQuote.content}</h2>
          <h3>{generatedQuote.author}</h3>
          <button onClick={fetchQuote}>Get a Quote</button>
        </div>
      </div>
    </>
  );
}

export default App;
