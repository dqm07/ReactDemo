import React from 'react'
import Add from './redux/Add'
import List from './redux/List'

class ReduxDemo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Add />
        <List />
      </div>  
    )
  }
}

export default ReduxDemo