// 任何页面导入React
import React from 'react'
import Child from './Child'
import './index.less'

// 导出 Life 类 继承 React 组件
export default class Life extends React.Component{

    // 构造初始化一个实例
    constructor(props) {
        super(props);
        this.state = {
            count:0
        };
      }
    //   state={
    //       count:0
    //   }
    handleAdd=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    handleClick(){
        this.setState({
            count:this.state.count+1
        })
    }
    // 最重要的语法 渲染
    render(){
        // 里面括号对象
        // let style={
        //     padding:50
        // }
        return <div className="content">
            <p>React生命周期介绍</p>
            <button onClick={this.handleAdd}>点击一下</button>
            <button onClick={this.handleClick.bind(this)}>点击一下</button>
            <p>{this.state.count}</p>
            <Child name={this.state.count}></Child>
        </div>
       
    }
}