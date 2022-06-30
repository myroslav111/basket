// import Counter from 'components/Counter';
// import Dropdown from 'components/Dropdown';
// import ColorPicker from 'components/ColorPicker';
import React, { Component } from 'react';
import TodoList from 'components/TodoList';
// import { render } from '@testing-library/react';
import initialTodos from './components/TodoList/todos';

// const colorPickerOptions = [
//   { label: 'red', color: '#f5050d' },
//   { label: 'black', color: 'black' },
//   { label: 'tomato', color: 'tomato' },
//   { label: 'blue', color: 'blue' },
//   { label: 'green', color: 'green' },
//   { label: 'orange', color: 'orange' },
// ];

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const completedTodo = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    return (
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <h1>component state</h1>
        {/* <Counter intialValue={10} /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        <div>
          <p>Total todo: {todos.length}</p>
          <p>Number of completed: {completedTodo}</p>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
