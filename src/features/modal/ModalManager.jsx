import { connect } from "react-redux";
import React from 'react'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'
const { default: TestModal } = require("./TestModal");

const modalLookup={
    TestModal,
    LoginModal,
    RegisterModal
}

const mapState=(state)=>({
    currentModal:state.modals
})


const ModalManager = ({currentModal}) => {
    let renderedModal;
    if(currentModal){
        const{modalType,modalProps}=currentModal;
        const ModalComponent=modalLookup[modalType];
        renderedModal=<ModalComponent {...modalProps}/>
    }
    return(
       <span>{renderedModal}</span>
    )
}


export default connect(mapState)(ModalManager)