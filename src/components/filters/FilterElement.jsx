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
        <div className="d-inline-block">
          <input className="ml-2" type="checkbox" id={id} name={this.props.name} onChange={this.handleChange}/>
          <label className="ml-1" htmlFor={id}>{this.props.name}</label>
        </div>
      </React.Fragment>
    )
  }
}

export default FilterElement;