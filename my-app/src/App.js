import './App.css';
import {useState, useEffect} from "react";


const GitHubUser = ({num}) => {
    
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${num}`)
        .then(res => res.json())
        .then(setData)
        .catch(console.error)
    })
    
    if(data){
        return (
        <>
        {data.title}
       </>
        );
    }
    return null;

    
}

const Test = () => {
    return (
        <>
        <GitHubUser num="1"/>
       </>
    );
}

const App = () => {
    return (
        <>
        <Test />
        </>
    );
}

export default App;
