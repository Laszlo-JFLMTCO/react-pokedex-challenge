import React from 'react';

class Pokemon extends React.Component{
  render(){
    return(
      <div className="border border-secondary m-1">
        <div className="d-inline-flex m-1 align-items-center">
          <h4 className="align-middle">{ this.props.details.name }</h4>
        </div>
        <div className="d-inline-flex m-1">
          <div className="col border-left">
            <div><span>Num:</span></div>
            <div><span>{ this.props.details.num }</span></div>
          </div>
          <div className="col border-left">
            <div><span>Type:</span></div>
            <div><span>{ this.props.details.type.join(';') }</span></div>
          </div>
          <div className="col border-left">
            <div><span>Weakness:</span></div>
            <div><span>{ this.props.details.weaknesses.join(';') }</span></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pokemon;