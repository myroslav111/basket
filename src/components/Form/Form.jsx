import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class Form extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'junior',
    licence: false,
  };

  nameInputId = nanoid();
  tagInputId = nanoid();

  handleChange = e => {
    // console.log(e.currentTarget);
    // console.log(e.currentTarget.name);
    // console.log(e.currentTarget.value);
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    // onSubmit это пропс с апп Form onSubmit={this.formSabmitHandler}
    this.props.onSubmit(this.state);

    this.resetForm();
  };

  handleLicenceChange = e => {
    this.setState({ licence: e.currentTarget.checked });
  };

  resetForm = () => {
    this.setState({ name: '', tag: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name{' '}
          <input
            id={this.nameInputId}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>

        <label htmlFor={this.tagInputId}>
          Nickname{' '}
          <input
            id={this.tagInputId}
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
          />
        </label>
        <p>Your level</p>
        <label htmlFor="">
          <input
            type="radio"
            name="experience"
            value="junior"
            checked={this.state.experience === 'junior'}
            onChange={this.handleChange}
          />
          Junior
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="experience"
            value="middle"
            checked={this.state.experience === 'middle'}
            onChange={this.handleChange}
          />
          Middle
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="experience"
            value="senior"
            checked={this.state.experience === 'senior'}
            onChange={this.handleChange}
          />
          Senior
        </label>
        <label htmlFor="">
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />
          I agree
        </label>

        <button type="submit" disabled={!this.state.licence}>
          Send
        </button>
      </form>
    );
  }
}

export default Form;

// деревянный метод
// handleNameChange = e => {
//   this.setState({ name: e.currentTarget.value });
// };

// handleTagChange = e => {
//   this.setState({ tag: e.currentTarget.value });
// };
