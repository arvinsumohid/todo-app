import React, {useEffect} from 'react';
import BackgroundImage from './components/BackgroundImage';
import TodoBox from './components/TodoBox';
import { connect } from 'react-redux';

import actions from './store/actions'
import './App.css';

function themeColor() {
  const html = document.querySelector('html').classList
  if(html.contains('dark')) html.remove('dark')
  else html.add('dark')
}

function App(props) {

  useEffect(() => {
      const html = document.querySelector('html').classList
      if(!props.isDarked) html.remove('dark')
      else html.add('dark')

  }, [props.isDarked])

  return (
  <div className="App bg-light-vlg h-screen dark:bg-dark-vdb">
      <BackgroundImage isDarked={props.isDarked} />
      <TodoBox props={props} />
  </div>
  );
}

const mapStateToProps = function(state) {
    return {
        todoList: state.todoList,
        todoNumber: state.todoList.filter(item => !item.isCompleted ).length,
        isDarked: state.isDarked
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        toggleTheme : actions.toggleTheme()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
