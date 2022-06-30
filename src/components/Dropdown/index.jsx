import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  // for two button
  //   show = () => {
  //     this.setState({ visible: true });
  //   };

  //   hide = () => {
  //     this.setState({ visible: false });
  //   };

  render() {
    const { visible } = this.state;
    return (
      <div className="Dropdown">
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle}
        >
          {visible ? 'Hide' : 'Show'}
        </button>

        {/* for 2 button */}
        {/* <button type="button" className="Dropdown__toggle" onClick={this.hide}>
          Hide
        </button> */}

        {visible && <div className="Dropdown__menu">Drop-down menu</div>}
      </div>
    );
  }
}

export default Dropdown;
