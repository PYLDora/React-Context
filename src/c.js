import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Consumer } from './show'


class C extends Component {
  render() {
    console.log(this.props)
    return (
      <div >
        <Consumer >
          {(value) =>
            <div>我是C组件,接收的值是：{value.isClick ? 'hello' : 'goodbye'}</div>
          }

        </Consumer>
      </div>

    )
  }
}
export default withRouter(C);