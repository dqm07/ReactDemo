import React from 'react'
import { Input, Button } from 'antd' 
import { observer } from 'mobx-react'

@observer
class Add extends React.Component {
  render() {
    let input

    return (
      <div className="add-box">
        <span>{this.props.addState.List}</span>
        <Input placeholder="addItemName" ref={node => input = node}/>
        <Button type="primary" onClick={() => this.props.addState.addList(input.state.value)}>ADD</Button>
      </div>
    )
  }
}

export default Add 