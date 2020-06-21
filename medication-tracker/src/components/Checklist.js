import React from "react";

class Checklist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: [],
    };
  }

  render() {
    return (
      <div className="App">
        <div>Add an Item.....</div>
      </div>
    );
  }
}

export default Checklist;
