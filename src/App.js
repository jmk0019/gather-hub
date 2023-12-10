
import { Routes, Route } from 'react-router-dom'
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Meetings from "./components/Meetings"
import AddNewMeet from './components/AddNewMeet'
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" Component={SignIn} />
      <Route path="/signup" Component={SignUp} />
      <Route path='/meetings' Component={Meetings} />
      <Route path="/new-metting" Component={AddNewMeet} />
    </Routes>

  );
}

export default App;
