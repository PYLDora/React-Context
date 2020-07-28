import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

export const testContext = React.createContext();
class A extends Component {
  render() {
    return (
      <testContext.Provider value={'helloworld'}>
        <div>我是A组件</div>
      </testContext.Provider>
    )
  }
}
export default withRouter(A);