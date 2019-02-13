import React, { Component } from "react";

//JSX expression is like a javascript object
//React class is not a css class - for css class we ahve to use className
//state - in react property that contain all data that this compenent need
// props - props is the data that we give to component and state is the data for local component
//The component that owns a piece of the state, should be the one modifying it
class Counter extends Component {
  //   state = {
  //     value: this.props.counter.value
  //   };

  // imageUrl: "https://picsum.photos/200",
  // tags: []
  //   style = {
  //     fontSize: 50,
  //     fontWeight: "bold"
  //   };

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>Tere are no tags!</p>;

  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  //   doHandleIncrement = () => {
  //     this.handleIncrement({ id: 1 });
  //   };

  //   handleIncrement = () => {
  //     this.setState({ value: this.state.value + 1 });
  //   };

  render() {
    return (
      <div>
        <p style={{ fontSize: 18 }}>{this.props.name}</p>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>

        {/* <img src={this.state.imageUrl} alt="" /> */}
        {/*   style={this.style} style={{ fontSize : 30 }} */}
        {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()} */}
        {/* React.Fragment */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

//true && false = false
//true && 'Hi' = "Hi"
//true && 'Hi' && 1 = 1
