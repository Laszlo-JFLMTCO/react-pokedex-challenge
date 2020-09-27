import React from 'react'
import { connect } from 'react-redux'
import { updateNameToCheck } from '../../actions/index'
import { CleanUpFilterList } from './common'

function mapDispatchToProps(dispatch) {
  return {
    updateNameToCheck: newNameToCheck => dispatch(updateNameToCheck(newNameToCheck)),
  };
}

class NameFilter extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this)
  };

  handleChange(event) {
    this.props.updateNameToCheck({nameToCheck: CleanUpFilterList([event.target.value])});
    this.props.applyAllFilters();
  }

  render(){
    return(
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">Filter By Name</span>
        </div>
        <input type="text" placeholder="type a name" onChange={this.handleChange} />
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(NameFilter);