import React, { Component } from "react";
import Leval from "./leval";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 1,
      num2: 1,
      score: 0,
      responce: "",
      incorrect: false
    };
  }
  updateResponce = event => {
    this.setState({
      responce: event.target.value
    });
  };
  inputKeyPress = event => {
    if (event.key === "Enter") {
      const answer = parseInt(this.state.responce);
      if (answer === this.state.num1 + this.state.num2) {
        //answer is currect
        this.setState(state => ({
          score: state.score + 1,
          num1: Math.ceil(Math.random() * 10),
          num2: Math.ceil(Math.random() * 10),
          responce: "",
          incorrect:false
        }));
      } else {
        //answer is wrong
        this.setState({
          responce: "",
          incorrect: true
        });
      }
    }
  };
  render() {
    if (this.state.score >= 5) {
      return this.renderWin();
    } else {
      return this.renderProblem();
    }
  }
  renderProblem() {
    return (
      <div>
        <h1 className={this.state.incorrect ? "incorrect" : ""}>
          {this.state.num1}+{this.state.num2}
        </h1>
        <input
          onKeyPress={this.inputKeyPress}
          onChange={this.updateResponce}
          value={this.state.responce}
        />
        <div>Score:{this.state.score}</div>
      </div>
    );
  }
  renderWin() {
    return <div>
        <h1>Congratulations! Leval 1 Completed</h1>
        <Leval/>
        </div>;
  }
}

export default Home;
