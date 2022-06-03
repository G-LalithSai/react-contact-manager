import React from "react";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.name === "") {
      alert("Enter details");
      return;
    }
    this.props.AddContactHandler(this.state);
    this.setState({ name: "", email: "" });
  };
  render() {
    return (
      <div className="ui main">
        <h3>Add Contact</h3>
        <form onSubmit={this.add}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label>Name : </label>
                </td>
                <td>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Number : </label>
                </td>
                <td>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <button type="submit">Add Contact</button>
        </form>
        <br />
        <hr />
      </div>
    );
  }
}

export default AddContact;
