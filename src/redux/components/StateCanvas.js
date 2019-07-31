import React from 'react';
import { connect } from 'react-redux';

const StateCanvas = props => (
  <span className='label label-success'>
    {props.rotating ? 'Loading' : 'Not Loaded'}
  </span>
);

const mapStateToProps = state => ({ ...state });
export default connect(mapStateToProps)(StateCanvas);
