import './App.css';

export const lakeList = [
    {id: "1", name: "Lake 1", city: "Ayia Napa"},
    {id: "2", name: "Lake 2", city: "Limassol"},
    {id: "3", name: "Lake 3", city: "Larnaca"}
];

const App = ({lakes}) => {
  return (
    <>
     {
         lakes.map(lake => <div>
             <h2>{lake.name}</h2>
             <p>{lake.city}</p>
             </div>)
     }
    </>
  );
}

export default App;
