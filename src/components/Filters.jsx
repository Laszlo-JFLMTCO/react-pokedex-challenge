import React from 'react'
import NameFilter from './filters/NameFilter'
import TypeFilter from './filters/TypeFilter'
import WeaknessFilter from './filters/WeaknessFilter'

class Filters extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div>
          <NameFilter applyAllFilters={this.props.applyAllFilters}/>
        </div>
        <div>
          <TypeFilter applyAllFilters={this.props.applyAllFilters}/>
        </div>
        <div>
          <WeaknessFilter applyAllFilters={this.props.applyAllFilters}/>
        </div>
      </React.Fragment>
    )
  }
}

export default Filters;