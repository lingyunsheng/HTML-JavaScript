import React from 'react';
import Child from './Child'
import './App.css';

// classComponent
class App extends React.Component {
  state = {
    msg: 'from state'
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        msg: 'change msg'
      })
    }, 3000)
  }
  renderFooter = () => {
    return (
      <footer>
        foot
      </footer>
    )
  }
  render() {
    const { msg } = this.state;
    const isRed = true;
    const red = 'red';
    const Main = (<p>main</p>);
    const lists = [1, 2, 3, 4, 5];
    const listsNode = lists
    .map((list, index) => <li key={index}>{list}</li>);
    return (
      <div className={isRed ? red : ''}>
        <p>hello world </p>
        <span>
          {
            msg + '123'
          }
        </span>
        <div>
          {
            isRed ?
            <span>red</span> : <span>nored</span>
          }
        </div>
        
        {
          listsNode
        }
        <ul>
          {
            lists.map((list, index) => <li key={index}>{list}</li>)
          }
          </ul>
        {
          Main
        }
        {this.renderFooter()}
        <Child msg = {msg}/>
      </div>
    )
  }
}
export default App;