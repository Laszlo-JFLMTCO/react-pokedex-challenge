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
      <label>
        Filter by Name:
        <input type="text" placeholder="type a name" onChange={this.handleChange} />
      </label>
    )
  }
}

export default connect(null, mapDispatchToProps)(NameFilter);