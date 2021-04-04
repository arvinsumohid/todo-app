import BackgroundImage from './components/BackgroundImage';
import TodoBox from './components/TodoBox';

import './App.css';

function themeColor() {
  const html = document.querySelector('html').classList
  if(html.contains('dark')) html.remove('dark')
  else html.add('dark')
}

function App() {
  return (
  <div className="App bg-light-vlg h-screen dark:bg-dark-vdb">
      <BackgroundImage />
      <TodoBox />
  </div>
  );
}

export default App;
