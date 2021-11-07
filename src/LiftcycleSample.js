import React, { Component } from 'react';

class LifeCicleSample extends Component {
  state = {
    number: 0,
    color: null,
  };
  MyRef = null;

  // 첫실행시 state를 만들기 위한 메서드
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  // 업데이트 될떄마다 첫번째로 시작되는 메서드
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps !== prevState) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log('componentDidmount');
  }

  // 두번째로 실행되며 true,false 반환하여 렌더링 할지 말지를 결정, 여기서 최적화 처리가 이루워짐
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  /// render가 끝나고 브라우저에 실제로 반영되기 직전에 호출
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBefotUpdate');
    if (prevProps.color !== this.props.color) {
      return this.MyRef.style.color;
    }
    return null;
  }

  /// 업데이트가 끝난 직후 이므로, DOM 관련처리를 해도 무방합니다. 이전 데이터  접근이 가능합니다.
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);

    if (snapshot) {
      console.log('업데이트되기 직전 색상', snapshot);
    }
  }

  render() {
    // 3번째로 실행되는 메서드
    console.log('render');

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        {this.props.missing.value}
        <h1 style={style} ref={(ref) => (this.MyRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCicleSample;
