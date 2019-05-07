import React from 'react'
import { Input, Button } from 'antd'
import { delectList } from '../../redux/actions';
import { connect } from 'react-redux';

const List  = ({todos, delect}) => (
  <ul className="add-list">
    { 
      todos.map(todo => (
        <div key={todo.index}>
          <li>{todo.value}</li>
          <Button onClick={() => delect(todo.index)}>DELETE</Button>
        </div>
      )) 
    }
  </ul>
)

const mapStateToProps = state => ({
  todos: state.add
})

const mapDispatchToProps = dispatch => ({
  delect: id => dispatch(delectList(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)