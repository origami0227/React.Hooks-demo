import React, {useState} from "react";
import ReactDOM from "react-dom";

function App() {
    const [user,setUser] = useState({name:'Origami', age: 18})
    const onClick = ()=>{
        setUser({
            ...user,//需要将原来的对象拷贝一遍在进行覆盖
            name: 'Jack'
        })
    }
    return (
        <div className="App">
            <h1>{user.name}</h1>
            <h2>{user.age}</h2>
            <button onClick={onClick}>Click</button>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
