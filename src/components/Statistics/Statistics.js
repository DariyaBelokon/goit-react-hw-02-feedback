import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';
class Statistics extends Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    totalPositive: PropTypes.number,
  };

  render() {
    return (
      <div className={s.statistics}>
        <h2>Statistics</h2>
        <p>Good: {this.props.good}</p>
        <p>Neutral: {this.props.neutral}</p>
        <p>Bad: {this.props.bad}</p>
        <p>Total: {this.props.total}</p>
        <p>Positive feedback: {this.props.positivePercentage} %</p>
      </div>
    );
  }
}

export default Statistics;
