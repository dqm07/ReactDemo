import React from 'react'
// import Add from './mobx/Add'
// import List from './mobx/List'
import { Input, Button } from 'antd' 
import { observable, action, reaction, autorun } from 'mobx'
import { observer } from 'mobx-react'


let i = 0
let addState = observable({
  List: 0,
  addList: action(function addList(value) {
    // addState.List.push({
    //   value: value,
    //   index: i++
    // })
    addState.List++
    console.log(value, addState.List)
  }),
  deleteList: action(function deleteList(index) {
    addState.List.splice(index, 1)
  })
})

@observer
class Add extends React.Component {
  render() {
    let input

    return (
      <div className="add-box">
        <span>{this.props.addState.List}</span>
        <Input placeholder="addItemName" ref={node => input = node}/>
        <Button type="primary" onClick={() => this.onAdd(input.state.value)}>ADD</Button>
      </div>
    )
  }

  onAdd(v) {
    this.props.addState.addList(v)
  }
}

// @observer
// class List extends React.Component {
//   render() {
//     return (
//       <ul className="add-list">
//         {
//           console.log(this.props.addState.List)
//           // this.props.addState.List.map(todo => {
//           //   <div key={todo.index}>
//           //     <li>{todo.value}</li>
//           //     <Button onClick={() => this.props.addState.deleteList(todo.index)}>DELETE</Button>
//           //   </div>  
//           // })
//         }
//       </ul>  
//     )
//   }
// }  

class MobxDemo extends React.Component {
  render() {
    return (
      <div>
        <Add addState = {addState}/>
        {/* <List addState = {addState}/> */}
      </div>  
    )
  }
}

export default MobxDemo