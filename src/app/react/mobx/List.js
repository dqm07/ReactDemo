import React from 'react'
import { Input, Button } from 'antd' 
import { observer } from 'mobx-react'

@observer
class List extends React.Component {
  render() {
    return (
      <ul className="add-list">
        {
          console.log(typeof this.props.addState.List, this.props.addState.List)
          // this.props.addState.List.map(todo => {
          //   <div key={todo.index}>
          //     <li>{todo.value}</li>
          //     <Button onClick={() => this.props.addState.deleteList(todo.index)}>DELETE</Button>
          //   </div>  
          // })
        }
      </ul>  
    )
  }
}

export default List 