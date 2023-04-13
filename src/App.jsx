import { UserState } from './context/UserState';
import './App.css';
import CreateUser from './components/CreateUser';
import ShowUser from './components/ShowUser';

function App() {

  return (
    <div className="App">
      <UserState>
        <CreateUser />
        <ShowUser />
      </UserState>
    </div>
  )
}

export default App
