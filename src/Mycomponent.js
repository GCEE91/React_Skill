import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';

class Mycomponent extends Component {
    // 여기에 defaultProps나 propTypes 들어갈 수 있음 static defaultProps ={} 이런식으로
  render() {
      const {name,children,favoriteNumber} = this.props;
    return (
    <div>
        안녕하세요, 제 이름은 {name} 입니다.<br/>
        children 값은 {children} 입니다.
        <br/>
        제가 좋아하는 숫자는 {favoriteNumber} 입니다.
    </div>
    );
  }
}

Mycomponent.defaultProps = {
  name: '기본이름',
};
Mycomponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default Mycomponent;
