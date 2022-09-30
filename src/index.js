import React, {useState} from "react";
import ReactDOM from "react-dom";

function App() {
    const [n, setN] = useState(0)
    const onClick = ()=>{
        setN(i=>i+1)
        setN(i=>i+1)
    }
    return (
        <div className="App">
            <h1>n: {n}</h1>

            <button onClick={onClick}>+2</button>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
