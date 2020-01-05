import React, { Component } from 'react';

class DeletePolicyForm extends Component {
  state = {
    name: '',
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { deletePolicy } = this.props;

    if (deletePolicy) deletePolicy(this.state);

    this.setState({
      name: '',
    });
  };

  render() {
    const { name } = this.state;

    return (
      <div>
        <h2>Delete Policy Form</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            name="name"
            placeholder="Name"
            type="text"
            value={name}
          />
          <input type="submit" value="Delete Policy Form" />
        </form>
      </div>
    );
  }
}

export default DeletePolicyForm;
