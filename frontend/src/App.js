import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState(null);

  useEffect(() => {
    fetch("getText")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log("text!", res);
        setText(res.text);
      });
  }, []);

  return <h1>Text from backend is: {text}</h1>;
}

export default App;
