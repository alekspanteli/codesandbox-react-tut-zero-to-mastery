import './App.css';


const Lake = () => {
  return (
    <>
     <h1>Visit Lake</h1>
    </>
  );
}

const SkiResort = () => {
  return (
    <>
     <h1>Visit SkiResort</h1>
    </>
  );
}


const App = (props) => {
    return (
       <>
       <Lake name="test" />
       <SkiResort name="test2" />
       </>
    );
}

export default App;
