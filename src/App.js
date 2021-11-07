import React, { Component } from 'react';
import LifeCicleSample from './LiftcycleSample';
import ErrorBoundary from './ErrorBoundary';

function getRandonColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000',
  };

  handleClick = () => {
    this.setState({
      color: getRandonColor(),
    });
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}> 랜덤색상 </button>
        <ErrorBoundary>
          <LifeCicleSample color={this.state.color} />
        </ErrorBoundary>
      </>
    );
  }
}
export default App;
