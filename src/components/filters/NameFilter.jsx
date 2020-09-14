import React from 'react'
import { connect } from 'react-redux'
import { updateFilteredList } from '../../actions/index'
import FilterList from './filtering'

function mapStateToProps(state) {
  return { 
    list: state.list,
    isLoaded: state.isLoaded,
    error: state.error
  };
};

function mapDispatchToProps(dispatch) {
  return {
    updateFilteredList: newFilteredList => dispatch(updateFilteredList(newFilteredList)),
  };
}

class NameFilter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value:""
    }
    this.handleChange = this.handleChange.bind(this)
  };

  handleChange(event) {
    var newValue = event.target.value;
    this.setState(
      {
        value: newValue
      }
    );
    this.props.updateFilteredList(
      {
        filteredList: FilterList(this.props.list, newValue),
      }
    );
  }

  render(){
    return(
      <label>
        Filter by Name:
        <input type="text" placeholder="type a name" value={this.state.value} onChange={this.handleChange} />
      </label>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NameFilter);