import React from 'react'
import { connect } from 'react-redux'
import { updateFetchError, updateFetchStatus, updateFilteredList } from '../actions/index';
import Status from './Status';
import List from './List';

function mapStateToProps(state) {
  return { 
    filteredList: state.filteredList,
    isLoaded: state.isLoaded,
    error: state.error
  };
};

function mapDispatchToProps(dispatch) {
  return {
    updateFilteredList: newFilteredList => dispatch(updateFilteredList(newFilteredList)),
    updateFetchStatus: newFetchStatus => dispatch(updateFetchStatus(newFetchStatus)),
    updateFetchError: newFetchError => dispatch(updateFetchError(newFetchError))
  };
}

class Pokemons extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpdateFetchStatus = this.handleUpdateFetchStatus.bind(this);
    this.handleUpdateFetchError = this.handleUpdateFetchError.bind(this);
    this.handleUpdateFilteredList = this.handleUpdateFilteredList.bind(this);
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

  handleUpdateFilteredList(newList){
    this.props.updateFilteredList(
      {
        filteredList: newList
      }
    )
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
      .then(res => res.json())
      .then(
        (result) => {
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
    return(
      <React.Fragment>
        <div>
          <Status/>
        </div>
        <div>
          <List />
        </div>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokemons);