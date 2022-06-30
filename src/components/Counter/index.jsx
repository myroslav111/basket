import React from 'react';
import './Counter.css';
import Controls from './Controls';
import Value from './Value';

class Counter extends React.Component {
  static defaultProps = {
    intialValue: 0,
  };

  static propTypes = {
    //
  };

  state = {
    value: this.props.intialValue,
  };

  handleIncrement = e => {
    // console.log('clicked to enlarge');
    // const { target } = e;
    // setTimeout(() => {
    //   console.log(target);
    // });

    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
  };

  handleDecrement = e => {
    // console.log('clicked to reduce');
    // console.log(e);

    this.setState(prevState => ({ value: prevState.value - 1 }));
  };

  render() {
    const { value } = this.state;
    return (
      <div className="Counter">
        <Value value={value} />

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
