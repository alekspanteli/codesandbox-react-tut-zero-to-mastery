import './App.css';


const Lake = ({name}) => {
  return (
    <>
     <h1>Visit {name}</h1>
    </>
  );
}

const SkiResort = ({name}) => {
  return (
    <>
     <h1>Visit {name}</h1>
    </>
  );
}


const App = (props) => {
    return (
        <>
         {
             props.season === "summer" ? ( <Lake name="Lake" /> ) : ( <SkiResort name="Resort" /> )
         }
        </>
    );
}

export default App;
