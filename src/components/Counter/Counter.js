import React, { Component } from 'react';
import Controls from './Countrols';
// import './Counter.css';
class Counter extends Component {
  static defaultProps = {
    initialValue: 5,
  };
  state = {
    value: this.props.initialValue,
  };
  handleIncrement = event => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };
  render() {
    return (
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        {/* Controls вместо
                 <div className="Counter__controls">
                    <button type="button" onClick={this.handleIncrement}>
                        Увеличить на 1
                    </button>
                    <button type="button" onClick={this.handleDecrement }>Уменьшить на 1</button>
                 </div> */}
      </div>
    );
  }
}

export default Counter;
