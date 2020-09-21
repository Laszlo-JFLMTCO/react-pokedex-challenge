import React from 'react'

class FilterElement extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.props.onChange(event.target);
  }

  render() {
    var id = this.props.prefix + this.props.name;
    return (
      <React.Fragment>
        <input type="checkbox" id={id} name={this.props.name} onChange={this.handleChange}/>
        <label htmlFor={id}>{this.props.name}</label>
      </React.Fragment>
    )
  }
}

export default FilterElement;