import './App.css';
import {useState} from "react";




const App = () => {
    
    const [year, setYear] = useState(2021);
    const [manager, setManager] = useState("Alex");
    const [status, setStatus] = useState("Open");
    
    return (
        <>
        <div>
            <h1>Currrent year is:  {year}</h1>
            <button onClick={() => setYear(year + 1)}>Add one year</button>
            <button onClick={() => setYear(year - 1)}>Subtract one year</button>
        </div>
        <div>
            <h1>Manager on dusy is:  {manager}</h1>
            <button onClick={() => setManager("John")}>Change manager</button>
        </div>
       <div>
        <h1>Status {status}</h1>
        <button onClick={() => setStatus("Open")}>Open status</button>
        <button onClick={() => setStatus("Closed")}>Close status</button>
        <button onClick={() => setStatus("Back in 5")}>Break</button>
       </div>
        </>
    );
}

export default App;
