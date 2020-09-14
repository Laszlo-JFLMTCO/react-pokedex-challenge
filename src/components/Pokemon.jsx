import React from 'react';

class Pokemon extends React.Component{
  render(){
    return(
      <div>
        <h3>{ this.props.details.name }</h3>
        <p>
          <span>Num: { this.props.details.num }</span>
             |   
          <span>Type: { this.props.details.type.join(';') }</span>
             |   
          <span>Weaknesses: { this.props.details.weaknesses.join(';') }</span>
        </p>
      </div>
    );
  }
}

export default Pokemon;