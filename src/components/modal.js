import React, { Component } from 'react';

import '../assets/styles/modal.scss'
import Button from './button'

class modal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalData: [{
                firstName:'',
                lastName:'',
                Gender:'',
                address:'',
                orderTotal:'',
                city:'',
                state:''
            } ]
        };
    }

    componentDidMount(){
        this.setState({
            modalData: [{
                firstName:this.props.data.firstName,
                lastName:'',
                Gender:'',
                address:'',
                orderTotal:'',
                city:'',
                state:''
            } ]
        });
        console.log(this.state.modalData);
        
    }


    render() {

        let modalData = this.props.data;


        return (
            <React.Fragment>
                <div class="blocx-modal">
                    <div class="blocx-modal_header">
                        <img class="blocx-modal_close" src="./app/assets/images/blocx-model_icon-close-default.svg" onClick={this.props.close} alt="close icon" id="close" />
                        <h4>Request Successfully Saved</h4>
                    </div>
                    <div class="blocx-modal_body">
                        <p>
                        <div className="row">
                            <div className="form-group">
                                <label for="fName">First Name</label>
                                <input className="form-control" type="text" value={modalData.firstName} id="fName" name="fName" />
                            </div>
                            <div className="form-group">
                                <label for="lName">Last Name</label>
                                <input className="form-control" type="text" value={modalData.lastName} id="lName" name="lName" />
                            </div>
                        </div>
                        <div className="row"></div>
                        <div className="form-group">
                            <label for="fName">Gender</label>
                            <input className="" type="radio" id="fName" name="fName" />
                        </div>
                        <div className="form-group">
                            <label for="oTotal">Order Total</label>
                            <input className="form-control" type="text" value={modalData.orderTotal} id="oTotal" name="oTotal" />
                        </div>

                        <div className="form-group">
                            <label for="address">Address</label>
                            <input className="form-control" type="text" value={modalData.address} id="address" name="address" />
                        </div>

                        <div className="form-group">
                            <label for="city">City</label>
                            <input className="form-control" type="text" value={modalData.city} id="city" name="city" />
                        </div>

                        <div className="form-group">
                            <label for="state">State</label>
                            <input className="form-control" type="text" value={modalData.state} id="state" name="state" />
                        </div>
                        </p>
                        <div class="btn_controls">
                            <Button class="btn-danger" click={this.props.close} label="Delete" />
                            <Button class="btn-success" click={this.props.close} label="Update" />

                            <Button class="btn-warning" click={this.props.close} label="Cancel" />

                            <Button class="btn-success" click={()=>{}} label="Submit" />
                        </div>
                    </div>
                    
                </div>
                {this.props.isShowing ? <div onClick={this.props.close} className="modal_overlay"></div> : null}
            </React.Fragment>
        );
    }
}

export default modal;