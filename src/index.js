import React, {useState,useReducer} from "react";
import ReactDOM from "react-dom";

const initial = {
    n:0
}//第一步创建初始值
const reducer = (state,action)=>{
    if(action.type === 'add'){
        return {n:state.n+1}
    }else if(action.type ==='multi'){
        return {n:state.n*2}
    }else{
        throw new Error('unknown type')
    }
}//第二步创建所有操作
function App() {
    const [state,dispatch] = useReducer(reducer,initial)//第三步传给useReducer获得读写API
    const onClick = ()=>{
        dispatch({type:'add'})//第四步调用，选择操作类型
    }
    return (
        <div className="App">
            <h1>n: {state.n}</h1>

            <button onClick={onClick}>+2</button>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
