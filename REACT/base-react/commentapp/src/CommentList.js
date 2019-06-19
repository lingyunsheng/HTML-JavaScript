import  React from 'react'

class CommentList extends React.Component{
    render() {
        const {commentLists} = this.props
        return (
            <div>
                <ul>
                    {
                        commentLists.map(({userName,comment},i) =>(
                        <li>
                            {userName}
                            {comment}
                        </li>
                        ))
                    }
                </ul>
            </div>  
        )
    }
}
export default CommentList;