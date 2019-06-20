import React from 'react';
import Child from './Child';
import Child1 from './Child1';
import Context from './Context';
import Context1 from './Context1';
import './App.css';
class App extends React.Component {
  constructor(){
    super();
    this.objRef = React.createRef();
  }
  state = {
    count: 0,
    showChild: true
  }
  handleChildPropsChange = () => {
    let { count } = this.state;
    // count ++;
    this.setState({
      count
    })
  }
  handleToggleChild = () => {
    const { showChild } = this.state;
    this.setState({
      showChild: !showChild
    })
  }
  componentDidMount() {
    this.refs.stringRef.innerHTML = 'new string Ref';
    this.methodRef.innerHTML='new method ref';
    this.objRef.current.innerHTML='new Object ref'
  }
  render() {
    const { count, showChild } = this.state;
    return (
      <div>
        <span ref="stringRef">react ref</span>
        {/* 回调的方法 */}
        <span ref={(ref)=>this.methodRef =ref}>
          method ref
        </span>
        {/* 对象的方法  推荐 */}
        <span ref={this.objRef}>
          object ref
        </span>
        {/* innerHTML */}
     
     {/* 加粗  */}
        <div dangerouslySetInnerHTML={{
          __html:`   <strong>strong</strong>`
        }}>

        </div>
        <button onClick={this.handleChildPropsChange}>
          child component props change
        </button>
        <button onClick={this.handleToggleChild}>
          toggle Child
        </button>
        {
          !showChild ?
            <Child count={count} /> : <Child1 count={count} />
        }
        {/* <Child count={count}/> */}
        <Context>
        小华
          <p>姓名</p>
          19
          <p>年龄</p>
        </Context>
        <p>react 16.x.x</p>
        <Context1></Context1>
        {/* 通过 this.props.children 获取 */}
      </div>
    )
  }
}
export default App;