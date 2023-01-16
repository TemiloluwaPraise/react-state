import React, { Component } from "react";

class App extends Component {
  state = {
    person: {
      fullName: "Temiloluwa Praise",
      bio: "A software developer with 5 years of experience",
      imgSrc: "./src/Component/image.jpg",
      profession: "Developer",
    },
    shows: false,
  };

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ time: Date.now() - this.state.time });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Show</button>
        {this.state.shows && (
          <div>
            <h1>{this.state.person.fullName}</h1>
            <p>{this.state.person.bio}</p>
            <img
              src={this.state.person.imgSrc}
              alt={this.state.person.fullName}
            />
            <p>{this.state.person.profession}</p>
            <p>Time since last mount: {this.state.time}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
