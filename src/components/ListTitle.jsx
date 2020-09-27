import React from 'react'

class FilterTitle extends React.Component{
  render(){
    return(
      <React.Fragment>
        <h2>
          <span className="mr-3">
            Filtered List  
          </span>
            <span className="badge badge-secondary">{this.props.filtered}</span>
        </h2>
      </React.Fragment>
    )
  }
}

export default FilterTitle;