import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { connect } from 'react-redux';

const LoadingSpinner = props => {
  return <ProgressBar animated={props.rotating} now={45} />;
};

const mapStateToProps = ({ rotating }) => ({ rotating });

export default connect(mapStateToProps)(LoadingSpinner);
