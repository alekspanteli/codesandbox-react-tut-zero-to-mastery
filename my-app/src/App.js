import './App.css';

let city = {
    name: "Madrid",
    country: "Spain"
}

function App() {
  return (
    <h1>
        {city.name} is sin {city.country}
    </h1>
  );
}

export default App;
