import React from 'react';
import { connect } from 'react-redux';
import './List.css';
import Pokemon from './Pokemon';

function mapStateToProps(state) {
  return { 
    filteredList: state.filteredList
  };
};

class List extends React.Component {
  render() {
    var filteredList = this.props.filteredList.map((pokemon) => (
      <Pokemon key={pokemon.id} details={pokemon}/>
    ));
    return(
      <React.Fragment>
        { filteredList }
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps)(List);