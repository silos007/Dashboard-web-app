import './App.css';
import Left from './Components/LeftPanel';
import Right from './Components/RightPanel'

function App() {
  return (
    <div className="App">
      <div className='flex w-[100%] h-screen'>
        <Left />
        <Right />
      </div>
    </div>
  );
}
export default App;
