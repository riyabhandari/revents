import React, { Component } from 'react'
import { connect } from 'react-redux'
import {incrementCounter,decrementCounter} from './testActions'
import { Button } from 'semantic-ui-react'
import {openModal} from '../modal/modalActions'
const mapState=(state)=>({
    data:state.test.data
})
const actions={
    incrementCounter,
    decrementCounter,
    openModal
}

class TestComponent extends Component {
    render() {
        const {data,incrementCounter,decrementCounter,openModal}=this.props;
        return (
            <div>
              <h1>Test Component</h1> 
              <h3>Answer is {data}</h3> 
              <Button onClick={incrementCounter} positive content="INCREMENT"></Button>
              <Button onClick={decrementCounter} negative content="DECREMENT"></Button>
              <Button onClick={()=>openModal('TestModal',{data:42})} color='teal' content="Open Modal"></Button>
              <br/><br/>
              
            </div>
        )
    }
}

export default connect(mapState,actions)(TestComponent)