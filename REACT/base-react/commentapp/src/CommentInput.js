import  React from 'react'

class CommentInput extends React.Component{
    state={
        userName:'',
        comment:''
    }
    handleUserName=(e)=>{
        this.setState({
            userName:e.target.value
        })
    }
    handleCommentChange=(e)=>{
        this.setState({
            comment:e.target.value
        })
    }
    handleSubmit=()=>{
        // 结构数据
        const {userName,comment} = this.state;
        const { onSubmit } = this.props;
        console.log(userName,comment)
        // 运行父组件的函数传值 实现通信
        onSubmit({
            userName,
            comment
        })
    }
    render() {
        const {userName ,comment} = this.state
        return (
            <div>
                <div>
                    用户名:
                    <input type="text" value={userName} onChange={this.handleUserName} placeholder="请输入用户名" />
                </div>
                <div>
                    评论:
                    <textarea value={comment} onChange={this.handleCommentChange} cols="30" rows="10"></textarea>
                </div>
                <div>
                    <button onClick={this.handleSubmit.bind(this)}>评论</button>
                </div>
            </div>
        )
    }
}
export default CommentInput;