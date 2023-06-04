import './App.css';
import Navs from './components/Navs';
import Listtask from './components/Listtask';
import Addtask from './components/Addtask';

function App() {
  return (
    <div className='App'>
      <Navs />
      <Listtask />
      <Addtask />
    </div>
  )
}



export default App;