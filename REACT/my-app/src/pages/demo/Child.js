// 任何页面导入React
import React from 'react'

// 导出 Life 类 继承 React 组件
export default class Child extends React.Component {

    // 构造初始化一个实例
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    // 组件渲染初始化之前
    componentWillMount() {
        console.log('will mount');
    }
    // 组件渲染初始化之后
    componentDidMount() {
        console.log('did mount');
    }
    // 接收属性
    componentWillReceiveProps(newProps) {
        console.log('will props' + newProps.name);
    }
    // 调用setState 就会更新的 API方法
    shouldComponentUpdate() {
        console.log('should update');
        // 默认 returntrue
        return true;
    }
    // 组件更新之前
    componentWillUpdate() {
        console.log('will update');
    }
    // 组件更新之后
    componentDidUpdate() {
        console.log('did update');
    }
    render() {
        return <div>
            <p>这里是子组件，这是子组件的生命周期</p>
            <p>{this.props.name}</p>
        </div>
    }
}