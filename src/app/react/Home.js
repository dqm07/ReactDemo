import React from 'react'
import { Button } from 'antd'

class Home extends React.Component {
  gotoFun(router) {
    this.props.history.push(router)
  }

  render() {
    return (
      <div class="main">
          <Button type="primary" onClick={() => this.gotoFun('/form') }>表单Demo</Button>
          <Button type="primary" onClick={() => this.gotoFun('/redux') }>Redux Demo</Button>
          <Button type="primary" onClick={() => this.gotoFun('/mobx') }>Mobx Demo</Button>
      </div>
    )
  }
}

export default Home