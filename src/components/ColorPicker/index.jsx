import React, { Component } from 'react';
import './ColorPicker.css';
import { ReactComponent as AddIcon } from '../../icons/hand.svg';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 1,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];
    if (index === this.state.activeOptionIdx) {
      optionClasses.push('ColorPicker__option--active');
    }

    return optionClasses.join(' ');
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Selected color: {label}</p>
        <div className="ColorPicker__container">
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(index)}
            >
              <AddIcon />
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
