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
    console.log(this.props.filteredList);
    var filteredList = this.props.filteredList.map((pokemon) => (
      <Pokemon key={pokemon.id} details={pokemon}/>
    ));
    console.log(filteredList);
    return(
      <React.Fragment>
        { filteredList }
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps)(List);