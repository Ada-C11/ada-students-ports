// NameDisplay.js
import React from 'react';
import './NameDisplay.css'

class NameDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      displayName: this.props.displayName,
      color: 'red',
    };
  }

  onButtonClick = () => {
    console.log(this.state.displayName);

    this.setState({
      displayName: !this.state.displayName,
    });
    console.log(this.state.displayName);
  }

  onColorChange = (color) => {
    this.setState({
      color: color,
    });
  }

  onNameChange = (event) => {
    console.log(event);
  }

  render() {
    let display = 'Sorry I don\'t know you';

    if (this.state.displayName) {
      display = `Hello, ${this.state.name}`;
    }
    return (
      <section className={this.state.color}>
        {display}
        <button onClick={this.onButtonClick}>
          Toggle Name
        </button>
        <input onChange={this.onNameChange} />


        <button onClick={() => this.onColorChange('red')}>
          Red
        </button>
        <button onClick={() => this.onColorChange('green')}>
          Green
        </button>
        <button onClick={() => this.onColorChange('blue')}>
          Blue
        </button>
      </section>
    )
  }

}

export default NameDisplay;
