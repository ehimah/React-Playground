import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startAction } from '../actions/startAction';
import { stopAction } from '../actions/stopAction';

function ActionButtons(props) {
  return (
    <div className='btn-group' role='group' aria-label='...'>
      <button
        type='button'
        className='btn btn-success'
        onClick={props.startSpinner}
      >
        Start Spinner
      </button>
      <button
        type='button'
        className='btn btn-danger'
        onClick={props.stopSpinner}
      >
        Stop
      </button>
    </div>
  );
}

ActionButtons.propTypes = {
  startSpinner: PropTypes.func,
  stopSpinner: PropTypes.func
};

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
  startSpinner: () => dispatch(startAction),
  stopSpinner: () => dispatch(stopAction)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionButtons);
