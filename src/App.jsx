import React, { Component } from 'react';
// todo
// import TodoList from 'components/TodoList';
import initialTodos from './components/TodoList/todos';
// import TodoEditor from 'components/TodoEditor';
// import TodoFilter from 'components/TodoFilter';
// другое
// import FormValid from 'components/FormValid';
import ProductReviewForm from 'components/ProductReviewForm';
// import Counter from 'components/Counter';
// import Dropdown from 'components/Dropdown';
// import ColorPicker from 'components/ColorPicker';
// import { render } from '@testing-library/react';
// import Form from 'components/Form';
// import classNames from 'classnames';
import { nanoid } from 'nanoid';
import './App.scss';

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
    filter: '',
  };

  addTodo = text => {
    console.log(text);

    const todo = {
      id: nanoid(),
      // когда имя свойства и значения = тогда достаточно имя свойства
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    console.log(todoId);
    // this.setState(prevState => ({
    //   todos: prevState.todos.map(todo => {
    //     if (todo.id === todoId) {
    //       console.log('got todo');
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }

    //     return todo;
    //   }),
    // }));

    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  formSabmitHandler = data => {
    console.log(data);
  };

  getVisibleTodo = () => {
    const { filter, todos } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizeFilter)
    );
  };

  getComplitedTodoCount = () => {
    const { todos } = this.state;

    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  render() {
    const { todos, filter } = this.state;
    const completedTodo = this.getComplitedTodoCount();
    const visibleTodos = this.getVisibleTodo();
    return (
      <div className="MainContainer">
        {/* <Form onSubmit={this.formSabmitHandler} /> */}
        {/* <h1>component state</h1> */}
        {/* <Counter intialValue={10} /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <FormValid/> */}
        <ProductReviewForm />
        {/* --------------------todo------------------------------------ */}
        {/* <div>
          <p>Total todo: {todos.length}</p>
          <p>Number of completed: {completedTodo}</p>
        </div>
        <TodoEditor onSubmit={this.addTodo} />
        <TodoFilter value={filter} onChange={this.changeFilter} />
        <TodoList
          // todos={todos}
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        /> */}
        {/* ----------------------------------------------- */}
      </div>
    );
  }
}

export default App;
