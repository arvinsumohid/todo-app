import logo from './logo.svg';
import './App.css';

function themeColor() {
  const html = document.querySelector('html').classList
  if(html.contains('dark')) html.remove('dark')
  else html.add('dark')
}

function App() {
  return (
    <div className="App bg-light-vlg dark:bg-dark-vdb">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-gray-500">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className="text-black dark:text-white"  onClick={themeColor}>Switch Theme</button> 
      </header>
    </div>
  );
}

export default App;
