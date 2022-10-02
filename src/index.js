import React, { useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
    const buttonRef = useRef(null);
    return (
        <div className="App">
            <Button3 ref={buttonRef}>按钮</Button3>
        </div>
    );
}

const Button3 = React.forwardRef((props, ref) => {
    return <button className="red" ref={ref} {...props} />;
});

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
