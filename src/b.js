import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Consumer } from './home'
import { testContext } from './a'

class B extends Component {
  render() {
    return (
      <div>
        <Consumer>
          {(value) =>
            <div >
              我是B组件,接收的值是:{value}
            </div>
          }
        </Consumer>

        <testContext.Consumer>
          {
            (value) =>
              <div>这里显示接收的A组件的值：{value}</div>

          }
        </testContext.Consumer>
      </div>
    )
  }
}
export default withRouter(B);