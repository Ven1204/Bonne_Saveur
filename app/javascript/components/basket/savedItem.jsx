import React, { Component } from 'react';

// defines a class SavedItem that will show how many items you saved.
class SavedItem extends Component {
  constructor(props) {
    super(props);
  }

  // The initial count is 0
  state = {
    item: 0
  }

  // this event triggers when you click on the button which will add +1 to teh initial count
  handleSave = () => {
    this.setState({item: this.state.item + 1})
  }
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleSave} className='btn btn-secondary btn-sm'>Save item</button>
      </div>
    );
  }
}

export default SavedItem;
