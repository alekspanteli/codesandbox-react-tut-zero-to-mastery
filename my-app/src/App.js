import './App.css';
import {useState, useEffect} from "react";


const Checkbox = () => {
    
    const [checked, setChecked] = useState(true);
    
    useEffect(() => {
        alert(`checked ${checked.toString('')}`)
    })
    
    
    
    return (
        <>
        <input onChange={() => setChecked(checked => !checked)} type="checkbox" value={checked} />
        {checked ? "checked" : "not checked"}
        </>
    );
}

const App = () => {
    return (
        <>
        <Checkbox />
        </>
    );
}

export default App;
