import logo from './logo.svg';
import './App.css';
import Todo from './component/Todo';
import Login from './component/Login';
import Box from './component/Box';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Delete API</h1>
      </header>
      <Box />
      <Login />
      <Todo />
    </div>
  );
}

export default App;
