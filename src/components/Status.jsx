import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return { 
    isLoaded: state.isLoaded,
    error: state.error
  };
};

class Status extends React.Component {
  render() {
    var fetchStatus = false.toString();
    var fetchStatusStyle = "alert-danger";
    if (this.props.isLoaded) {
      fetchStatus = this.props.isLoaded.toString()
      fetchStatusStyle = "alert-success";
    }

    var fetchError = "none";
    var fetchErrorStyle = "alert-success";
    if (this.props.error != null) {
      fetchError = this.props.error.toString()
      fetchErrorStyle = "alert-danger";
    }

    return(
      <React.Fragment>
        <div className={`alert text-center ${fetchStatusStyle}`} role="alert">
          Was JSON from URL loaded? <strong>{ fetchStatus }</strong>
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className={`alert text-center ${fetchErrorStyle}`}>
          Any error? <strong>{ fetchError }</strong>
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(Status);