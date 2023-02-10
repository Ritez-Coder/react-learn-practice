import React, { Component } from 'react'
import LifeCycle from './LifeCycle'

export default class Main extends Component {
     constructor(props) {
          super(props)
          this.state = {
               mount : true
          }
          this.mounted = () => this.setState({mount: true})
          this.unmounted = () => this.setState({mount: false})
     }
  render() {
     console.log(this.state.mount)
    return (
      <div>
        <button disabled={this.state.mount} onClick={this.mounted}>Mount</button>
        <button disabled={!this.state.mount} onClick={this.unmounted}>UnMount</button>
        {this.state.mount ?  <LifeCycle /> : null }
      </div>
    )
  }
}
