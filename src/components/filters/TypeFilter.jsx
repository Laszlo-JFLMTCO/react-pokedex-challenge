import React from 'react'
import FilterElement from './FilterElement'
import { connect } from 'react-redux'
import { updateTypesChecked } from '../../actions/index'
import { AddToList, RemoveFromList } from './updateChecked';
import { TYPE_PREFIX } from '../../constants/prefixes';

function mapStateToProps(state) {
  return { 
    types: state.types,
    typesChecked: state.typesChecked
  };
};

function mapDispatchToProps(dispatch) {
  return {
    updateTypesChecked: newTypesChecked => dispatch(updateTypesChecked(newTypesChecked))
  };
}

class TypeFilter extends React.Component{
  constructor(props){
    super(props);
    this.handleCheckBoxClick = this.handleCheckBoxClick.bind(this);
  }

  handleCheckBoxClick(checkbox) {
    var updatedList;
    if (checkbox.checked) {
      updatedList = AddToList(this.props.typesChecked, checkbox.name);
    } else {
      updatedList = RemoveFromList(this.props.typesChecked, checkbox.name);
    }
    this.props.updateTypesChecked({typesChecked: updatedList});
    this.props.applyAllFilters();
  }

  render(){
    var typeFilters = [];
    if (this.props.types != null) {
      typeFilters = this.props.types.map((type) => (
        <FilterElement key={TYPE_PREFIX + type} prefix={TYPE_PREFIX} name={type} onChange={this.handleCheckBoxClick} />
      ));
    }

    return(
      <React.Fragment>
        <div className="row">
          <div className="col-2">
            Filter By Type:
          </div>
          <div className="col-10">
            { typeFilters }
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TypeFilter);