import React, { Component } from 'react';
import B from './b';
import C from './c';
import D from './d';
import { Button } from 'antd';


export const { Provider, Consumer } = React.createContext();
export const fistText = React.createContext();
export const secondText = React.createContext();
class Show extends Component {
  constructor() {
    super();
    this.state = {
      isClick: false
    }
  }


  handleOnClick = () => {
    const isClick = !this.state.isClick;
    this.setState({
      isClick
    })
  }



  render() {

    return (

      <div>
        <Provider value={this.state}>
          <Button onClick={() => { this.handleOnClick() }} >点击改变数据</Button>
          <B />
          <C />
        </Provider>
        <fistText.Provider value={'这是第一个context的传值'}>
          <secondText.Provider value={'这是第二个context的传值'}>
            <D />
          </secondText.Provider>

        </fistText.Provider>

      </div>

    )
  }
}


export default Show;
