import React from 'react'
import FilterElement from './FilterElement'
import { connect } from 'react-redux'
import { updateWeaknessesChecked } from '../../actions/index'
import { AddToList, RemoveFromList } from './updateChecked';
import { WEAKNESS_PREFIX } from '../../constants/prefixes';

function mapStateToProps(state) {
  return { 
    weaknesses: state.weaknesses,
    weaknessesChecked: state.weaknessesChecked
  };
};

function mapDispatchToProps(dispatch) {
  return {
    updateWeaknessesChecked: newWeaknessesChecked => dispatch(updateWeaknessesChecked(newWeaknessesChecked))
  };
}

class WeaknessFilter extends React.Component{
  constructor(props){
    super(props);
    this.handleCheckBoxClick = this.handleCheckBoxClick.bind(this);
  }

  handleCheckBoxClick(checkbox) {
    var updatedList;
    if (checkbox.checked) {
      updatedList = AddToList(this.props.weaknessesChecked, checkbox.name);
    } else {
      updatedList = RemoveFromList(this.props.weaknessesChecked, checkbox.name);
    }
    this.props.updateWeaknessesChecked({weaknessesChecked: updatedList});
    this.props.applyAllFilters();
  }

  render(){
    var weaknessFilters = [];
    if (this.props.weaknesses != null) {
      weaknessFilters = this.props.weaknesses.map((weakness) => (
        <FilterElement key={WEAKNESS_PREFIX + weakness} name={weakness} onChange={this.handleCheckBoxClick} />
      ));
    }

    return(
      <React.Fragment>
        Filter by Weakness: { weaknessFilters }
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeaknessFilter);