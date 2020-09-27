import React from 'react'
import { connect } from 'react-redux'
import { updateFetchError, updateFetchStatus, updateList, updateFilteredList, updateTypesList, updateWeaknessesList } from '../actions/index';
import Status from './Status';
import List from './List';
import Filters from './Filters';
import { BuildFilters } from './filters/buildFilters';
import { ApplyFilters } from './filters/applyFilters';
import { NAME_FILTER, TYPE_FILTER, WEAKNESS_FILTER } from '../constants/filters'

function mapStateToProps(state) {
  return {
    url: state.url,
    list: state.list,
    filteredList: state.filteredList,
    isLoaded: state.isLoaded,
    error: state.error,
    nameToCheck: state.nameToCheck,
    typesChecked: state.typesChecked,
    weaknessesChecked: state.weaknessesChecked
  };
};

function mapDispatchToProps(dispatch) {
  return {
    updateList: newList => dispatch(updateList(newList)),
    updateFilteredList: newFilteredList => dispatch(updateFilteredList(newFilteredList)),
    updateFetchStatus: newFetchStatus => dispatch(updateFetchStatus(newFetchStatus)),
    updateFetchError: newFetchError => dispatch(updateFetchError(newFetchError)),
    updateTypesList: newTypesList => dispatch(updateTypesList(newTypesList)),
    updateWeaknessesList: newWeaknessesList => dispatch(updateWeaknessesList(newWeaknessesList))
  };
}

class Pokemons extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef(); // Source: https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
    this.handleUpdateFetchStatus = this.handleUpdateFetchStatus.bind(this);
    this.handleUpdateFetchError = this.handleUpdateFetchError.bind(this);
    this.handleUpdateList = this.handleUpdateList.bind(this);
    this.handleUpdateFilteredList = this.handleUpdateFilteredList.bind(this);
    this.handleApplyAllFilters = this.handleApplyAllFilters.bind(this);
  }
  
  handleUpdateFetchStatus(newStatus) {
    this.props.updateFetchStatus(
      {
        fetchStatus: newStatus
      }
    )
  }

  handleUpdateFetchError(newError) {
    this.props.updateFetchError(
      {
        fetchError: newError
      }
    )
  }

  handleUpdateList(newList){
    var filters = BuildFilters(newList);
    this.props.updateList({list: newList})
    this.props.updateTypesList({types: filters.types})
    this.props.updateWeaknessesList({weaknesses: filters.weaknesses})
  }

  handleUpdateFilteredList(newList){
    this.props.updateFilteredList({filteredList: newList});
  }

  handleApplyAllFilters() {
    var updatedList = [];
    updatedList = ApplyFilters(this.props.list, NAME_FILTER, this.props.nameToCheck);
    updatedList = ApplyFilters(updatedList, TYPE_FILTER, this.props.typesChecked);
    updatedList = ApplyFilters(updatedList, WEAKNESS_FILTER, this.props.weaknessesChecked);
    this.handleUpdateFilteredList(updatedList);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Source: https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
    if (prevProps.nameToCheck !== this.props.nameToCheck) {
      return true;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Source: https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate
    if (snapshot !== null) {
      this.handleApplyAllFilters();
    }
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(res => res.json())
      .then(
        (result) => {
          this.handleUpdateList(result.pokemon);
          this.handleUpdateFilteredList(result.pokemon);
          this.handleUpdateFetchStatus(true);
          this.handleUpdateFetchError(null);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.handleUpdateFetchStatus(false);
          this.handleUpdateFetchError(error);
        }
      )
  }

  render() {
    var totalPokemons = this.props.list.length
    var filteredPokemons = this.props.filteredList.length
    return(
      <React.Fragment>
        <div>
          <Status/>
        </div>
        <div>
          <Filters total={totalPokemons} filtered={filteredPokemons} applyAllFilters={this.handleApplyAllFilters}/>
        </div>
        <div>
          <List />
        </div>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokemons);