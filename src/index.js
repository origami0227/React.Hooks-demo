import React, { useMemo } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
    const [n, setN] = React.useState(0);
    const [m, setM] = React.useState(0);
    const onClick = () => {
        setN(n + 1);
    };
    const onClick2 = () => {
        setM(m + 1);
    };
    const onClickChild = useMemo(() => {
        const fn = div => {
            console.log("on click child, m: " + m);
            console.log(div);
        };
        return fn;
    }, [m]); // 这里呃 [m] 改成 [n] 就会打印出旧的 m
    return (
        <div className="App">
            <div>
                <button onClick={onClick}>update n {n}</button>
                <button onClick={onClick2}>update m {m}</button>
            </div>
            <Child2 data={m} onClick={onClickChild} />
        </div>
    );
}

function Child(props) {
    console.log("child 执行了");
    console.log("假设这里有大量代码");
    return <div onClick={e => props.onClick(e.target)}>child: {props.data}</div>;
}

const Child2 = React.memo(Child);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
