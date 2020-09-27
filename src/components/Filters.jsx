import React from 'react'
import NameFilter from './filters/NameFilter'
import TypeFilter from './filters/TypeFilter'
import WeaknessFilter from './filters/WeaknessFilter'
import FilterTitle from './filters/FilterTitle'

class Filters extends React.Component{
  render(){
    return(
      <React.Fragment>
        <div>
          <div>
            <FilterTitle filtered={this.props.filtered}/>
          </div>
          <div>
            <NameFilter applyAllFilters={this.props.applyAllFilters}/>
          </div>
          <div>
            <TypeFilter applyAllFilters={this.props.applyAllFilters}/>
          </div>
          <div>
            <WeaknessFilter applyAllFilters={this.props.applyAllFilters}/>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Filters;