import React, { Component } from 'react';

import TodoList from 'components/TodoList';
// import initialTodos from './components/TodoList/todos';
import TodoEditor from 'components/TodoEditor';
import TodoFilter from 'components/TodoFilter';
// другое
import FormValid from 'components/FormValid';
import ProductReviewForm from 'components/ProductReviewForm';
import Counter from 'components/Counter';
import Dropdown from 'components/Dropdown';
import ColorPicker from 'components/ColorPicker';
// import { ReactComponent as AddIcon } from './icons/hand.svg';
import Modal from 'components/Modal';
import Tab from 'components/Tab';
import tabjson from './components/Tab/tabs.json';
// import Clock from 'components/Clock';
import Form from 'components/Form';
// import classNames from 'classnames';
import { nanoid } from 'nanoid';
import './App.scss';
// import { render } from '@testing-library/react';
const colorPickerOptions = [
  { label: 'red', color: '#f5050d' },
  { label: 'black', color: 'black' },
  { label: 'tomato', color: 'tomato' },
  { label: 'blue', color: 'blue' },
  { label: 'green', color: 'green' },
  { label: 'orange', color: 'orange' },
];

class App extends Component {
  /* */
  state = {
    todos: [],
    filter: '',
    // for modal
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  addTodo = text => {
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
  // вызывается один раз при маунте(монтирование) компонента удобно брать начальные данные
  componentDidMount() {
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);
    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }
  // вызывается после каждого обновления
  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log(prevProps);
    // console.log(prevState);
    // console.log(this.state);
    // обезательно проверить обновилось ли стейт иначе зациклим
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
  }

  render() {
    const { todos, filter, showModal } = this.state;
    const completedTodo = this.getComplitedTodoCount();
    const visibleTodos = this.getVisibleTodo();
    return (
      <div className="MainContainer">
        {/* <Clock /> */}
        <Tab items={tabjson} />
        <br />
        <br />
        <br />
        <Form onSubmit={this.formSabmitHandler} />
        <br />
        <br /> <br />
        <h1>component state</h1>
        <Counter intialValue={10} />
        <br />
        <br />
        <br />
        <Dropdown />
        <br />
        <br />
        <br />
        <ColorPicker options={colorPickerOptions} />
        <br />
        <br />
        <br />
        <FormValid />
        <br />
        <br />
        <br />
        <ProductReviewForm />
        <br />
        <br />
        <br />
        {/* --------------------todo------------------------------------ */}
        <div>
          <p>Total todo: {todos.length}</p>
          <p>Number of completed: {completedTodo}</p>
        </div>
        <TodoEditor onSubmit={this.addTodo} />
        <TodoFilter value={filter} onChange={this.changeFilter} />
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
        {/* ----------------------------------------------- */}
        <br />
        <br />
        <br />
        <button type="button" onClick={this.toggleModal}>
          Open modal
        </button>
        {showModal && (
          <Modal closeModal={this.toggleModal}>
            <h1>Hall0</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
              ab illum dolorem libero, quisquam a accusantium laudantium autem
              sit debitis optio, necessitatibus, mollitia voluptas quidem. Est,
              dolore impedit! Aut, eum?
            </p>
            <button type="button" onClick={this.toggleModal}>
              Close modal
            </button>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
