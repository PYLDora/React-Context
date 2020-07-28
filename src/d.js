import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { fistText, secondText } from './show'

export const testContext = React.createContext();
class D extends Component {
  render() {
    return (
      <fistText.Consumer>
        {(value) =>
          <secondText.Consumer>
            {(val) =>
              <div>
                我是D组件，我接收的值：{value},{val}
              </div>
            }
          </secondText.Consumer>
        }
      </fistText.Consumer>
    )
  }
}
export default withRouter(D);