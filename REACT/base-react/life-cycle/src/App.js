import React from 'react';
import Child from './Child';
import Child1 from './Child1';
import './App.css';
class App extends React.Component {
  state = {
    count: 0,
    showChild:true
  }
  handleChildPropsChange  = () => {
    let  { count } = this.state;
    // count ++;
    this.setState({
      count
    })
  }
  handleToggleChild = () => {
    const {showChild}=this.state;
    this.setState({
      showChild:!showChild
    })
  }
  render() {
    const  { count ,showChild} = this.state;
    return (
      <div>
        <button onClick={this.handleChildPropsChange}>
          child component props change
        </button>
        <button onClick={this.handleToggleChild}>
          toggle Child
        </button>
        {
          !showChild?
          <Child count={count}/>:<Child1 count={count}/>
        }
        {/* <Child count={count}/> */}
      </div>
    )
  }
}
export default App;