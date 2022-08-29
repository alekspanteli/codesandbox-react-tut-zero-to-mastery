import './App.css';

const Lake = ({name}) => {
  return (
    <>
    <h1>{name}</h1>
    </>
  );
}

const App = () => {
  return (
    <>
    <Lake name="Lake number 1" />
    <Lake name="Lake number 2" />
    <Lake name="Lake number 3" />
    </>
  );
}

export default App;
