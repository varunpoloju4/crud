import React, { Component } from 'react';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: '',
      selectedSkill: 'React'
    };
  }

  changeTextValue = (event) => {
    this.setState({
      textValue: event.target.value
    });
  };

  changeSkill = (event) => {
    this.setState({
      selectedSkill: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form>
          <label>College Name:</label>
          <input type="text" value={this.state.textValue} onChange={this.changeTextValue} />
          <br />
          <label>Skill:</label>
          <select value={this.state.selectedSkill} onChange={this.changeSkill}>
            <option>React</option>
            <option>Spring Boot</option>
            <option>Angular</option>
          </select>
        </form>
      </div>
    );
  }
}

export default Form;