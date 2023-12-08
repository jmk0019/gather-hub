
import { Routes, Route } from 'react-router-dom'
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/signin" Component={SignIn} />
      <Route path="/signup" Component={SignUp} />
    </Routes>

  );
}

export default App;
