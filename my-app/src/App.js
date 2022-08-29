import './App.css';

export const list = [1, 2, 3, 4, 5];

const App = ({items}) => {
  return (
    <>
     <ul>
         {
             items.map((item, i) => (
                 <li key={i}>{item}</li>
             ))
         }
    </ul>
    </>
  );
}

export default App;
