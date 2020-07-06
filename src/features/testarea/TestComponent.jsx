import React, { Component } from 'react'
import { connect } from 'react-redux'
import {incrementAsync,decrementAsync} from './testActions'
import { Button } from 'semantic-ui-react'
import {openModal} from '../modal/modalActions'

const mapState=(state)=>({
    data:state.test.data,
    loading:state.async.loading,
    buttonName:state.async.elementName
})
const actions={
    incrementAsync,
    decrementAsync,
    openModal
}

class TestComponent extends Component {
    render() {
        const {data,incrementAsync,decrementAsync,openModal,loading,buttonName}=this.props;
        return (
            <div>
              <h1>Test Component</h1> 
              <h3>Answer is {data}</h3> 
              <Button name="increment" loading={buttonName==='increment' && loading} onClick={(e)=>incrementAsync(e.target.name)} positive content="INCREMENT"></Button>
              <Button name="decrement" loading={buttonName==='decrement' && loading} onClick={(e)=>decrementAsync(e.target.name)} negative content="DECREMENT"></Button>
              <Button onClick={()=>openModal('TestModal',{data:42})} color='teal' content="Open Modal"></Button>
              <br/><br/>
              
            </div>
        )
    }
}

export default connect(mapState,actions)(TestComponent)