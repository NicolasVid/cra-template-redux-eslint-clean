/* eslint no-unused-vars: "error" */

import { connect } from 'react-redux';

import Counter from '../components/Counter';

import { increment, decrement } from '../actions';

/* Props:
 *  - state : state from store
 *  - ownProps : props given to the component
 * No data to forward: const mapStateToProps = null;
 */
const mapStateToProps = (state) => ({
  count: state.counter.value,
});

/* Props:
 *  - dispatch : dispatch method
 *  - ownProps : props given to the component
 * No data to forward: const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch) => ({
  increment: () => {
    dispatch(increment());
  },
  decrement: () => {
    dispatch(decrement());
  },
});

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

export default CounterContainer;
