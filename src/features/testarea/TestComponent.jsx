import React, { Component } from 'react'
import { connect } from 'react-redux'
import {incrementCounter,decrementCounter} from './testActions'
import { Button } from 'semantic-ui-react'

const mapState=(state)=>({
    data:state.test.data
})
const actions={
    incrementCounter,
    decrementCounter
}

class TestComponent extends Component {
    render() {
        const {data,incrementCounter,decrementCounter}=this.props;
        return (
            <div>
              <h1>Test Component</h1> 
              <h3>Answer is {data}</h3> 
              <Button onClick={incrementCounter} positive content="INCREMENT"></Button>
              <Button onClick={decrementCounter} negative content="DECREMENT"></Button>
            </div>
        )
    }
}

export default connect(mapState,actions)(TestComponent)