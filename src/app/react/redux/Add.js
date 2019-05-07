import React from 'react'
import { Input, Button, Divider } from 'antd'
import { addList } from '../../redux/actions';
import { connect } from 'react-redux';

class Add extends React.Component {
  handleAdd(e, value) {
    e.preventDefault()
    if (!value) {
      return
    }

    this.props.add(value)
  }

  render() {
    let input
    return (
      <div className="add-box">
        <Input placeholder="addItemName" ref={node => (input = node)}/>
        <Button type="primary" onClick={(e) => this.handleAdd(e, input.state.value)}>Add</Button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  state: state
})

const mapDispatchToProps = dispatch => ({
  add: text => dispatch(addList(text))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Add)