// eslint-disable-next-line
import React ,{ Component } from 'react'

class Child extends React.Component{
    state = {

    }
    handleClick =(e) =>{
        console.log(this)
        this.handleAnotherFun()
        console.log(e.target.innerHTML)
    }
    handleAnotherFun =()=>{
        console.log('handleAnotherFun')
    }
    handleChange = (e) =>{
        console.log(e.target.value)
        this.setState({
            inputValue:e.target.value
        })
    }
    render () {
        return (
            <div onClick={this.handleClick.bind(this    )}>
                <p>{this.props.msg}</p>
                <input type="text" value={this.state.inputValue} placeholder="请输入内容"
                    onChange={this.handleChange.bind(this)}/>
            </div>
        )
    }
}
export default Child