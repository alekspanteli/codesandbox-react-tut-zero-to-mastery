import './App.css';

const lakeList = ["Lake 1", "Lake 2", "Lake 3"];

const List = (props) => {
  return (
    <>
     <ul>
       {
         props.lakes.map(lake => (
           <li>{lake}</li>
         ))
       }
    </ul>
    </>
  );
}

const App = () => {
  return (
     <List lakes={lakeList} />
  );
}

export default App;
