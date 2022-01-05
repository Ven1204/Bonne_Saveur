import React, {Component} from 'react'

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (

      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            <div className='pt-2 pb-2 mt-2 mt-2 pl-4 pr-4'>
              First Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </div>
            <div className='pt-2 pb-2 mt-2 mt-2 pl-4 pr-4'>
              Last Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </div>
            <div className='pt-2 pb-2 mt-2 mt-2 pl-4 pr-4'>
              Email:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </div>
            <div className='pt-2 pb-2 mt-2 mt-2 pl-4 pr-4'>
              Password:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </div>
            <div className='pt-2 pb-2 mt-2 mt-2 pl-4 pr-4'>
              Confirm Password:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </div>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>

    );
  }
}

export default NameForm;
