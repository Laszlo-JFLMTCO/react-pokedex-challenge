import React from 'react';
import { connect } from 'react-redux';
import './Status.css';

function mapStateToProps(state) {
  return { 
    isLoaded: state.isLoaded,
    error: state.error
  };
};

class Status extends React.Component {
  render() {
    var fetchError = "none";
    var fetchErrorStyle = "fetchErrorOK";
    if (this.props.error != null) {
      fetchError = this.props.error.toString()
      fetchErrorStyle = "fetchErrorNOK";
    }

    var fetchStatus = false.toString();
    var fetchStatusStyle = "fetchStatusNOK";
    if (this.props.isLoaded) {
      fetchError = this.props.isLoaded.toString()
      fetchStatusStyle = "fetchStatusOK";
    }

    return(
      <React.Fragment>
        <div className={ fetchStatusStyle }>
          Was JSON from URL loaded: { fetchStatus }
        </div>
        <div className={ fetchErrorStyle }>
          Any error? { fetchError }
        </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(Status);