import './App.css';

const Hello = ({library, message, number}) => {
  return (
    <>
    <h1>Welcome to {library}!</h1>
    <p>{message}</p>
    <p>{number} Props total</p>
    </>
  );
}

function App() {
  return (
    <Hello library="React" message="Have fun!" number={3} />
  );
}

export default App;
