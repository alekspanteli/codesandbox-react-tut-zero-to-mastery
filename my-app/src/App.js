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
             props.season === "summer" ? 
             ( <Lake name="Lake" /> )
              :  props.season === "winter" ?
             ( <SkiResort name="Resort" /> ) :
             (<h1>Come back next time</h1>)
         }
        </>
    );
}

export default App;
