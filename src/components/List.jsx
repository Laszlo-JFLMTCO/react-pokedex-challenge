import React from 'react';
import { connect } from 'react-redux';
import Pokemon from './Pokemon';
import ListTitle from './ListTitle';

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
    var items = filteredList.length;
    return(
      <React.Fragment>
        <ListTitle filtered={items}/>
        { filteredList }
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps)(List);