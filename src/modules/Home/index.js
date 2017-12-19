import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
} from './redux/home.actions';
import './home.css';

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Count: {props.count}</p>

    <p>
      <button
        onClick={props.increment}
        disabled={props.isIncrementing}>Increment
      </button>
      <button
        onClick={props.incrementAsync}
        disabled={props.isIncrementing}>Increment Async
      </button>
    </p>

    <p>
      <button
        onClick={props.decrement}
        disabled={props.isDecrementing}>Decrementing
      </button>
      <button
        onClick={props.decrementAsync}
        disabled={props.isDecrementing}>Decrement Async
      </button>
    </p>

    <p><button onClick={() => props.changePage()}>Go to about page via redux</button></p>
  </div>
);

Home.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func,
  isIncrementing: PropTypes.func,
  incrementAsync: PropTypes.func,
  decrement: PropTypes.func,
  isDecrementing: PropTypes.func,
  decrementAsync: PropTypes.func,
  changePage: PropTypes.func,
};

const mapStateToProps = state => ({
  count: state.home.count,
  isIncrementing: state.home.isIncrementing,
  isDecrementing: state.home.isDecrementing,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync,
  changePage: () => push('/about-us'),
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
