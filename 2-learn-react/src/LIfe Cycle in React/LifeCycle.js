import React, { Component } from 'react'

export default class LifeCycle extends Component {
     constructor(props) {
          console.log("This is Contructor.....")
          super(props)
          this.state = {
               num: 0
          }
     }

     componentDidMount = () => {
          console.log("Component Did Mount")
          console.log("_________________________________")
     }

     componentDidUpdate = (prevProps , prevState , snapshot) => {
          console.log("Componet Did Update")
          console.log("_________________________________")
     }

     componentWillUnmount = () => {
          console.log("Component Will UnMount...")
          console.log("__________________________________")
     }

     increment = () => {
          this.setState({
               num: this.state.num + 1
          })
     }
     decrement = () => {
          if (this.state.num > 0) {
               this.setState({
                    num: this.state.num - 1
               })
          }

     }

     render() {
          console.log("All things Rendered......")
          return (
               <div>
                    <h1>{this.state.num}</h1>
                    <button onClick={this.increment}>Increase</button>
                    <button onClick={this.decrement}>Decrease</button>
               </div>
          )
     }
}
