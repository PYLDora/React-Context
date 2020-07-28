import React, { Component } from 'react';
import Show from './show'

export const { Provider, Consumer } = React.createContext();
class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let value = 'hekki'
    return (
      <Provider value={value}>
        <div>预备传的值：{value}</div>
        <Show />
      </Provider>
    )

  }
}

export default Home;
