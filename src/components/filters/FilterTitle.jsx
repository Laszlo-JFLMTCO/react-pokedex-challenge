import React from 'react'

class FilterTitle extends React.Component{
  render(){
    return(
      <React.Fragment>
        <h2>
          <span className="mr-3">
            Filters  
          </span>
          <button type="button" className="btn btn-secondary">
            After Filters Applied <span className="badge badge-light">{this.props.filtered}</span>
          </button>
        </h2>
      </React.Fragment>
    )
  }
}

export default FilterTitle;