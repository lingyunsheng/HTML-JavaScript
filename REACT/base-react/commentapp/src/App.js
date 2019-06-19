
import React from 'react';
import './App.css';
import CommentList from './CommentList';
import CommentInput from './CommentInput'

class App extends React.Component{
  state = {
    commentLists :[]
  }
  handleSubmit(val){
    console.log('从子组件',val)
    let commentLists = this.state.commentLists.slice(0);
    commentLists.push(val)
    this.setState({
      commentLists
    })

  }
  render () {
    const {commentLists} = this.state
    return (
      <div>
        <CommentInput onSubmit={this.handleSubmit.bind(this)}/>
        <CommentList commentLists={commentLists}/>
      </div>
    )
  }
}

export default App;
